
const express = require ("express");
//creates a varaible to store express methods 

const app = express();

//import router
const learnerRouter = require("./routes/learnerRoutes")

//create a middleware to parse the request body
app.use(express.json())

// Create a middleWare to handle route /api/v1/learners/
// /api/v1/learners/:id
app.use("/api/v1/learners", learnerRouter);

//create a way to handle errors
//app.all is used to handle errors for all routes
// The star means all routes
// once this code is exectued this means nothing else could run
app.all("*",(request, response, next) => {
    //create the actual error
    //creating new errors using the error class
    const routeErrors = new Error("ooops! Cannot find ${request.originalUrl} on our servers...")
})


module.exports = app;