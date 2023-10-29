const songDAO = require('../data-access/songDAO')
const {AppError} = require('../utils/appError')

class SongController{
    static async createSong(req, res, next){
        try {
            const {name, album, duration, singers} = req.body
            if(!name || !album || !duration || !singers){
                next(new AppError('Fields name, album, duration and singers required', 500))
            }
            const songData = {name, album, duration, singers}

            const song = await songDAO.create(songData)
            res.status(201).json(song)
        } catch (error) {
            next(new AppError('Error creating song', 500))
        }
    }

    static async getSongById(req, res, next){
        try {
            const id = req.params.id
            const song = await songDAO.getID(id)
            if(!user){
                next(new AppError('Song not found', 404))
            }
            req.status(200).json(song)
        } catch (error) {
            next(new AppError('Could not get song', 404))
        }
    }

    static async getSongs(req, res, next){
        try {
            const id = req.params.limit || 10
            const songs = await songDAO.get(id)
           
            req.status(200).json(songs)
        } catch (error) {
            next(new AppError('Could not get songs', 500))
        }
    }

    static async updateSong(req, res, next){
        try {
            const id = req.params.id
            const songData = req.body
            
            const song = await songDAO.update(id, songData)

            if(!song){
                next(new AppError('Song not found', 404))
            }

            res.status(200).json(song)
        } catch (error) {
            next(new AppError('Error updating song', 500))
        }
    }

    static async deleteSong(req, res, next){
        try {
            const id = req.params.id
            
            const song = await songDAO.delete(id)
            if(!song){
                next(new AppError('Could not get song', 404))
            }
            
            res.status(200).json({message: 'song deleted correctly'})
        } catch (error) {
            next(new AppError('Error deleting song', 500))
        }
    }
}

module.exports = SongController