const adminDAO = require('../data-access/adminDAO')
const {AppError} = require('../utils/appError')

class AdminController{
    static async createAdmin(req, res, next){
        try {
            const {username, email, password} = req.body
            if(!username || !email || !password){
                next(new AppError('Fields username, email and password required', 500))
            }
            const adminData = {username, email, password}

            const admin = await adminDAO.create(userData)
            res.status(201).json(admin)
        } catch (error) {
            next(new AppError('Error creating admin', 500))
        }
    }

    static async getAdminById(req, res, next){
        try {
            const id = req.params.id
            const admin = await adminDAO.getID(id)
            if(!admin){
                next(new AppError('Admin not found', 404))
            }
            req.status(200).json(admin)
        } catch (error) {
            next(new AppError('Could not get admin', 404))
        }
    }

    static async getAdmins(req, res, next){
        try {
            const id = req.params.limit || 10
            const admins = await adminDAO.get(id)
           
            req.status(200).json(admins)
        } catch (error) {
            next(new AppError('Could not get admins', 500))
        }
    }

    static async updateAdmin(req, res, next){
        try {
            const id = req.params.id
            const adminData = req.body
            
            const admin = await adminDAO.update(id, adminData)

            if(!admin){
                next(new AppError('Admin not found', 404))
            }

            res.status(200).json(admin)
        } catch (error) {
            next(new AppError('Error updating admin', 500))
        }
    }

    static async deleteAdmin(req, res, next){
        try {
            const id = req.params.id
            
            const admin = await adminDAO.delete(id)
            if(!admin){
                next(new AppError('Could not get admin', 404))
            }
            
            res.status(200).json({message: 'Admin deleted correctly'})
        } catch (error) {
            next(new AppError('Error deleting admin', 500))
        }
    }
}

module.exports = AdminController