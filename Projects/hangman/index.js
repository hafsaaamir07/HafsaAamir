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

//displays dashes on the screen 
let word_dashes = document.querySelector("#word_dashes");

//canvas 
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//has letter buttons
let keyboard = document.querySelector("#keyboard");

//word from api
//let word = "apples";
let word;
let letters = "";
let word_array;
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
    player_nameDisplay[0].innerHTML = `${form.children[0].value}`;
    player_nameDisplay[1].innerHTML = `${form.children[1].value}`;
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
    word = word[0].toUpperCase();
    word_array = word.split("");
    console.log(word);
    //glows player 1 name to indicate player 1 turn
    player_nameDisplay[0].classList.add("glow");

    //player 1 timer starts
    stop_time1 = setInterval (()=> {
        time(time1,p1_time)
        time1++
    },1000)

    let keys = document.querySelectorAll(".btn_key");
    currPlay1 = true;
    for (let i = 0; i < keys.length; i++){
            keys[i].onclick = function (event){
                if (currPlay1){
                    let match = letterMatch(event.target.id)
                    if (match == true){
                        currPlay2 = false;
                    }
                    else{
                        currPlay2 = true;
                        if (currPlay2){
                            letterMatch(event.target.id);
                            currPlay1 = false;
                            switchPlayer(player_nameDisplay[0],player_nameDisplay[1],stop_time1)
                            stop_time2 = setInterval (()=> {
                                time(time2,p2_time)
                                time2++
                            },1000)
                        }
                        else{
                            currPlay1 = true
                            switchPlayer(player_nameDisplay[1],player_nameDisplay[0],stop_time2)

                        }
                    }
                }
              /*PLAYER 1 */
                    //if there is a letter match 
                    //player 1 continues
                    //give them glow class
                    //chnage keyboard key text color for player 1
                    //remove glow class from player 2
                    //stop player 2 timer
                    // currplay2 is false

                /*PLAYER 2 */
                    //lettermatch
                    // if there is a letter match 
                    //player 2 contnues 
                    //give player 2 glow class
                    //change keyboard color text for player 2
                    //remove glow class from player 1
                    //stop player 1 timer
                    //currPlay1 is false

    
    
                /*Game Logic 
                    1) player one clicks start button on game screen
                    2) once start button is clicked player ones timer starts
                        --> when player 1 clicks a letter and the letter is in
                            the word player 1 continues to play and the timer continues
                        --> if the letter they click is not in the word their timer stops
                        and its player 2 turn
                    3)As soon as player 1 turns over player 2 turn starts and player 2 timer
                        --> player two goes and clicks a letter if letter in word they continue
                        to play and their timer continues. 
                        --> if letter clicked not in word then timer stops and its player1
                            turn
                    4) this continues until one player continously guesses letter correct 
                    and if they continously guess the letter correct and guess the whole word
                    they win and game ends
                    5)when game ends they are given the option to restart
                */




            }
        }



}
//takes in player 1 and 2 display, also takes in time of player that answered wrong 
function switchPlayer(curr1_display, curr2_display,time){ 
        curr1_display.classList.remove("glow");
        curr2_display.classList.add("glow");
        stop_time(time);
}
function letterMatch(event) {
    temp = false;
    for (let i = 0; i < word_array.length; i ++){
        console.log(word_array[i],event);
        if (word_array[i] === event){
            temp = true;
            let p = document.createElement("p");
            p.innerHTML = event;
            word_dashes.children[i].replaceWith(p);
        }
       //else{ // all this goes in the 
            //console.log("letter not in word")
            /*stop_time(stop_time1);
            player_nameDisplay[0].classList.remove("glow");
            player_nameDisplay[1].classList.add("glow");
            stop_time2 = setInterval (()=> {
                time(time2,p2_time)
                time2++
            },1000)*/
      //  }

    }
    if (temp){
        return 0;
    }
    else{
        return 1;
    }
    //check if its true and then it means char is in there //return 0 is temp is false
    //outside this if return 1


    /*word_array.filter(each => {
        if (each !== event){
            return each;
        }
        console.log(each.indexOf(each));
    })*/

    /*console.log(event,word_array);
    //word_arrya.filter(key =>{ if })
    if (word_array.includes(event)){
        let p = document.createElement("p");
        p.innerHTML = event;
        let index = word_array.indexOf(event);
        console.log(index);
        console.log(word_dashes.children[index]);
        word_dashes.children[index].replaceWith(p)
        letters += event
        return 1;
    }*/
    /*else{
        stop_time(stop_time1);
            player_nameDisplay[0].classList.remove("glow");
            player_nameDisplay[1].classList.add("glow");
            stop_time2 = setInterval (()=> {
                time(time2,p2_time)
                time2++
            },1000)
    }*/
    //random_word=PRAISE
    /*letter += letter;
    //letter = ""+P
    console.log("this is random word: ",random_word[0])
    console.log("this is letter: ",letter[0]);
    if (random_word[0] == letter[0]){
        console.log("hello");
    }
    
    for (let i = 0; i < word_array.length; i ++){
        console.log(word_array[i]);
        if (word_array[i] === letter){
            let p = document.createElement("p");
            p.innerHTML = letter;
            word_dashes.children[i].replaceWith(p);
            break;
        }
        else{
            stop_time(stop_time1);
            player_nameDisplay[0].classList.remove("glow");
            player_nameDisplay[1].classList.add("glow");
            stop_time2 = setInterval (()=> {
                time(time2,p2_time)
                time2++
            },1000)
        }
    }*/
}



function dashes (){
    for (let i = 0; i < 6; i++){
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


