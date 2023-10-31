import { Router } from "express"
import { createPlaylist, deletePlaylist, getPlaylist, getPlaylists, updatePlaylist, getPlaylistsByName, addSongToPlaylist, removeSongFromPlaylist } from "../controllers/playlistController.js"
import { validateAddPlaylistData, validatePlaylistId, validateUpdatePlaylistData } from "../middlewares/validatePlaylist.js"
import { verifyToken } from "../middlewares/jwt.js"
const router = Router()

router.post("/", verifyToken, validateAddPlaylistData, createPlaylist)
router.get("/", verifyToken, getPlaylists)
router.delete("/:id", verifyToken, validatePlaylistId, deletePlaylist)
router.put("/:id", verifyToken, validateUpdatePlaylistData, updatePlaylist)
router.get("/:id", verifyToken, validatePlaylistId, getPlaylist)
router.get("/search/byname/:name", verifyToken, getPlaylistsByName)
router.put("/update/addsong/:idplaylist", verifyToken, addSongToPlaylist)
router.put("/update/removesong/", verifyToken, removeSongFromPlaylist)

export default router