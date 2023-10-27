import mongoose from 'mongoose'

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
        type: Number,
        required: true
    },
    singers: {
        type: String,
        required: true
    }
})

const Song = mongoose.model('Song', songSchema);
export default Song;