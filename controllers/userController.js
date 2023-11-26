import UserService from "../services/userService.js"
import { generateSubscriptionToken, generateUserToken } from "../middlewares/jwt.js"

export async function createUser(req, res) {
    const userService = new UserService()
    try {
        const user = await userService.createUser(req.body)
        res.status(200).json({ success: true, user: user })
    } catch (error) {
        res.status(error.statusCode).json({ message: error.message })
    }
}

export async function authenticated(req, res) {
    console.log('entro')
    try {
        console.log(req.cookies)
        res.status(200).json({ message: "OK" })
    } catch (error) {
        res.status(error.statusCode).json(error.message)
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
        const token = generateUserToken(user)
        res.cookie('authToken', token, { httpOnly: false })
        res.json({ success: true, id: user._id, username: user.username, email: user.email, subscription: user.subscription });
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json(error.message)
    }
}

export async function userLogout(req, res) {
    try {
        res.clearCookie('authToken');
        res.json({ success: true });
    } catch (error) {
        res.status(error.statusCode).json({ success: true, message: error.message })
    }
}

export async function toSubscribe(req, res) {
    const userId = res.locals.data.userid
    const userService = new UserService()
    try {
        const user = await userService.toSubscribe(userId, req.body.idsubscription)
        const token = generateSubscriptionToken(user)
        res.cookie('authToken', token, { httpOnly: false })
        res.status(200).json(user)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}