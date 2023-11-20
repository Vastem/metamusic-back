import { Router } from "express";
import { addSong, updateSong, deleteSong, getSong, getSongs, getSongByName, getSongByAlbum, getSongBySingers } from "../controllers/songController.js";
import { validateAddSongData, validateSongId, validateUpdateSongData } from "../middlewares/validateSong.js";
import { verifyToken } from "../middlewares/jwt.js";
import { verifyAdmin } from "../middlewares/validateAdmin.js";
const router = Router()

router.post("/", verifyToken, verifyAdmin, validateAddSongData, addSong)
router.get("/", getSongs)
router.delete("/:id", verifyToken, verifyAdmin, validateSongId, deleteSong)
router.put("/:id", verifyToken, verifyAdmin, validateUpdateSongData, updateSong)
router.get("/:id", verifyToken, validateSongId, getSong)
router.get("/search/byname/:name", getSongByName)
router.get("/search/byalbum/:album", verifyToken, getSongByAlbum)
router.get("/search/bysingers/:singers", verifyToken, getSongBySingers)

export default router