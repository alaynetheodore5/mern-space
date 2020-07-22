const mongoose = require("mongoose");


const MoonSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    }
}, {timestamps: true});

// module.exports = mongoose.model("Moon", MoonSchema);
module.exports = MoonSchema;