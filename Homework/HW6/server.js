const express = require ("express");
const app = express();

//greetings page
app.get ("/greeting/:name", (req,res) => {
    res.send (`<h1>Hello, ${req.params.name}! It's so nice to see you!`)
})

// tip calculator page
app.get("/tip/:total/:tipPercentage", (req,res) => {
    let tp = req.params.tipPercentage /100
    let tot = req.params.total * tp;
    res.send(`<h1>Your tip will be... ${tot}</h1>`);
})


//magic 8 ball page
const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", 
"As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", 
"My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:phrase", (req,res) => {
    let random = parseInt(Math.random()*arr.length)
    res.send (`<h3>${req.params.phrase}... ${arr[random]}</h3>`)

})

//fibonacci page
app.get("/fibonacci/:number", (req,res) => {
    function isFib(a){
        let fib1 = (5*Math.pow(a,2))+4;
        let fib2 = (5*Math.pow(a,2))-4
        if (a >= 0 && (Math.sqrt(fib1) % 1 === 0 || Math.sqrt(fib2) % 1 === 0)){
            return `<h1>Very good. It is Fibonacci.</h1>`
        }
        return `<h1>I can tell this is not a Fibonacci number.</h1>`
    }
    res.send (isFib(req.params.number))
})



app.listen(3000, () =>{
    console.log("listening on port 3000");
})