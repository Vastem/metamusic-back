import { Router } from "express";
import { createSuscription, updateSuscription, deleteSuscription, getSuscription, getSuscriptions } from "../controllers/suscriptionController.js";
import { validateAddSuscriptionData, validateUpdateSuscriptionData, validateSuscriptionId } from "../middlewares/validateSuscription.js";
import { verifyToken } from "../middlewares/jwt.js";
import { verifyAdmin } from "../middlewares/validateAdmin.js";
const router = Router()

router.post("/", verifyToken, verifyAdmin,validateAddSuscriptionData, createSuscription)
router.get("/", verifyToken, verifyAdmin,getSuscriptions)
router.delete("/:id", verifyToken, verifyAdmin, validateSuscriptionId, deleteSuscription)
router.put("/:id", verifyToken, verifyAdmin, validateUpdateSuscriptionData, updateSuscription)
router.get("/:id", verifyToken, verifyAdmin, validateSuscriptionId, getSuscription)

export default router