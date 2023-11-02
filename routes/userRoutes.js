import { Router } from 'express'
import { createUser, deleteUser, updateUser, getUser, getUsers, userLogin } from '../controllers/userController.js'
import { validateUserId, validateCreateUserData, validateLogin, verifyUser } from '../middlewares/ValidateUser.js'
import { verifyToken } from "../middlewares/jwt.js"
const router = Router()

// No necesitan token
router.post("/", validateCreateUserData, createUser)
router.post("/login", validateLogin, userLogin)

// Necesitan token
router.get("/", verifyToken, verifyUser, getUsers)
router.delete("/:id", verifyToken, verifyUser, validateUserId, deleteUser)
router.put("/:id", verifyToken, verifyUser, validateUserId, updateUser)
router.get("/:id", verifyToken, verifyUser, validateUserId, getUser)
router.post("/subscribe", verifyToken, verifyUser)

export default router