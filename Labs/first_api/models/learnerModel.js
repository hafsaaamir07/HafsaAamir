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

const Learner = mongoose.model("Learner", learnSchema);