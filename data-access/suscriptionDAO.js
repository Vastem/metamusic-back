import DataAccesError from "../errors/DataAccesError";
import Suscription from "../schemas/Suscription";

export default class SuscriptionDAO{
    constructor(){}
    async create(suscriptionData){
        try {
            const suscription = new Suscription(suscriptionData)
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, suscriptionData){
        try {
            const suscription = await Suscription.findByIdAndUpdate(id, suscriptionData, {new: true})
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id){
        try {
            const suscription = await Suscription.findByIdAndRemove(id)
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10){
        try {
            const suscriptions = await Suscription.find().limit(limit)
            return suscriptions
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getID(id){
        try {
            const suscription = await Suscription.findById(id)
            return suscription
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }
}