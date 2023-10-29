import UserDAO from "../data-access/userDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class UserService{
    constructor(){
        this.userDAO = new UserDAO()
    }

    async createUser(userData){
        const usernameExist = await this.userDAO.getByUsername(userData.username)
        const emailExist = await this.userDAO.getByEmail(userData.email)
        if(usernameExist) throw new ValidationError("El username ya está registrado")
        if(emailExist) throw new ValidationError("El email ya está registrado")
        const user = await this.userDAO.create(userData);
        return user
    }

    async updateUser(id, userData){
        const userToUpdate = await this.userDAO.getById(id)
        if(!userToUpdate ) throw new ValidationError("El usuario no existe")
        const userUpdated= await this.userDAO.update(id, userData)
        return userUpdated
    }

    async deleteUser(id){
        const userDeleted = await this.userDAO.delete(id)
        if(!userDeleted) throw new ValidationError("El usuario no existe")
        return userDeleted
    }

    async getUsers(limit){
        const users = await this.userDAO.get(limit)
        return users
    }

    async getUser(id){
        const user = await this.userDAO.getById(id)
        if(!user) throw new ValidationError("El usuario no existe")
        return user
    }
}