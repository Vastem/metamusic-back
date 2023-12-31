import PlaylistDAO from '../data-access/playlistDAO.js'
import SongDAO from '../data-access/songDAO.js'
import NoDataFoundError from '../errors/NoDataFoundError.js'
import ValidationError from '../errors/ValidationError.js'

export default class PlaylistService {
    constructor() {
        this.PlaylistDAO = new PlaylistDAO()
        this.SongDAO = new SongDAO()
    }

    async addPlaylist(playlistData) {
        const playlistExist = await this.PlaylistDAO.getById(playlistData.idplaylist)
        if (playlistExist) throw new ValidationError('El id de la playlist ya existe en la base de datos.')
        const playlistNameExist = await this.PlaylistDAO.getByName(playlistData.name, playlistData.user)
        if (playlistNameExist) throw new ValidationError('Ya cuentas con una playlist con ese nombre')

        const playlist = await this.PlaylistDAO.create(playlistData)
        return playlist
    }

    async updatePlaylist(id, playlistData) {
        const playlistToUpdate = await this.PlaylistDAO.getById(id)
        if (!playlistToUpdate) throw new NoDataFoundError('La playlist no existe.')

        if (playlistToUpdate.name !== playlistData.name) {
            const playlistNameExist = await this.PlaylistDAO.getByName(playlistData.name, playlistData.user)
            console.log(playlistNameExist)
            if (playlistNameExist && playlistNameExist._id !== id) {
                throw new ValidationError('Ya cuentas con una playlist con ese nombre');
            }
        }

        const playlistUpdated = await this.PlaylistDAO.update(id, playlistData)
        return playlistUpdated
    }

    async deletePlaylist(id) {
        const playlistDeleted = await this.PlaylistDAO.delete(id)
        if (!playlistDeleted) throw new NoDataFoundError('La playlist no existe.')
        return playlistDeleted
    }

    async getPlaylists(limit) {
        const playlists = await this.PlaylistDAO.get(limit)
        return playlists
    }

    async getPlaylist(id) {
        const playlist = await this.PlaylistDAO.getById(id)
        if (!playlist) throw new NoDataFoundError('La playlist no existe.')
        return playlist
    }

    async getPlaylistsByName(name, userId) {
        const playlists = await this.PlaylistDAO.getByName(name, userId)
        if (!playlists) throw new NoDataFoundError('No se han encontrado playlists con ese nombre.')
        return playlists
    }

    async getPlaylistsByUser(user) {
        const playlists = await this.PlaylistDAO.getByUser(user)
        return playlists
    }

    async getPlaylistsAdmin() {
        const playlists = await this.PlaylistDAO.getAdminPlaylists()
        return playlists
    }

    async addSongToPlaylist(idplaylist, song) {
        const playlist = await this.PlaylistDAO.getById(idplaylist)
        if (!playlist) throw new NoDataFoundError('La playlist no existe.')


        console.log(song)

        /* const songExist = await this.SongDAO.getByIdSong(song.idsong)
        if (!songExist) throw new NoDataFoundError('La canción no existe.') */

        const songInPlaylist = playlist.songs.find(s => s.idsong === song.idsong)
        if (songInPlaylist) {
            throw new ValidationError('La canción ya está en la playlist.')
        }
        playlist.songs.push(song)

        console.log(playlist.songs)

        const playlistUpdated = await this.PlaylistDAO.update(idplaylist, playlist)
        return playlistUpdated
    }

    async removeSongFromPlaylist(idplaylist, idsong) {
        const playlist = await this.PlaylistDAO.getById(idplaylist)
        if (!playlist) throw new NoDataFoundError('La playlist no existe.')
        playlist.songs = playlist.songs.filter(song => song.idsong !== idsong)
        const playlistUpdated = await this.PlaylistDAO.update(idplaylist, playlist)
        return playlistUpdated
    }
}