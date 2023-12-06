import mongoose from "mongoose";
import Song from "./Song.js";

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    songs: [{
        _id: false,
        idsong: {
            type: String,
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
        },
        image: {
            type: String
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    ,
    image: {
        type: String
    },
    type: {
        type: String
    }
}, { versionKey: false });

const PlayList = mongoose.model('Playlist', playlistSchema);
export default PlayList;
