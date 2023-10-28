import DataAccesError from "../errors/DataAccesError.js";
import Song from "../schemas/Song.js"

export default class SongDAO {
    constructor() { }

    async create(songData) {
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
            const song = await Song.findByIdAndUpdate(id, songData, { new: true });
            return song;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id) {
        try {
            const song = await Song.findByIdAndRemove(id);
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

    async getID(id) {
        try {
            const song = await Song.findById(id);
            return song;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

}