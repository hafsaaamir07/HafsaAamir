const express = require("express");
const app = express();
require ("dotenv").config // link env

const fruitData = require ("./models/fruits")


app.get("/fruits/",(req,res) => {
    res.send(fruitData);
});

//add show route
app.get("/fruits/:indexofFruitsArray",(req,res) => {
    res.send(fruitData[req.params.indexofFruitsArray]);
});

app.listen (3000, () => {
    console.log(`listening to port ${process.env.PORT}`);
});