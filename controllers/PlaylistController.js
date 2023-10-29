const playlistDAO = require('../data-access/playlistDAO')
const {AppError} = require('../utils/appError')

class PlaylistController{
    static async createPlaylist(req, res, next){
        try {
            const {name, description, songs, user} = req.body
            if(!name || !description || !songs || !user){
                next(new AppError('Fields name, description, songs and user required', 500))
            }
            const playlistData = {name, description, songs, user}

            const playlist = await playlistDAO.create(playlistData)
            res.status(201).json(playlist)
        } catch (error) {
            next(new AppError('Error creating playlist', 500))
        }
    }

    static async getPlaylistById(req, res, next){
        try {
            const id = req.params.id
            const playlist = await playlistDAO.getID(id)
            if(!playlist){
                next(new AppError('Playlist not found', 404))
            }
            req.status(200).json(playlist)
        } catch (error) {
            next(new AppError('Could not get playlist', 404))
        }
    }

    static async getPlaylists(req, res, next){
        try {
            const id = req.params.limit || 10
            const playlists = await playlistDAO.get(id)
           
            req.status(200).json(playlist)
        } catch (error) {
            next(new AppError('Could not get playlist', 500))
        }
    }

    static async updatePlaylist(req, res, next){
        try {
            const id = req.params.id
            const playlistData = req.body
            
            const playlist = await playlistDAO.update(id, playlistData)

            if(!playlist){
                next(new AppError('Playlist not found', 404))
            }

            res.status(200).json(playlist)
        } catch (error) {
            next(new AppError('Error updating playlist', 500))
        }
    }

    static async deletePlaylist(req, res, next){
        try {
            const id = req.params.id
            
            const playlist = await playlistDAO.delete(id)
            if(!playlist){
                next(new AppError('Could not get playlist', 404))
            }
            
            res.status(200).json({message: 'Playlist deleted correctly'})
        } catch (error) {
            next(new AppError('Error deleting playlist', 500))
        }
    }
}

module.exports = PlaylistController