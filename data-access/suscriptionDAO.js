import DataAccesError from "../errors/DataAccesError.js";
import Suscription from "../schemas/Suscription.js";
import mongoose from "mongoose";

export default class SuscriptionDAO{
    constructor(){}
    async create(suscriptionData){
        try {
            const suscription = new Suscription(suscriptionData)
            return await suscription.save()
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, suscriptionData){
        try {
            const suscription = await Suscription.findByIdAndUpdate(new mongoose.Types.ObjectId(id), suscriptionData, {new: true})
            return suscription
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id){
        try {
            const suscription = await Suscription.findByIdAndRemove(new mongoose.Types.ObjectId(id))
            return suscription
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

    async getById(id){
        try {
            const suscription = await Suscription.findById(new mongoose.Types.ObjectId(id))
            return suscription
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByType(type){
        try {
            const suscription = await Suscription.findOne({type});
            return suscription;
          } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.");
          }
    }
}