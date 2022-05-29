//import mongoose inorder to create a schema
const mongoose = require("mongoose");

//create our course schema
const courseSchema = new mongoose.Schema({
    Course_Name:{
        type: String,
    },
    Course_Id: {
        type: Number,
    },
    Max_Students:{
        type: Number,
    },
    Curr_Students: {
        type: Number,
    },
    Student_List: {
        type: [String],
    },
    Instructor: {
        type: String,
    },
    Section_Number: {
        type: Number,
    },
    Location:{
        type: String,
    },
    Headshot:{
        type: String
    }
})

const Courses = mongoose.model("Courses",courseSchema);

module.exports = Courses;




