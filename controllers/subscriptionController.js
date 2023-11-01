import SubscriptionService from "../services/subscriptionService.js"

export async function createSubscription(req,res){
    const subscriptionService = new SubscriptionService()
    try {
        const subscription = await subscriptionService.createSubscription(req.body)
        res.status(200).json(subscription)
    } catch (error) {
        res.status(error.statusCode).json({message:error.message})
    }
}

export async function updateSubscription(req,res){
    const subscriptionService = new SubscriptionService()
    try{
        const subscriptionUpdated = await subscriptionService.updateSubscription(req.params.id, req.body)
        res.status(200).json(subscriptionUpdated)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}

export async function deleteSubscription(req,res){
    const subscriptionService = new SubscriptionService()
    try{
        const subscriptionUpdated = await subscriptionService.deleteSubscription(req.params.id)
        res.status(200).json(subscriptionUpdated)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSubscriptions(req,res){
    const subscriptionService = new SubscriptionService()
    try{
        const subscriptions = await subscriptionService.getSubscriptions()
        res.status(200).json(subscriptions)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSubscription(req,res){
    const subscriptionService = new SubscriptionService()
    try{
        const subscription = await subscriptionService.getSubscription(req.params.id)
        res.status(200).json(subscription)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}