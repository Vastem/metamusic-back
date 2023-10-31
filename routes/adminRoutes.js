import { Router } from "express";
import { getAdmin, getAdmins, createAdmin, deleteAdmin, updateAdmin, adminLogin } from "../controllers/adminController.js";
import {validateCreateAdminData, validateUpdateAdminData, validateAdminId} from "../middlewares/validateAdmin.js";
import { verifyToken } from "../middlewares/jwt.js";
import { validateLogin } from "../middlewares/ValidateUser.js";
const router = Router()

// No necesitan token
router.post("/", validateCreateAdminData , createAdmin)
router.post("/login", validateLogin , adminLogin)

// Necesitan token
router.get("/", verifyToken, getAdmins)
router.delete("/:id", verifyToken, validateAdminId, deleteAdmin)
router.put("/:id", verifyToken, validateUpdateAdminData, updateAdmin)
router.get("/:id", verifyToken, validateAdminId, getAdmin)

export default router