//import express to create express routers
const express = require("express");
const { model } = require("mongoose");

//create an express router
const courseRouter = express.Router();

//import course controllers 
const courseController = require("./../controllers/courseController")

                                                        /*route handlers*/
//base route
courseRouter.route("/")
    .get(courseController.getAllCourses)
    .post(courseController.createCourse) // if we do "/admin/courses" plus "/" will take me to these routes
courseRouter.route("/:id")
    .get(courseController.showCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse)
courseRouter.route("/new")
    .get(courseController.newCourse)
courseRouter.route("/:id/edit")
    .get(courseController.editCourse)

//export our router to be used in other parts of the our application
// this is a single export
model.exports = courseRouter;