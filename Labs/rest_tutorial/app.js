const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require ("dotenv/config");


app.use(bodyParser.json());
//Import Routes
const postsRoute = require("./routes/posts")
app.use ("/posts", postsRoute);


//Routes
app.get("/",(req,res) => {
    res.send("We are on home");
})

 //Connect to DB
 mongoose.connect(process.env.DB_Connection, () => {
     console.log("connected to DB!")
 })

 //How do we start listenin gto the server
 app.listen(3000, () => {
     console.log("listening on port 3000")
 });