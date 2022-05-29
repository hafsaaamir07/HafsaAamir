//import mongoose inorder to connect to our database
const mongoose = require("mongoose");

//import dotenv inorder to connect to our database
const dotenv = require("dotenv");

//use dotenv to connect our config file
dotenv.config({
    path:"./config.env",
});
//console.log(process.env)
//import our express application
const app = require ("./courseApp");

const AdminCourses = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD))
.then(() => {
    console.log("Database is running")
});

app.listen(3000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})