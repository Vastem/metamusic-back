import DataAccesError from "../errors/DataAccesError.js";
import Song from "../schemas/Song.js"
import mongoose from "mongoose";

export default class SongDAO {
    constructor() { }

    async add(songData) {
        try {
            const song = new Song(songData);
            return await song.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, songData) {
        try {
            const song = await Song.findByIdAndUpdate(new mongoose.Types.ObjectId(id), songData, { new: true });
            return song;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id) {
        try {
            const song = await Song.findByIdAndRemove(new mongoose.Types.ObjectId(id));
            return song;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10) {
        try {
            const songs = await Song.find().limit(limit);
            return songs;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getById(id) {
        try {
            const song = await Song.findById(new mongoose.Types.ObjectId(id));
            return song;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByIdSong(idsong){
        try {
            const song = await Song.findOne({idsong})
            return song
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByName(name){
        try {
            const regex = new RegExp(name, "i"); 
            const songs = await Song.find({ name: { $regex: regex } });
            return songs
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getBySingers(singers){
        try {
            const regex = new RegExp(singers, "i"); 
            const songs = await Song.find({ singers: { $regex: regex } });
            return songs
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByAlbum(album){
        try {
            const regex = new RegExp(album, "i"); 
            const songs = await Song.find({ album: { $regex: regex } });
            return songs
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }
}