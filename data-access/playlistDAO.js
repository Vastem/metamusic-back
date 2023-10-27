//const Playlist = require('../schemas/Playlist');
import { Playlist } from "../schemas/Playlist";

export class PlaylistDAO {
    constructor() { }

    async create(playlistData) {
        try {
            const playlist = new Playlist(playlistData);
            return await playlist.save();
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, playlistData) {
        try {
            const playlist = await Playlist.findByIdAndUpdate(id, playlistData, { new: true });
            return playlist;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const playlist = await Playlist.findByIdAndRemove(id);
            return playlist;
        } catch (error) {
            console.log(error);
        }
    }

    async get(limit = 10) {
        try {
            const playlists = await Playlist.find().limit(limit);
            return playlists;
        } catch (error) {
            console.log(error);
        }
    }

    async getID(id) {
        try {
            const playlist = await Playlist.findById(id);
            return playlist;
        } catch (error) {
            console.log(error);
        }
    }
}