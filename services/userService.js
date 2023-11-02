import UserDAO from "../data-access/userDAO.js";
import SubscriptionDAO from "../data-access/subscriptionDAO.js";
import ValidationError from "../errors/ValidationError.js";
import NoDataFoundError from "../errors/NoDataFoundError.js";

export default class UserService {
    constructor() {
        this.userDAO = new UserDAO()
        this.subscriptionDAO = new SubscriptionDAO()
    }

    async createUser(userData) {
        const usernameExist = await this.userDAO.getByUsername(userData.username)
        const emailExist = await this.userDAO.getByEmail(userData.email)
        if (usernameExist) throw new ValidationError("Ya existe un usuario con ese nombre de usuario.")
        if (emailExist) throw new ValidationError("El email ya está registrado.")
        const user = await this.userDAO.create(userData);
        return user
    }

    async updateUser(id, userData) {
        const userToUpdate = await this.userDAO.getById(id)
        if (!userToUpdate) throw new NoDataFoundError("El usuario no existe")
        const userUpdated = await this.userDAO.update(id, userData)
        return userUpdated
    }

    async deleteUser(id) {
        const userDeleted = await this.userDAO.delete(id)
        if (!userDeleted) throw new NoDataFoundError("El usuario no existe")
        return userDeleted
    }

    async getUsers(limit) {
        const users = await this.userDAO.get(limit)
        return users
    }

    async getUser(id) {
        const user = await this.userDAO.getById(id)
        if (!user) throw new NoDataFoundError("El usuario no existe")
        return user
    }

    async login(userData) {
        const user = await this.userDAO.getByUsername(userData.username)
        if (!user) throw new ValidationError("El nombre de usuario o la contraseña son incorrectos")
        if (user.password !== userData.password) throw new ValidationError("El nombre de usuario o la contraseña son incorrectos")
        return user
    }

    async toSubscripe(subscriptionData){
        const user = await this.userDAO.getById(subscriptionData.iduser)
        if(!user) throw new NoDataFoundError("El usuario no existe")
        const subscription = await this.subscriptionDAO.getById(subscriptionData.idsubscription)
        if(!subscription) throw new NoDataFoundError("La suscripción no existe")

        // Establecer la fecha de inicio y de fin de la suscripción
        const startDate = new Date()
        const expirationDate = new Date()
        expirationDate.setDate(startDate.getDate() + subscription.duration)

        // Agregar la suscripción al usuario
        user.subscription = {
            id: subscription._id,
            startDate: startDate,
            expirationDate: expirationDate
        };

        // Guardar el usuario en la base de datos con su nueva suscripcion
        const subscribedUser = await this.userDAO.update(user._id, user)
        return subscribedUser
    }
}