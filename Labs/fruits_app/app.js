const express = require("express");
const app = express();
require ("dotenv").config // link env



app.get("/fruits",(req,res) => {
    res.render("Index");
});

//add show route
app.get("/fruits/:indexofFruitsArray",(req,res) => {
    res.render("Show", {fruit: fruitData[req.params.indexofFruitsArray]});
});

app.listen (3000, () => {
    console.log(`listening to port ${process.env.PORT}`);
});