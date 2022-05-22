const express = require("express");
const app = express();
require("dotenv").config();

const fruitData = require (".models/fruits");


app.get("/fruits/",(req,res) => {
    res.send(fruitData);
});

app.get("/fruits/:indexOfFruitsArray", (req,res) =>{
    res.send(fruitDta[req.params.indexOfFruitsArray]);
});