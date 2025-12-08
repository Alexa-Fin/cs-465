const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router 
    .route("/trips")
    .get(tripsController.tripsFindByCode); //GET method routes tripList
    .post(tripsController.tripsUpdateTrip); //POST Method adds a trip

//GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};