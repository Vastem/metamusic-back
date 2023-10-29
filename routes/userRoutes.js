import { Router } from 'express'
import { login, createUser, deleteUser, updateUser, getUser, getUsers } from '../controllers/userController.js'
import { validateUserId, validateCreateUserData, validateLogin } from '../middlewares/ValidateUser.js'
import { generateToken, verifyToken } from "../middlewares/jwt.js"
const router = Router()


router.post("/login", validateLogin, login)
router.post("/", validateCreateUserData, createUser)
router.get("/", verifyToken, getUsers)
router.delete("/:id", verifyToken, validateUserId, deleteUser)
router.put("/:id", verifyToken, validateUserId, updateUser)
router.get("/:id", verifyToken, validateUserId, getUser)

export default router