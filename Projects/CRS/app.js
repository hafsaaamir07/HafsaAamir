//require express inorder to build an express application
const express = require("express");

//create a variable to store our express methods
const app = express();

//setting our view engine to ejs
app.set("view engine","ejs");

                                                /**************refactoring route controllers**************/
const getAllCourses = (req,res) => {
    res.render("index")
}
const createCourse = (req,res) => {
    res.send("created a new course")
}
const showCourse = (req,res) => {
    res.render("show")
}
const updateCourse = (req,res) => {
    res.send("updated ",req.params.id)
}
const deleteCourse =  (req,res) => {
    res.send("delete ",req.params.id)
}
const newCourse = (req,res) => {
    res.render("new")
}
const editCourse = (req,res) => {
    res.render("edit")
}
                                                      /*************creating route handlers**************/
//index (displays all courses) route
app.get("/admin/courses", getAllCourses)

//create a course route
app.post("/admin/courses/", createCourse)

//show a course route
app.get("/admin/courses/:id",showCourse)

//update a course route
app.patch("/admin/courses/:id", updateCourse)

//delete a course route
app.delete("/admin/courses/:id", deleteCourse)

//new course route
app.get("/admin/courses/new", newCourse)

//edits a course route
app.get("/admin/courses/:id/edit", editCourse)


module.exports = app;