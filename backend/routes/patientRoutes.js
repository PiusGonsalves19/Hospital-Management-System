const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post("/add", async (req, res) => {
    try {
        const patient = new Patient(req.body);

        await patient.save();

        res.status(201).json({
            message: "Patient Added Successfully",
            patient
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get all patients
router.get("/", async (req, res) => {
    try {
        const patients = await Patient.find();

        res.json(patients);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Delete Patient
router.delete("/:id", async (req, res) => {
    try {

        await Patient.findByIdAndDelete(req.params.id);

        res.json({
            message: "Patient Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Update Patient
router.put("/:id", async (req, res) => {
    try {

        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedPatient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.json({
            message: "Patient Updated Successfully",
            patient: updatedPatient
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

module.exports = router;

