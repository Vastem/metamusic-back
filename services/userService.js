import UserDAO from "../data-access/userDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class UserService{
    constructor(){}

    async createUser(userData){
        const userDAO = new UserDAO()
        const usernameExist = await userDAO.getByUsername(userData.username)
        const emailExist = await userDAO.getByEmail(userData.email)
        if(usernameExist) throw new ValidationError("El username ya está registrado")
        if(emailExist) throw new ValidationError("El email ya está registrado")
        const user = await adminDAO.create(userDAO);
        return user
    }

    async updateUser(id, userData){
        const userDAO = new UserDAO()
        const userToUpdate = await userDAO.getID(id)
        if(!userToUpdate ) throw new ValidationError("El usuario no existe")
        const userUpdated= await userDAO.update(id, userData)
        return userUpdated
    }

    async deleteUser(id){
        const userDAO = new UserDAO()
        const userDeleted = await userDAO.delete(id)
        if(!userDeleted) throw new ValidationError("El usuario no existe")
        return userDeleted
    }

    async getUsers(limit){
        const userDAO = new UserDAO()
        const users = await userDAO.get(limit)
        return users
    }

    async getUser(id){
        const userDAO = new UserDAO()
        const user = await userDAO.getID(id)
        if(!user) throw new ValidationError("El usuario no existe")
        return user
    }
}