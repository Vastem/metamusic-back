import DataAccesError from "../errors/DataAccesError.js";
import Admin from "../schemas/Admin.js";
import mongoose from "mongoose";

export default class AdminDAO{
    constructor(){}
    async create(adminData){
        try {
            const admin = new Admin(adminData)
            return await admin.save()
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, adminData){
        try {
            const admin = await Admin.findByIdAndUpdate(new mongoose.Types.ObjectId(id), adminData, {new: true})
            return admin
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id){
        try {
            const admin = await Admin.findByIdAndRemove(new mongoose.Types.ObjectId(id))
            return admin
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

    async getById(id){
        try {
            const admin = await Admin.findById(new mongoose.Types.ObjectId(id))
            return admin
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByUsername(username) {
        try {
          const admin = await Admin.findOne({ username });
          return admin;
        } catch (error) {
          console.log(error);
          throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.");
        }
    }

    async getByEmail(email) {
        try {
            const admin = await Admin.findOne({ email });
            return admin
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.");
        }
    }
      
}