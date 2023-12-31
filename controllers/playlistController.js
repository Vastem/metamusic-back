import PlaylistService from "../services/playlistService.js"

export async function createPlaylist(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlist = await playlistService.addPlaylist(req.body)
        res.status(200).json({ success: true, playlist: playlist }) // TODO: Cambiar esto
    } catch (error) {
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function updatePlaylist(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlistUpdated = await playlistService.updatePlaylist(req.params.id, req.body)
        res.status(200).json({ success: true, playlist: playlistUpdated })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function deletePlaylist(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlistDeleted = await playlistService.deletePlaylist(req.params.id)
        res.status(200).json({ success: true, playlist: playlistDeleted })
    } catch (error) {
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function getPlaylists(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlists = await playlistService.getPlaylists()
        res.status(200).json(playlists)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getPlaylist(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlist = await playlistService.getPlaylist(req.params.id)
        res.status(200).json({ success: true, playlist: playlist })
    } catch (error) {
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function getPlaylistsByName(req, res) {
    const playlistService = new PlaylistService()
    try {
        const id = res.locals.data.userId
        const playlist = await playlistService.getPlaylistsByName(req.params.name, id)

        res.status(200).json({ success: true, playlist: playlist[0] })
    } catch (error) {
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function getPlaylistsByUser(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlists = await playlistService.getPlaylistsByUser(req.params.user)
        res.status(200).json(playlists)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getAdminPlaylists(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlists = await playlistService.getPlaylistsAdmin()
        res.status(200).json({ success: true, playlists: playlists })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function addSongToPlaylist(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlist = await playlistService.addSongToPlaylist(req.params.idplaylist, req.body.song)
        res.status(200).json({ success: true, playlist: playlist })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ success: false, message: error.message })
    }
}

export async function removeSongFromPlaylist(req, res) {
    const playlistService = new PlaylistService()
    try {
        const playlist = await playlistService.removeSongFromPlaylist(req.params.idplaylist, req.body.idsong)
        res.status(200).json(playlist)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

