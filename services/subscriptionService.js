import SubscriptionDAO from "../data-access/subscriptionDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class SubscriptionService{
    constructor(){
        this.subscriptionDAO = new SubscriptionDAO()
    }

    async createSubscription(subscriptionData){
        const subscriptionExist = await this.subscriptionDAO.getByType(suscriptionData.type)
        if(subscriptionExist) throw new ValidationError("Este tipo de suscripcion ya existe")
        const subscription = await this.subscriptionDAO.create(subscriptionData)
        return subscription
    }

    async updateSubscription(id, subscriptionData){
        const subscriptionToUpdate = await this.subscriptionDAO.getById(id)
        if(!subscriptionToUpdate) throw new ValidationError("La suscripcion no existe")
        const subscriptionUpdated = await this.subscriptionDAO.update(id, subscriptionData)
        return subscriptionUpdated
    }

    async deleteSubscription(id){
        const subscriptionDeleted = await this.subscriptionDAO.delete(id)
        if(!subscriptionDeleted) throw new ValidationError("La suscripcion no existe")
        return subscriptionDeleted
    }

    async getSubscriptions(limit){
        const subscriptions = await this.subscriptionDAO.get(limit)
        return subscriptions
    }

    async getSubscription(id){
        const subscription = await this.subscriptionDAO.getById(id)
        if(!subscription) throw new ValidationError("La suscripcion no existe")
        return subscription
    }
}