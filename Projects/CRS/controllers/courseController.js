 //import model to create courses
 const Courses = require("./../models/courseModel") 
 
 exports.adminLogin = (req,res) => {
     res.render("login")
 }
                                              /*route controllers*/
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
exports.showCourse = (req,res) => {
    res.render("show", {course: Courses[req.params.id]})
}

//this initiate a form request to create a new course
exports.newCourse = (req,res) => {
    try{
        res.render("new")
    }
    catch(error){
        res.status(500).json({
            status: "ERROR check showCourse",
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
exports.editCourse = (req,res) => {
    res.render("edit")
}

//this initiates a form request to update a single course
 exports.updateCourse = (req,res) => {
    res.send("updated ",req.params.id)
}
//this initiates a form request to delete a single course
 exports.deleteCourse =  (req,res) => {
    res.send("delete ",req.params.id)
}



//export our controllers to be used in other parts of our application