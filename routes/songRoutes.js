import { Router } from "express";
import { addSong, updateSong, deleteSong, getSong, getSongs, getSongByName, getSongByAlbum, getSongBySingers } from "../controllers/songController.js";
import { validateAddSongData, validateSongId, validateUpdateSongData } from "../middlewares/validateSong.js";
import { verifyToken } from "../middlewares/jwt.js";
const router = Router()

router.post("/", verifyToken, validateAddSongData, addSong)
router.get("/", verifyToken, getSongs)
router.delete("/:id",verifyToken, validateSongId, deleteSong)
router.put("/:id", verifyToken, validateUpdateSongData, updateSong)
router.get("/:id", verifyToken, validateSongId, getSong)
router.get("/search/byname/:name", verifyToken, getSongByName)
router.get("/search/byalbum/:album", verifyToken, getSongByAlbum)
router.get("/search/bysingers/:singers", verifyToken, getSongBySingers)

export default router