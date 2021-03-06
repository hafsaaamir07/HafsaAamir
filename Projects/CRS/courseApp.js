//require express inorder to build an express application
const express = require("express");

//create a variable to store our express methods
const app = express();

var methodOverride = require('method-override')

//import course routes
const courseRoutes = require("./routes/courseRoutes")

//setting our view engine to ejs
app.set("view engine","ejs");




//create a middleware to parse the request body
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//creating middleware to handle routes
app.use("/admin/courses", courseRoutes);



module.exports = app;

/*************refactor our route handlers**********
//base route
courseRouter.route("/")
    .get(courseController.getAllCourses)
    .post(courseController.createCourse) // if we do "/admin/courses" plus "/" will take me to these routes
courseRouter.route("/:id")
    .get(courseController.showCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse)
courseRouter.route("/new").get(courseController.newCourse)
courseRouter.route("/:id/edit").get(courseController.editCourse) *//////


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


