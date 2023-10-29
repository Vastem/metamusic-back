const express = require('express')
const router = express.Router()
const SongController = require('../controllers/SongController')

router.post('/', SongController.createSong)
router.get('/', SongController.getSongs)
router.get('/:id', SongController.getSongById)
router.put('/:id', SongController.updateSong)
router.delete('/:id', SongController.deleteSong)

module.exports = router