import DataAccesError from "../errors/DataAccesError";
import Admin from "../schemas/Admin";

export default class AdminDAO{
    constructor(){}
    async create(adminData){
        try {
            const admin = new Admin(adminData)
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, adminData){
        try {
            const admin = await Admin.findByIdAndUpdate(id, adminData, {new: true})
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id){
        try {
            const admin = await Admin.findByIdAndRemove(id)
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10){
        try {
            const admins = await Admin.find().limit(limit)
            return admins
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getID(id){
        try {
            const admin = await Admin.findById(id)
            return admin
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }
}