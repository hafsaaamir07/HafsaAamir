const express = require ("express");
const app = express();

app.get ("/greeting/:name", (req,res) => {
    res.send (`<h1>Hello, ${req.params.name}! It's so nice to see you!`)
})


app.get("/tip/:total/:tipPercentage", (req,res) => {
    let tp = req.params.tipPercentage /100
    let tot = req.params.total * tp;
    res.send(`<h1>Your tip will be... ${tot}</h1>`);
})

const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", 
"As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", 
"My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:phrase", (req,res) => {
    let random = parseInt(Math.random()*arr.length)
    res.send (`<h3>${req.params.phrase}... ${arr[random]}</h3>`)

})





app.listen(3000, () =>{
    console.log("listening on port 3000");
})