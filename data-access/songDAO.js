const Song = require('../schemas/Song');

module.exports = class SongDAO {
    constructor() { }

    async create(songData) {
        try {
            const song = new Song(songData);
            return await song.save();
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, songData) {
        try {
            const song = await Song.findByIdAndUpdate(id, songData, { new: true });
            return song;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const song = await Song.findByIdAndRemove(id);
            return song;
        } catch (error) {
            console.log(error);
        }
    }

    async get(limit = 10) {
        try {
            const songs = await Song.find().limit(limit);
            return songs;
        } catch (error) {
            console.log(error);
        }
    }

    async getID(id) {
        try {
            const song = await Song.findById(id);
            return song;
        } catch (error) {
            console.log(error);
        }
    }

}