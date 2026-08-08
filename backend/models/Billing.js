const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({

    patientName: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    },

    paymentStatus: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Billing", billingSchema);