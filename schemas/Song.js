const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    idsong: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    album: {
        type: String
    },
    duration: {
        type: Time,
        required: true
    },
    singers: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Song', songSchema) 