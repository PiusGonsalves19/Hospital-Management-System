const express = require("express");
const router = express.Router();

const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");
const Billing = require("../models/Billing");

// Get Dashboard Statistics
router.get("/", async (req, res) => {

    try {

        const totalPatients = await Patient.countDocuments();
        const totalDoctors = await Doctor.countDocuments();
        const totalAppointments = await Appointment.countDocuments();
        const totalBills = await Billing.countDocuments();

        res.json({
            totalPatients,
            totalDoctors,
            totalAppointments,
            totalBills
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;