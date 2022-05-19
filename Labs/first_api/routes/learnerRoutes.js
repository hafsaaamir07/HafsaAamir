//import express to create express routers
const express = require("express");

//create a express router
const router = express.Router();

const learnerControllers = require('../controllers/learnerControllers')

// Lets refactor route handles
router
    .route("/")
    .get(learnerControllers.getAllLearners)
    .post(learnerControllers.createLearner);

router.
    route("/:id")
    .get(learnerControllers.getSingleLearner)
    .patch(learnerControllers.updateLearner)
    .delete(learnerControllers.deleteLearner);

module.exports = router;
