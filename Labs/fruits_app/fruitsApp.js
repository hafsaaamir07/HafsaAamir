const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views"),createEngine());


const fruitData = require (".models/fruits");

app.get("/fruits/",(req,res) => {
    res.send(fruitData);
});

app.get("/fruits/:indexOfFruitsArray", (req,res) =>{
    res.send(fruitDta[req.params.indexOfFruitsArray]);
});