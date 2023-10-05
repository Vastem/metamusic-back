const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Suscription', subscriptionSchema);