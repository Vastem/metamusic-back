import DataAccesError from "../errors/DataAccesError.js";
import PlayList from "../schemas/Playlist.js";
import mongoose from "mongoose";

export default class PlaylistDAO {
    constructor() { }

    async create(playlistData) {
        try {
            const playlist = new PlayList(playlistData);
            return await playlist.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, playlistData) {
        try {
            const playlist = await PlayList.findByIdAndUpdate(new mongoose.Types.ObjectId(id), playlistData, { new: true });
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id) {
        try {
            const playlist = await PlayList.findByIdAndRemove(new mongoose.Types.ObjectId(id));
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10) {
        try {
            const playlists = await PlayList.find().limit(limit);
            return playlists;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getById(id) {
        try {
            const playlist = await PlayList.findById(new mongoose.Types.ObjectId(id));
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByName(name) {
        try {
            const regex = new RegExp(name, "i");
            const playlists = await PlayList.find({ name: { $regex: regex } });
            return playlists
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByUser(user) {
        try {
            const regex = new RegExp(user, "i");
            const playlists = await PlayList.find({ user: { $regex: regex } });
            return playlists
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }
}