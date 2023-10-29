import DataAccesError from '../errors/DataAccesError.js';
import User from '../schemas/User.js';
import mongoose from "mongoose";

export default class UserDAO {
    constructor() { }

    async create(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, userData) {
        try {
            const user = await User.findByIdAndUpdate(new mongoose.Types.ObjectId(id), userData, { new: true });
            return user;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id) {
        try {
            const user = await User.findByIdAndRemove(new mongoose.Types.ObjectId(id));
            return user;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10) {
        try {
            const users = await User.find().limit(limit);
            return users;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getById(id) {
        try {
            const user = await User.findById(new mongoose.Types.ObjectId(id));
            return user;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByUsername(username) {
        try {
          const user = await User.findOne({ username });
          return user;
        } catch (error) {
          console.log(error);
          throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.");
        }
    }

    async getByEmail(email) {
        try {
          const user = await User.findOne({ email });
          return user;
        } catch (error) {
          console.log(error);
          throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.");
        }
    }
}