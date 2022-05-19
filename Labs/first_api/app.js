const express = require ("express");
const app = express();

const learnerRouter = require("./routes/learnerRoutes")

// Create a middleWare to handle route /api/v1/learners/
// /api/v1/learners/:id
app.use("/api/v1/learners", learnerRouter);

module.exports = app;