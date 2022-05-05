/********************Start Screen Controls********************/ 
let start_screen = document.querySelector("#start_screen"); // div holding instructions + form
let form = document.querySelector("form") //form for player names
let form_btn = document.querySelector("#form_btn");
//will hold value of names from form
let p1_name; 
let p2_name;


/*************Game Screen Controls***************************/
let game_screen = document.querySelector("#game_screen");
let start_btn = document.querySelector("#start_btn");

//left and right side of the screen that displays p1 and p2 name + time
let player_nameDisplay = document.querySelectorAll(".display");

let p1_time = document.querySelector ("#p1_time");
let p2_time = document.querySelector ("#p2_time");

//canvas 
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//has letter buttons
let keyboard = document.querySelector("#keyboard");

//word from api
let word

//time counter for player 1 and 2
let time1 = 0; 
let time2 = 0;

let p1_totalTime = 0;
let p2_totalTime = 0;

//for clearInterval
let stop_time1;
let stop_time2;

//tracking who is currently playing
let currPlay1=false;
let currPlay2=false;


//when form is submit start screen is hidden and game screen is on
form_btn.onclick = function(event){
    event.preventDefault();
    //displays name of player 1 and 2 on opposite sides of the screen
    player_nameDisplay[0].innerHTML = `${form.children[0].value}`
    player_nameDisplay[1].innerHTML = `${form.children[1].value}`
    
    start_screen.classList.add("hidden");
    game_screen.classList.remove("hidden");
 
}

//fetch request to get random word
async function randomWord(){
    const response = await fetch('https://random-word-api.herokuapp.com/word?length=6');
    word = await response.json();
} 
//if player one guesses a correct letter they continue on to guess until they get it wrong
randomWord();
start_btn.onclick = function (){
    console.log("word",word)

    //glows player 1 name to indicate player 1 turn
    player_nameDisplay[0].classList.add("glow");

    //player 1 timer starts
    stop_time1 = setInterval (()=> {
        time(time1,p1_time)
        time1++
    },1000)

    let keys = document.querySelectorAll(".btn_key");
    for (let i = 0; i < keys.length; i++){
            keys[i].onclick = function (event){
                p1_totalTime += time1;
                stop_time(stop_time1);

                if (currPlay1 == false){
                    currPlay1 = event.target.id
                }
                //else if (currPlay1 == false and currPlay2 != event.target.id ){
                    
                //}
            }
        }



}



function dashes (){
    for (let i = 0; i < 6; i++){
    let word_dashes = document.querySelector("#word_dashes");
    let hr = document.createElement("hr");
    hr.classList.add("dashed_line");
    //p.innerHTML = "-";
    word_dashes.appendChild(hr);

    }
}
dashes();

//function that updates time on screen and counter
function time (counter, selector){
    counter++;
    selector.innerHTML = `Time: ${counter}`;
}

//to clearInterval
function stop_time (t){
    clearInterval(t);
}



function keyboard_keys (){
    let alphabet = "ABCDEFGHIJKLMNOPQRTSUVWXYZ"
    let letter = alphabet.split("");

    letter.map (letter => {
        let btn = document.createElement("button");
        btn.classList.add("btn_key");
        btn.innerHTML = letter;
        btn.id = letter;
        for (let i = 0; i < 3; i ++){
            if (keyboard.children[0].children.length < 11){
                keyboard.children[0].appendChild(btn)
            }
            else if (keyboard.children[1].children.length < 9){
                keyboard.children[1].appendChild(btn)
            }
            else{
                keyboard.children[2].appendChild(btn);
            }
        }
    })
}
keyboard_keys();

function stand (){
    /*ctx.beginPath();
    ctx.moveTo(100, 180);
    ctx.lineTo(400, 180);
    ctx.stroke();*/
    ctx.beginPath()
    ctx.moveTo(500,250); 
    ctx.lineTo(500,250); 
    ctx.moveTo(30,250); 
    ctx.lineTo(30,70); 
    ctx.lineTo(150,70); 
    ctx.lineTo(150,100); 
    ctx.stroke(); 
}
stand();

function head(){
    ctx.beginPath();
    ctx.arc (250,50,20,0,2*Math.PI);
    ctx.stroke();
}

function body(){
    ctx.beginPath();
    ctx.arc (250,50,20,0,2*Math.PI);
    ctx.stroke();
}

//head();







/*fetch('https://random-word-api.herokuapp.com/word?length=6')
    .then(response => response.json())
    .then(data=> { console.log(data);
    })*/

//https://developer.wordnik.com/docs#!/words/getRandomWords
//https://stackoverflow.com/questions/26622708/how-to-get-random-word-using-wordnik-api-in-javascript
    //https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SKD-bqAkQjhvrjayf/videoblocks-closeup-mathematical-formula-and-elements-on-blackboard-school-background-elegant-and-luxury-animation-footage-of-education-theme_rwsiewycn_thumbnail-1080_01.png


