const express = require("express");
const router = express.Router();
const Billing = require("../models/Billing");

// Add Billing
router.post("/add", async (req, res) => {
    try {

        const bill = new Billing(req.body);

        await bill.save();

        res.status(201).json({
            message: "Bill Added Successfully",
            bill
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Get All Bills
router.get("/", async (req, res) => {
    try {

        const bills = await Billing.find();

        res.json(bills);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Delete Bill
router.delete("/:id", async (req, res) => {
    try {

        await Billing.findByIdAndDelete(req.params.id);

        res.json({
            message: "Bill Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Update Bill
router.put("/:id", async (req, res) => {
    try {

        const updatedBill = await Billing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBill) {
            return res.status(404).json({
                message: "Bill not found"
            });
        }

        res.json({
            message: "Bill Updated Successfully",
            bill: updatedBill
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

module.exports = router;

