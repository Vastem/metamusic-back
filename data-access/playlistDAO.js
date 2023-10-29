import DataAccesError from "../errors/DataAccesError";
import { Playlist } from "../schemas/Playlist";
import mongoose from "mongoose";

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
            const playlist = await Playlist.findByIdAndUpdate(new mongoose.Types.ObjectId(id), playlistData, { new: true });
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id) {
        try {
            const playlist = await Playlist.findByIdAndRemove(new mongoose.Types.ObjectId(id));
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

    async getById(id) {
        try {
            const playlist = await Playlist.findById(new mongoose.Types.ObjectId(id));
            return playlist;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByName(name){
        try {
            const regex = new RegExp(name, "i"); 
            const playlists = await Playlist.find({ name: { $regex: regex } });
            return playlists
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByUser(user){
        try {
            const regex = new RegExp(user, "i"); 
            const playlists = await Playlist.find({ user: { $regex: regex } });
            return playlists
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }
}