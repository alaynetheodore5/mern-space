const mongoose = require("mongoose");
const MoonSchema = require("./moon.model");

const PlanetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    color: {
        type: String,
        required: [true, "Color is required"]
    },
    hasRings: {
        type: Boolean
    },
    moons: [MoonSchema]

}, {timestamps: true});

module.exports = mongoose.model("Planet", PlanetSchema);