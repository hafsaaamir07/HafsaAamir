 /*Refactor route controllers*/

 const Learner = require("../models/learnerModel");

// This is to retrieve all the learners at once
exports.getAllLearners =  async (request, response) => {
  try{
    //get all learners
    const learners = await Learner.find();

    //send response
      response.status(200).json({
        status: "sucsess",
        data: {
          learners,
        },
      });
  }
  catch(error){
    response.status(500).json({
      status: "error",
      message: error,
    })
  }
};
  
// This controller is to create a new learner
exports.createLearner = async (request, response) => {
  try {
    //create our first learner
    const newLearner = await Learner.create(request.body)
    response.status(201).json({
      status: "success",
      data: {
        newLearner,
      },
    });
  }
  catch(error){
    response.status(500).json({
      status: "error",
      message: error,
    })
  }
};
  
// This controller is to retrieve a single learner
exports.getSingleLearner = async (request, response) => {
  try{
    //find a single learner using the id
    const learner = await Learner.findById(request.params.id)
      response.status(200).json({
      status: "success",
      data: {
        learner,
      },
    });
  }
  catch(error){
    response.status(500).join({
      status: "error",
      message: error,

    })
  }
};
  
// This controller is to update a single learner data
exports.updateLearner = async (request, response) => {
  try {
    //find and upadte learner
    //firsdt param takes the id, then the patch method, third will return the updated user
    const updateLearner = await Learner.findByIdAndUpdate(request.params.id, request.body, {new: true});
    response.status(200).json({
      status: "sucess",
      data: {
        updateLearner,
      },
    });
  }
  catch(error){
    response.status(500).join({
      status: "error",
      message: error,
    })

  } 
};

// This controller is to delete a single learner
exports.deleteLearner = async (request, response) => {
  try{
    await Learner.findByIdAndDelete(request.params.id)
    response.status(204).json({
      status: "fail",
    });
  }
  catch(error){
    response.status(500).join({
      stauts: "error",
      message: error,
    })
  }  
};

