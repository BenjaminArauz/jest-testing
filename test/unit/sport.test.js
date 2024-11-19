const SportController = require("../../controllers/sport.controller");
const SportModel = require("../../models/sport.model");
const newSport = require("../mockups/sport_mockup.json");
const httpMocks = require("node-mocks-http");

SportModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    res = httpMocks.createResponse();
    req = httpMocks.createRequest();
    next = null;
});

describe("Test Create method exists in controller", () => {
    // check if the create method exists
    it("should have a create method", () => {
        expect(typeof SportController.sportCreate).toBe("function");
    });

    // test the create method
    it("should call sportModel.create", () => {
        req.body = newSport;
        SportController.sportCreate(req, res, next);
        expect(SportModel.create).toBeCalledWith(newSport);
    });

    // test the status code
    it("should return 201 status code", () => {
        req.body = newSport;
        SportController.sportCreate(req, res, next);
        expect(res.statusCode).toBe(201);
    });
});