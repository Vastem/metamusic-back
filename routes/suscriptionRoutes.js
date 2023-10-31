import { Router } from "express";
import { createSuscription, updateSuscription, deleteSuscription, getSuscription, getSuscriptions } from "../controllers/suscriptionController.js";
import { validateAddSuscriptionData, validateUpdateSuscriptionData, validateSuscriptionId } from "../middlewares/validateSuscription.js";
import { verifyToken } from "../middlewares/jwt.js";
const router = Router()

router.post("/", verifyToken, validateAddSuscriptionData, createSuscription)
router.get("/", verifyToken, getSuscriptions)
router.delete("/:id", verifyToken, validateSuscriptionId, deleteSuscription)
router.put("/:id", verifyToken, validateUpdateSuscriptionData, updateSuscription)
router.get("/:id", verifyToken, validateSuscriptionId, getSuscription)

export default router