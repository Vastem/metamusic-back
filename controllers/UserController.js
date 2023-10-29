const userDAO = require('../data-access/userDAO')
const {AppError} = require('../utils/appError')

class UserController{
    static async createUser(req, res, next){
        try {
            const {username, email, password} = req.body
            if(!username || !email || !password){
                next(new AppError('Fields username, email and password required', 500))
            }
            const userData = {username, email, password}

            const user = await userDAO.create(userData)
            res.status(201).json(user)
        } catch (error) {
            next(new AppError('Error creating user', 500))
        }
    }

    static async getUserById(req, res, next){
        try {
            const id = req.params.id
            const user = await userDAO.getID(id)
            if(!user){
                next(new AppError('User not found', 404))
            }
            req.status(200).json(user)
        } catch (error) {
            next(new AppError('Could not get user', 404))
        }
    }

    static async getUsers(req, res, next){
        try {
            const id = req.params.limit || 10
            const users = await userDAO.get(id)
           
            req.status(200).json(users)
        } catch (error) {
            next(new AppError('Could not get users', 500))
        }
    }

    static async updateUser(req, res, next){
        try {
            const id = req.params.id
            const userData = req.body
            
            const user = await userDAO.update(id, userData)

            if(!user){
                next(new AppError('User not found', 404))
            }

            res.status(200).json(user)
        } catch (error) {
            next(new AppError('Error updating user', 500))
        }
    }

    static async deleteUser(req, res, next){
        try {
            const id = req.params.id
            
            const user = await userDAO.delete(id)
            if(!user){
                next(new AppError('Could not get user', 404))
            }
            
            res.status(200).json({message: 'User deleted correctly'})
        } catch (error) {
            next(new AppError('Error deleting user', 500))
        }
    }
}

module.exports = UserController