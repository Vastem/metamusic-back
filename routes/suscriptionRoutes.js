import { Router } from "express";
import { createSuscription, updateSuscription, deleteSuscription, getSuscription, getSuscriptions } from "../controllers/suscriptionController.js";
import { validateAddSuscriptionData, validateUpdateSuscriptionData, validateSuscriptionId } from "../middlewares/validateSuscription.js";
const router = Router()

router.post("/", validateAddSuscriptionData, createSuscription)
router.get("/", getSuscriptions)
router.delete("/:id", validateSuscriptionId, deleteSuscription)
router.put("/:id", validateUpdateSuscriptionData, updateSuscription)
router.get("/:id", validateSuscriptionId, getSuscription)

export default router