const subscriptionDAO = require('../data-access/suscriptionDAO')
const {AppError} = require('../utils/appError')

class SubscriptionController{
    static async createSubscription(req, res, next){
        try {
            const {type, cost, startDate, dueDate} = req.body
            if(!type || !cost || !startDate || !dueDate){
                next(new AppError('Fields type, cost, start date and due date required', 500))
            }
            const subscriptionData = {type, cost, startDate, dueDate}

            const subscription = await subscriptionDAO.create(subscriptionData)
            res.status(201).json(subscription)
        } catch (error) {
            next(new AppError('Error creating subscription', 500))
        }
    }

    static async getSubscriptionById(req, res, next){
        try {
            const id = req.params.id
            const subscription = await subscriptionDAO.getID(id)
            if(!subscription){
                next(new AppError('Subscription not found', 404))
            }
            req.status(200).json(subscription)
        } catch (error) {
            next(new AppError('Could not get subscription', 404))
        }
    }

    static async getSubscriptions(req, res, next){
        try {
            const id = req.params.limit || 10
            const subscriptions = await subscriptionDAO.get(id)
           
            req.status(200).json(subscriptions)
        } catch (error) {
            next(new AppError('Could not get subscriptions', 500))
        }
    }

    static async updateSubscription(req, res, next){
        try {
            const id = req.params.id
            const subscriptionData = req.body
            
            const subscription = await subscriptionDAO.update(id, subscriptionData)

            if(!subscription){
                next(new AppError('Subscription not found', 404))
            }

            res.status(200).json(subscription)
        } catch (error) {
            next(new AppError('Error updating subscription', 500))
        }
    }

    static async deleteSubscription(req, res, next){
        try {
            const id = req.params.id
            
            const subscription = await subscriptionDAO.delete(id)
            if(!subscription){
                next(new AppError('Could not get subscription', 404))
            }
            
            res.status(200).json({message: 'Subscription deleted correctly'})
        } catch (error) {
            next(new AppError('Error deleting subscription', 500))
        }
    }
}

module.exports = SubscriptionController