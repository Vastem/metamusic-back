import SuscriptionService from "../services/suscriptionService.js";

export async function createSuscription(req,res){
    const suscriptionService = new SuscriptionService()
    try {
        const suscription = await suscriptionService.createSuscription(req.body)
        res.status(200).json(suscription)
    } catch (error) {
        res.status(error.statusCode).json({message:error.message})
    }
}

export async function updateSuscription(req,res){
    const suscriptionService = new SuscriptionService()
    try{
        const suscriptionUpdated = await suscriptionService.updateSuscription(req.params.id, req.body)
        res.status(200).json(suscriptionUpdated)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}

export async function deleteSuscription(req,res){
    const suscriptionService = new SuscriptionService()
    try{
        const suscriptionUpdated = await suscriptionService.deleteSuscription(req.params.id)
        res.status(200).json(suscriptionUpdated)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSuscriptions(req,res){
    const suscriptionService = new SuscriptionService()
    try{
        const suscriptions = await suscriptionService.getSuscriptions()
        res.status(200).json(suscriptions)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSuscription(req,res){
    const suscriptionService = new SuscriptionService()
    try{
        const suscription = await suscriptionService.getSuscription(req.params.id)
        res.status(200).json(suscription)
    }catch(error){
        res.status(error.statusCode).json(error.message)
    }
}