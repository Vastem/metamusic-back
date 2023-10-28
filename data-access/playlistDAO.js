//const Playlist = require('../schemas/Playlist');
import DataAccesError from "../errors/DataAccesError";
import { Playlist } from "../schemas/Playlist";

export class PlaylistDAO {
    constructor() { }

    async create(playlistData) {
        try {
            const playlist = new Playlist(playlistData);
            return await playlist.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, playlistData) {
        try {
            const playlist = await Playlist.findByIdAndUpdate(id, playlistData, { new: true });
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id) {
        try {
            const playlist = await Playlist.findByIdAndRemove(id);
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10) {
        try {
            const playlists = await Playlist.find().limit(limit);
            return playlists;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getID(id) {
        try {
            const playlist = await Playlist.findById(id);
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }
}