import AdminDAO from "../data-access/adminDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class AdminService{
    constructor(){}

    async createAdmin(adminData){
        const adminDAO = new AdminDAO()
        const adminExist = await adminDAO.getByName(adminData.username)
        if(adminExist) throw new ValidationError("El administrador ya existe")
        const admin = await adminDAO.create(adminData);
        return admin
    }

    async updateAdmin(id, adminData){
        const adminDAO = new AdminDAO()
        const adminToUpdate = await adminDAO.getID(id)
        console.log(adminToUpdate)
        if(!adminToUpdate ) throw new ValidationError("El administrador no existe")
        const adminUpdated = await adminDAO.update(id, adminData)
        return adminUpdated
    }

    async deleteAdmin(id){
        const adminDAO = new AdminDAO()
        const adminDeleted = await adminDAO.delete(id)
        if(!adminDeleted) throw new ValidationError("El administrador no existe")
        
        return adminDeleted
    }

    async getAdmins(limit){
        const adminDAO = new AdminDAO()
        const admins = await adminDAO.get(limit)
        return admins
    }

    async getAdmin(id){
        const adminDAO = new AdminDAO()
        const admin = await adminDAO.getID(id)
        if(!admin) throw new ValidationError("El administrador no existe")
        return admin
    }
}