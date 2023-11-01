import { Router } from "express";
import { getAdmin, getAdmins, createAdmin, deleteAdmin, updateAdmin, adminLogin } from "../controllers/adminController.js";
import {validateCreateAdminData, validateUpdateAdminData, validateAdminId, verifyAdmin} from "../middlewares/validateAdmin.js";
import { verifyToken } from "../middlewares/jwt.js";
import { validateLogin } from "../middlewares/ValidateUser.js";
const router = Router()

// No necesitan token
router.post("/", validateCreateAdminData , createAdmin)
router.post("/login", validateLogin , adminLogin)

// Necesitan token
router.get("/", verifyToken, verifyAdmin, getAdmins)
router.delete("/:id", verifyToken, verifyAdmin, validateAdminId, deleteAdmin)
router.put("/:id", verifyToken, verifyAdmin, validateUpdateAdminData, updateAdmin)
router.get("/:id", verifyToken, verifyAdmin, validateAdminId, getAdmin)

export default router