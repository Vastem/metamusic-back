import UserService from "../services/userService.js"
import { generateUserToken } from "../middlewares/jwt.js"

export async function createUser(req, res) {
    const userService = new UserService()
    try {
        const user = await userService.createUser(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(error.statusCode).json({ message: error.message })
    }
}

export async function updateUser(req, res) {
    const userService = new UserService()
    try {
        const userUpdated = await userService.updateUser(req.params.id, req.body)
        res.status(200).json(userUpdated)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function deleteUser(req, res) {
    const userService = new UserService()
    try {
        const userDeleted = await userService.deleteUser(req.params.id)
        res.status(200).json(userDeleted)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getUsers(req, res) {
    const userService = new UserService()
    try {
        const users = await userService.getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getUser(req, res) {
    const userService = new UserService()
    try {
        const user = await userService.getUser(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function userLogin(req, res) {
    const userService = new UserService()
    try {
        const user = await userService.login(req.body)
        const token = await generateUserToken(user)
        res.set('Authorization', token)
        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json(error.message)
    }
}