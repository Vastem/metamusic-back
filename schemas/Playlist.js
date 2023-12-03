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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String
    }
}, { versionKey: false });

const PlayList = mongoose.model('Playlist', playlistSchema);
export default PlayList;
