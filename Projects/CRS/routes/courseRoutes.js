//import express to create express routers
const express = require("express");
const app = require("../courseApp");

//create an express router
const courseRouter = express.Router();

//import course controllers 
const courseController = require("./../controllers/courseController")

                                                        /*route handlers*/
//base route
//post request for login 
courseRouter.route("/login")
    .get(courseController.adminLogin)
    .post(courseController.authenticateLogin)
courseRouter.route("/") 
    .get(courseController.getAllCourses) // if we do "/admin/courses/:id" plus "/" will take me to these routes
    .post(courseController.createCourse) 
courseRouter.route("/new")
    .get(courseController.newCourse)
courseRouter.route("/:id")
    .get(courseController.showCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse)
courseRouter.route("/:id/edit")
    .get(courseController.editCourse)
   

//export our router to be used in other parts of the our application
// this is a single export
module.exports = courseRouter;

