import { Router } from 'express'
import { createUser, deleteUser, updateUser, getUser, getUsers, userLogin, toSubscribe } from '../controllers/userController.js'
import { validateUserId, validateCreateUserData, validateLogin, verifyUser, verifySubscription, validateUserSubscriptionData } from '../middlewares/validateUser.js'
import { verifyToken, authenticated } from "../middlewares/jwt.js"
const router = Router()

// No necesitan token
router.post("/", validateCreateUserData, createUser)
router.post("/login", validateLogin, userLogin)
router.get("/is-authenticated", authenticated)

// Necesitan token
router.get("/", verifyToken, verifyUser, getUsers)
router.delete("/:id", verifyToken, verifyUser, validateUserId, deleteUser)
router.put("/:id", verifyToken, verifyUser, validateUserId, updateUser)
router.get("/:id", verifyToken, verifyUser, validateUserId, getUser)
router.post("/subscribe", verifyToken, verifyUser, validateUserSubscriptionData, toSubscribe)

export default router