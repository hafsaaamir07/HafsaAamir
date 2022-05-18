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
//create a express router
  const learnerRouter = express.Router();


// Create a middleWare to handle route /api/v1/learners/
// /api/v1/learners/:id

app.use("/api/v1/learners",learnerRouter);

// Lets refactor route handles
app.route("/").get(getAllLearners).post(createLearner);
app.route("/:id")
.get(getSingleLearner)
.patch(updateLearner)
.delete(deleteLearner);



const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})