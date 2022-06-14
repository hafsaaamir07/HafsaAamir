                                                                        /*route controllers*/

 //import model to create courses
 const Courses = require("./../models/courseModel") 

 const dotenv = require("dotenv");
 dotenv.config({
    path:"./../config.env",
});
 
 exports.adminLogin = (req,res) => {
    res.render("login")
 }
 exports.authenticateLogin = (req,res) => {
    if (req.body.netID === process.env.ADMIN_USERNAME && req.body.pass === process.env.ADMIN_PASSWORD){
        res.redirect("/admin/courses/")
    }
    else{
        res.redirect("/admin/courses/login")
    }
 }

// this is to retrieve all the courses at once
 exports.getAllCourses = async (req,res) => {
     try {
        const courses = await Courses.find();
           res.render("index", {courseList: courses})
    }
    catch(error){
        res.status(500).json({
            status: "ERROR check getAllCourses",
            message: error,
        })
    }
}

//this is to retrieve a single course
exports.showCourse = async (req,res) => {
    try{
        const singleCourse = await Courses.findById(req.params.id)
        res.render("show", {course: singleCourse})  
    }
    catch(error){
        res.status(500).json({
            status: "ERROR check showCourse",
            message: error,
        })
    }
}

//this initiate a form request to create a new course
exports.newCourse = (req,res) => {
    try{
        res.render("new")
    }
    catch(error){
        res.status(500).json({
            status: "ERROR check newCourse",
            message: error,
        })
    }
}

//this is to create a a new course
 exports.createCourse = async (req,res) => {
     try{
        const courseCreated = await Courses.create(req.body);
        res.redirect("/admin/courses/")
     }
     catch(error){
        res.status(500).json({
            status: "ERROR check createCourse",
            message: error,
        })
    }
}

//this is to edit a single course
exports.editCourse = async (req,res) => {
    try{
        const editSingleCourse = await Courses.findById(req.params.id)
        res.render("edit",{course: editSingleCourse})
    }
    catch(error){
        res.status(500).json({
            status: "ERROR check editCourse",
            message: error,
        })
    }
}

//this initiates a form request to update a single course
 exports.updateCourse = async (req,res) => {
     try{
        await Courses.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect(`/admin/courses/${req.params.id}`)
     }
     catch(error){
        res.status(500).json({
            status: "ERROR check updateCourse",
            message: error,
        })
    } 
}

//this initiates a form request to delete a single course
 exports.deleteCourse =  async (req,res) => {
     try{
        await Courses.findByIdAndDelete(req.params.id)
        res.redirect("/admin/courses/")
     }
     catch(error){
        res.status(500).json({
            status: "ERROR check deleteCourse",
            message: error,
        })
    }
}



//export our controllers to be used in other parts of our application