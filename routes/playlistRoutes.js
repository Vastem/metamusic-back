import { Router } from "express"
import { createPlaylist, deletePlaylist, getPlaylist, getPlaylists, updatePlaylist, getPlaylistsByName, getPlaylistsByUser, addSongToPlaylist, removeSongFromPlaylist } from "../controllers/playlistController.js"
import { validateAddPlaylistData, validatePlaylistId, validateUpdatePlaylistData } from "../middlewares/validatePlaylist.js"
import { verifyToken } from "../middlewares/jwt.js"
import { verifySubscription, verifyUser } from "../middlewares/validateUser.js"
const router = Router()

router.post("/", verifyToken, verifyUser, verifySubscription, validateAddPlaylistData, createPlaylist)
router.get("/", verifyToken, verifyUser, verifySubscription, getPlaylists)
router.delete("/:id", verifyToken, verifyUser, verifySubscription, validatePlaylistId, deletePlaylist)
router.put("/:id", verifyToken, verifyUser, verifySubscription, validateUpdatePlaylistData, updatePlaylist)
router.get("/:id", verifyToken, verifyUser, verifySubscription, validatePlaylistId, getPlaylist)
router.get("/search/byname/:name", verifyToken, verifyUser, verifySubscription, getPlaylistsByName)
router.get("/search/byuser/:user", getPlaylistsByUser)
router.put("/update/addsong/:idplaylist", verifyToken, verifyUser, verifySubscription, addSongToPlaylist)
router.put("/update/removesong/:idplaylist", verifyToken, verifyUser, verifySubscription, removeSongFromPlaylist)

export default router