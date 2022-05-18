const express = require ("express");
const app = express();

app.get("/api/v1/learners", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})
app.post("/api/v1/learners", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})
app.get("/api/v1/learners/:id", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})

app.patch("/api/v1/learners/:id", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})
app.delete("/api/v1/learners/:id", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})












const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})