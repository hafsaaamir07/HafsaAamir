//import mongoose inorder to connect to our database
const mongoose = require("mongoose");

//import dotenv inorder to connect to our database
const dotenv = require("dotenv");

//use dotenv to connect our config file
dotenv.config({
    path:"./config.env",
});


//import our express application
const app = require ("./courseApp");

//connecting to database
const AdminCourses = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD))
.then(() => {
    console.log("Database is running")
});

//running port
app.listen(3000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})