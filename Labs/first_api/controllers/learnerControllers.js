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
          learners: learners,
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
        newLearner: newLearner,
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
        learner: learner,
      },
    });
  }
  catch(error){
    response.status(500).join({
      stauts: "error",
      message: error,

    })
  }
  };
  
// This controller is to update a single learner data
exports.updateLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };

// This controller is to delete a single learner
exports.deleteLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };

