//require express inorder to build an express application
const express = require("express");

//create a variable to store our express methods
const app = express();

//setting our view engine to ejs
app.set("view engine","ejs");

                                                /**************refactoring route controllers**************/
// this is to retrieve all the courses at once
const getAllCourses = (req,res) => {
    res.render("index")
}
//this is to create a a new course
const createCourse = (req,res) => {
    res.send("created a new course")
}
//this is to retrieve a single course
const showCourse = (req,res) => {
    res.render("show")
}
//this initiates a form request to update a single course
const updateCourse = (req,res) => {
    res.send("updated ",req.params.id)
}
//this initiates a form request to delete a single course
const deleteCourse =  (req,res) => {
    res.send("delete ",req.params.id)
}
//this initiate a form request to create a new course
const newCourse = (req,res) => {
    res.render("new")
}
//this is to edit a single course
const editCourse = (req,res) => {
    res.render("edit")
}
//create an exppress router 
const courseRouter = express.Router();
                                                            /**************middleware**************/
//creating middleware to handle routes
app.use("/admin/courses", courseRouter)
                                                       /*************refactor our route handlers*************/
//base route
courseRouter.route("/").get(getAllCourses).post(createCourse) // if we do "/admin/courses" plus "/" will take me to these routes
courseRouter.route("/:id").get(showCourse).patch(updateCourse).delete(deleteCourse)
courseRouter.route("/new").get(newCourse)
courseRouter.route("/:id/edit").get(editCourse)


                                                   /*************creating route handlers
//index (displays all courses) route
app.get("/", getAllCourses) // "/admin/courses" 

//create a course route
app.post("/", createCourse) // "/admin/courses"

//show a course route
app.get("/:id",showCourse) // "/admin/courses/:id"

//update a course route
app.patch("/:id", updateCourse) // "/admin/courses/:id"

//delete a course route
app.delete("/:id", deleteCourse) // "/admin/courses/:id"

//new course route
app.get("/admin/courses/new", newCourse) // "/admin/courses/new"

//edits a course route
app.get("/:id/edit", editCourse) // "/admin/courses/:id/edit" **************/


module.exports = app;