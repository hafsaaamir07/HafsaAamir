//import mongoose inorder to connect to our database
const mongoose = require("mongoose");

//import dotenv inorder to connect to our database
const dotenv = require("dotenv");

//use dotenv to connect our config file
dotenv.config({
    path:"./config.env",
});

//import our express application
const app = require ("./app");

//create a variable to represent our database *when ever we connect to our database its asynchronous*
//so we need to handle that promise
const perscholasDB = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database is up and running")
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
