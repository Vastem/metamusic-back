import { Router } from 'express'
import { createUser, deleteUser, updateUser, getUser, getUsers, userLogin } from '../controllers/userController.js'
import { validateUserId, validateCreateUserData, validateLogin } from '../middlewares/ValidateUser.js'
import { verifyToken } from "../middlewares/jwt.js"
const router = Router()

// No necesitan token
router.post("/", validateCreateUserData, createUser)
router.post("/login", validateLogin, userLogin)

// Necesitan token
router.get("/", verifyToken, getUsers)
router.delete("/:id", verifyToken, validateUserId, deleteUser)
router.put("/:id", verifyToken, validateUserId, updateUser)
router.get("/:id", verifyToken, validateUserId, getUser)

export default router