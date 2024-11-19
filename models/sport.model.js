const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    players: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});

const sportModel = mongoose.model("Sport", sportSchema);
module.exports = sportModel;