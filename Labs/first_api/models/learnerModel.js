const mongoose = require("mongoose");

const learnerSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
    },
    age: {
        type: Number,
    },
    location:{
        type: String,
    },
    courses:{
        type: [String]
    }
})

//creating our model
const Learner = mongoose.model("Learner", learnerSchema);

//export pur learner model to other parts
module.exports = Learner; //single export of the model