const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Add Appointment
router.post("/add", async (req, res) => {
    try {
        const appointment = new Appointment(req.body);

        await appointment.save();

        res.status(201).json({
            message: "Appointment Added Successfully",
            appointment
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find();

        res.json(appointments);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Delete Appointment
router.delete("/:id", async (req, res) => {
    try {

        await Appointment.findByIdAndDelete(req.params.id);

        res.json({
            message: "Appointment Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Update Appointment
router.put("/:id", async (req, res) => {
    try {

        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedAppointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        res.json({
            message: "Appointment Updated Successfully",
            appointment: updatedAppointment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

module.exports = router;