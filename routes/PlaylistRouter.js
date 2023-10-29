const express = require('express')
const router = express.Router()
const PlaylistController = require('../controllers/PlaylistController')

router.post('/', PlaylistController.createPlaylist)
router.get('/', PlaylistController.getPlaylists)
router.get('/:id', PlaylistController.getPlaylistById)
router.put('/:id', PlaylistController.updatePlaylist)
router.delete('/:id', PlaylistController.deletePlaylist)

module.exports = router