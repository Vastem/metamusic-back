import { Router } from 'express'
import { createUser, deleteUser, updateUser, getUser, getUsers } from '../controllers/userController.js'
import  { validateUserId, validateCreateUserData } from '../middlewares/ValidateUser.js'
const router = Router()

router.post("/", validateCreateUserData, createUser)
router.get("/", getUsers)
router.delete("/:id", validateUserId, deleteUser)
router.put("/:id", validateUserId, updateUser)
router.get("/:id",validateUserId, getUser)

export default router