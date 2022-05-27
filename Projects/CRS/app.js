//require express inorder build an express application
const express = require("express");

//create a variable to store our express methods
const app = express();

require("dotenv").config();

app.set("view engine","ejs");



//refactor controllers:
const getAllCourses = (req, res) => {
    res.send("index page")
}
const createCourse = (req,res) {
    res.send("post request")
}

const getSingleCourse = (req,res) => {
    res.send(req.params.id)
}

const updateCourse = (req,res) => {
    res.send("update course")
}

const deleteCourse = (req,res) => {
    res.send("deleted course")
}
// index page: list of course
app.get("/admin/courses", getAllCourses)

//shows page: individual course
app.get("/admin/courses/:id", getSingleCourse)

//new page: allows to create a new course
app.get("/admin/courses/new", (req,res) => {
    res.send("new page")
})

//edit page: allows us to edit a single course
app.get("/admin/courses/:id/edit", (req,res) => {
    res.send("edit page")
})
//delete route
app.delete("/admin/courses/:id", deleteCourse)

//update a course
app.patch("/admin/course/:id", updateCourse)

//creates a new course
app.post("/admin/course/", createCourse)









//listeb to the request/response cycle
app.listen(3000, () => {
    console.log(`Listening server on PORT ${process.env.PORT}`);
})




