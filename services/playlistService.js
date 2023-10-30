import PlaylistDAO from '../data-access/playlistDAO.js'
import ValidationError from '../errors/ValidationError.js'

export default class PlaylistService {
    constructor() {
        this.PlaylistDAO = new PlaylistDAO()
    }

    async addPlaylist(playlistData) {
        const playlistExist = await this.PlaylistDAO.getById(playlistData.idplaylist)
        if (playlistExist) throw new ValidationError('El id de la playlist ya existe en la base de datos.')
        const playlist = await this.PlaylistDAO.create(playlistData)
        return playlist
    }

    async updatePlaylist(id, playlistData) {
        const playlistToUpdate = await this.PlaylistDAO.getById(id)
        if (!playlistToUpdate) throw new ValidationError('La playlist no existe.')
        const playlistUpdated = await this.PlaylistDAO.update(id, playlistData)
        return playlistUpdated
    }

    async deletePlaylist(id) {
        const playlistDeleted = await this.PlaylistDAO.delete(id)
        if (!playlistDeleted) throw new ValidationError('La playlist no existe.')
        return playlistDeleted
    }

    async getPlaylists(limit) {
        const playlists = await this.PlaylistDAO.get(limit)
        return playlists
    }

    async getPlaylist(id) {
        const playlist = await this.PlaylistDAO.getById(id)
        if (!playlist) throw new ValidationError('La playlist no existe.')
        return playlist
    }

    async getPlaylistsByName(name) {
        const playlists = await this.PlaylistDAO.getByName(name)
        return playlists
    }

    async addSongToPlaylist(idplaylist, song) {
        const playlist = await this.PlaylistDAO.getById(idplaylist)
        if (!playlist) throw new ValidationError('La playlist no existe.')
        playlist.songs.push(song)
        const playlistUpdated = await this.PlaylistDAO.update(idplaylist, playlist)
        return playlistUpdated
    }

}