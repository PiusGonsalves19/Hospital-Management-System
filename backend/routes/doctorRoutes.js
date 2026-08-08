const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// Add Doctor
router.post("/add", async (req, res) => {
    try {
        const doctor = new Doctor(req.body);

        await doctor.save();

        res.status(201).json({
            message: "Doctor Added Successfully",
            doctor
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Doctors
router.get("/", async (req, res) => {
    try {
        const doctors = await Doctor.find();

        res.json(doctors);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Delete Doctor
router.delete("/:id", async (req, res) => {
    try {

        await Doctor.findByIdAndDelete(req.params.id);

        res.json({
            message: "Doctor Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Update Doctor
router.put("/:id", async (req, res) => {
    try {

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }

        res.json({
            message: "Doctor Updated Successfully",
            doctor: updatedDoctor
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

module.exports = router;