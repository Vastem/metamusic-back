import { Router } from "express";
import { addSong, updateSong, deleteSong, getSong, getSongs, getSongByName, getSongByAlbum, getSongBySingers } from "../controllers/songController.js";
import { validateAddSongData, validateSongId, validateUpdateSongData } from "../middlewares/validateSong.js";
const router = Router()

router.post("/", validateAddSongData, addSong)
router.get("/", getSongs)
router.delete("/:id",validateSongId, deleteSong)
router.put("/:id",validateUpdateSongData, updateSong)
router.get("/:id", validateSongId, getSong)
router.get("/search/byname/:name", getSongByName)
router.get("/search/byalbum/:album", getSongByAlbum)
router.get("/search/bysingers/:singers", getSongBySingers)

export default router