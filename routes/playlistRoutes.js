import { Router } from "express"
import { createPlaylist, deletePlaylist, getPlaylist, getPlaylists, updatePlaylist, getPlaylistsByName, addSongToPlaylist, removeSongFromPlaylist } from "../controllers/playlistController.js"
import { validateAddPlaylistData, validatePlaylistId, validateUpdatePlaylistData } from "../middlewares/validatePlaylist.js"
const router = Router()

router.post("/", validateAddPlaylistData, createPlaylist)
router.get("/", getPlaylists)
router.delete("/:id", validatePlaylistId, deletePlaylist)
router.put("/:id", validateUpdatePlaylistData, updatePlaylist)
router.get("/:id", validatePlaylistId, getPlaylist)
router.get("/search/byname/:name", getPlaylistsByName)
router.put("/update/addsong", addSongToPlaylist)
router.put("/update/removesong", removeSongFromPlaylist)

export default router