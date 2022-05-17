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






app.listen(3000, () =>{
    console.log("listening on port 3000");
})