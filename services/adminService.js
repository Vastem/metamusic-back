import AdminDAO from "../data-access/adminDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class AdminService{
    constructor(){
        this.adminDAO = new AdminDAO()
    }

    async createAdmin(adminData){
        const usernameExist = await this.adminDAO.getByUsername(adminData.username)
        const emailExist = await this.adminDAO.getByEmail(adminData.email)
        if(usernameExist) throw new ValidationError("Ya existe un administrador con ese nombre de usuario.")
        if(emailExist) throw new ValidationError("El email ya está registrado.")
        const admin = await this.adminDAO.create(adminData);
        return admin
    }

    async updateAdmin(id, adminData){
        const adminToUpdate = await this.adminDAO.getById(id)
        console.log(adminToUpdate)
        if(!adminToUpdate ) throw new ValidationError("El administrador no existe")
        const adminUpdated = await this.adminDAO.update(id, adminData)
        return adminUpdated
    }

    async deleteAdmin(id){
        const adminDeleted = await this.adminDAO.delete(id)
        if(!adminDeleted) throw new ValidationError("El administrador no existe")
        return adminDeleted
    }

    async getAdmins(limit){
        const admins = await this.adminDAO.get(limit)
        return admins
    }

    async getAdmin(id){
        const admin = await this.adminDAO.getById(id)
        if(!admin) throw new ValidationError("El administrador no existe")
        return admin
    }

    async login(adminData){
        const admin = await this.adminDAO.getByUsername(adminData.username)
        if(!admin) throw new ValidationError("El nombre de usuario o la contraseña son incorrectos")
        if(admin.password !== adminData.password) throw new ValidationError("El nombre de usuario o la contraseña son incorrectos")
        return admin
    }
}