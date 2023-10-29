import { Router } from "express";
import { getAdmin, getAdmins, createAdmin, deleteAdmin, updateAdmin } from "../controllers/adminController.js";
import {validateCreateAdminData, validateUpdateAdminData, validateAdminId} from "../middlewares/validateAdmin.js";
const router = Router()

router.post("/", validateCreateAdminData ,createAdmin)
router.get("/", getAdmins)
router.delete("/:id", validateAdminId, deleteAdmin)
router.put("/:id", validateUpdateAdminData, updateAdmin)
router.get("/:id",validateAdminId, getAdmin)

export default router