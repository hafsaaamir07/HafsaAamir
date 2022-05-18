const express = require ("express");
const app = express();

               /*Refactor route controllers*/

// This is to retrieve all the learners at once
const getAllLearners = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
// This controller is to create a new learner
const createLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
// This controller is to retrieve a single learner
const getSingleLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
// This controller is to update a single learner data
const updateLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };

  // This controller is to delete a single learner
const deleteLearner = (request, response) => {
    response.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
  
                       /*Creating route handlers */
//getting names of all learners
app.get("/api/v1/learners", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})

//allow us to add a new learner
app.post("/api/v1/learners", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})

//getting one single learner
app.get("/api/v1/learners/:id", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})

//getting one learner so we can update their info 
app.patch("/api/v1/learners/:id", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})

//delete a learner
app.delete("/api/v1/learners/:id", (request,response) => {
    response.status(500).json({
        status:"fail",
        data: {
            message: "undefined routes"
        }
    })
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})