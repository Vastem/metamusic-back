import AdminService from "../services/adminService.js";
import { generateAdminToken } from "../middlewares/jwt.js";

export async function createAdmin(req, res) {
    const adminService = new AdminService()
    try {
        const admin = await adminService.createAdmin(req.body)
        res.status(200).json(admin)
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ message: error.message })
    }
}

export async function updateAdmin(req, res) {
    const adminService = new AdminService()
    try {
        const adminUpdated = await adminService.updateAdmin(req.params.id, req.body)
        res.status(200).json(adminUpdated)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function deleteAdmin(req, res) {
    const adminService = new AdminService()
    try {
        const adminDeleted = await adminService.deleteAdmin(req.params.id)
        res.status(200).json(adminDeleted)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getAdmins(req, res) {
    const adminService = new AdminService()
    try {
        const admins = await adminService.getAdmins()
        res.status(200).json(admins)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getAdmin(req, res) {
    const adminService = new AdminService()
    try {
        const admin = await adminService.getAdmin(req.params.id)
        res.status(200).json(admin)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function adminLogin(req, res) {
    const adminService = new AdminService()
    try {
        const admin = await adminService.login(req.body)
        const token = await generateAdminToken(admin)
        res.set('Authorization', token)
        res.status(200).json({ admin })
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

