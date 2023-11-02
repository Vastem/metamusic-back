import DataAccesError from "../errors/DataAccesError.js";
import Subscription from "../schemas/Subscription.js";
import mongoose from "mongoose";

export default class SubscriptionDAO{
    constructor(){}
    async create(subscriptionData){
        try {
            const subscription = new Subscription(subscriptionData)
            return await subscription.save()
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async update(id, subscriptionData){
        try {
            const subscription = await Subscription.findByIdAndUpdate(new mongoose.Types.ObjectId(id), subscriptionData, {new: true})
            return subscription
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async delete(id){
        try {
            const subscription = await Subscription.findByIdAndRemove(new mongoose.Types.ObjectId(id))
            return subscription
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async get(limit = 10){
        try {
            const subscriptions = await Subscription.find().limit(limit)
            return subscriptions
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getById(id){
        try {
            const subscription = await Subscription.findById(new mongoose.Types.ObjectId(id))
            return subscription
        } catch (error) {
            console.log(error)
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.")
        }
    }

    async getByType(type){
        try {
            const subscription = await Subscription.findOne({type});
            return subscription;
          } catch (error) {
            console.log(error);
            throw new DataAccesError("Lo sentimos, se ha producido un problema en la base de datos. Por favor, inténtelo de nuevo más tarde.");
          }
    }
}