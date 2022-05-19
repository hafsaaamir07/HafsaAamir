 /*Refactor route controllers*/

// This is to retrieve all the learners at once
exports.getAllLearners = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
// This controller is to create a new learner
exports.createLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
// This controller is to retrieve a single learner
exports.getSingleLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
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

