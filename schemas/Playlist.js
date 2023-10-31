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
    songs: [Song.schema],
    user: {
        username: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    },
    image: {
        type: String
    }
}, { versionKey: false });

const PlayList = mongoose.model('Playlist', playlistSchema);
export default PlayList;
