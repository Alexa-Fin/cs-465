const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('trips');

// GET: /trips/:tripCode - find trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Model.findOne({ code: req.params.tripCode }).exec();

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json({ message: "Error retrieving trip", error: err });
    }
};

const tripsList = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // No filter, return all records
        .exec();

    if(!q)
    {
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);

    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};