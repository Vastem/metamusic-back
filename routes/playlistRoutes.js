import { Router } from "express"
import { createPlaylist, deletePlaylist, getPlaylist, getPlaylists, updatePlaylist, getPlaylistsByName, addSongToPlaylist, removeSongFromPlaylist } from "../controllers/playlistController.js"
import { validateAddPlaylistData, validatePlaylistId, validateUpdatePlaylistData } from "../middlewares/validatePlaylist.js"
import { verifyToken } from "../middlewares/jwt.js"
import { verifyUser } from "../middlewares/ValidateUser.js"
const router = Router()

router.post("/", verifyToken, verifyUser, validateAddPlaylistData, createPlaylist)
router.get("/", verifyToken, verifyUser, getPlaylists)
router.delete("/:id", verifyToken, verifyUser, validatePlaylistId, deletePlaylist)
router.put("/:id", verifyToken, verifyUser, validateUpdatePlaylistData, updatePlaylist)
router.get("/:id", verifyToken, verifyUser, validatePlaylistId, getPlaylist)
router.get("/search/byname/:name", verifyToken, verifyUser, getPlaylistsByName)
router.put("/update/addsong/:idplaylist", verifyToken, verifyUser, addSongToPlaylist)
router.put("/update/removesong/", verifyToken, verifyUser, removeSongFromPlaylist)

export default router