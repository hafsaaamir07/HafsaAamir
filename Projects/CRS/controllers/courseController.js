                                              
                                              /*route controllers*/
// this is to retrieve all the courses at once
 exports.getAllCourses = (req,res) => {
    res.render("index")
}
//this is to create a a new course
 exports.createCourse = (req,res) => {
    res.send("created a new course")
}
//this is to retrieve a single course
 exports.showCourse = (req,res) => {
    res.render("show")
}
//this initiates a form request to update a single course
 exports.updateCourse = (req,res) => {
    res.send("updated ",req.params.id)
}
//this initiates a form request to delete a single course
 exports.deleteCourse =  (req,res) => {
    res.send("delete ",req.params.id)
}
//this initiate a form request to create a new course
 exports.newCourse = (req,res) => {
    res.render("new")
}
//this is to edit a single course
 exports.editCourse = (req,res) => {
    res.render("edit")
}

//export our controllers to be used in other parts of our application