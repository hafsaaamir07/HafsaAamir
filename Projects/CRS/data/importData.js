//recpnnect to data base here in this file import mongoose and do mongoose.connect
//import my model from my schema
//create a function parseData this function 
// do try block await model name .create and inside create we will pass the data array
//csatcg block 
//finally block we dp process.exit


//readfilesync
//pass path to file and give utf-8

//if block process.argv[2] === "--import"{
    //call pasredata()
//}




const mongoose = require("mongoose");
const Courses = require("./../models/courseModel")

const csv = require("csv-parser");
const fs = require("fs");

const dotenv = require("dotenv");
const { parse } = require("path");
dotenv.config({
    path:"./../config.env",
});

//connecting to database
const AdminCourses = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD))
.then(() => {
    console.log("Database is running")
});

//const courseData =[];
const headers = [
    "Course_Name",
    "Course_Id",
    "Units",
    "Course_Number",
    "Semester_Level",
    "Prereq",
    "Course_Description",
    "Max_Students",
    "Curr_Students",
    "Student_List",
    "Instructor",
    "Section_Number",
    "Location",
    "Headshot"
]
function parseData () {
    //const courseData =[];
    fs.createReadStream("./../data/MyUniversityCourses.csv")
    .pipe(csv(headers))
    .on ("data", function (dataRow){
        Courses.create(dataRow)
    })
    .on("end", function(dataRow) {
        //console.log(courseData)
        console.log("finished")
    })
}


const dataImportMongoDB = async () => {
    await AdminCourses.then(async (mongoose) => {
        try{
            console.log("conneted to mongo bd")
            await new Courses(parseData()).save()   
        }
        catch(error){
            console.log(error)
          } 
    })
}
dataImportMongoDB()

