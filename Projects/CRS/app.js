//require express inorder build an express application
const express = require("express");

//create a variable to store our express methods
const app = express();

require("dotenv").config();

app.set("view engine","ejs");

//create route handlers
app.get("/admin/course",(req,res) => {
    res.send()
})





//listeb to the request/response cycle
app.listen(3000, () => {
    console.log(`Listening server on PORT ${process.env.PORT}`);
})




