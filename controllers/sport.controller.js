const sportModel = require("../models/sport.model");

exports.sportCreate = (req, res, next) => {
    sportModel.create(req.body);
    res.status(201).send(); // Mock up
};