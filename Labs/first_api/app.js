
const express = require ("express");
//creates a varaible to store express methods 
const app = express();

//create a middleware to parse the request body
app.use(express.json())


//import router
const learnerRouter = require("./routes/learnerRoutes")

// Create a middleWare to handle route /api/v1/learners/
// /api/v1/learners/:id
app.use("/api/v1/learners", learnerRouter);

module.exports = app;