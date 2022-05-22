const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "jsx");
app.engine("jsx",require("express-react-views").createEngine());


const fruitData = require ("./models/fruits");

app.get("/fruits/",(req,res) => {
    res.render("Index", {fruits: fruitData});
});

app.get("/fruits/:indexOfFruitsArray", (req,res) =>{
    //pass the file name with view, callback
    res.render("Show", {fruit: fruitData[req.params.indexOfFruitsArray]});
});

app.listen(3000, ()=> {
    console.log(`Currently listening on PORT ${process.env.PORT}`)
})