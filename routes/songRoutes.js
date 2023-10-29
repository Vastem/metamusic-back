import { Router } from "express";
import { createSong, updateSong, deleteSong, getSong, getSongs } from "../controllers/songController.js";
const router = Router()

router.post("/", createSong)
router.get("/", getSongs)
router.delete("/:id", deleteSong)
router.put("/:id", updateSong)
router.get("/:id", getSong)

export default router