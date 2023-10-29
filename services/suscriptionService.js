import SuscriptionDAO from "../data-access/suscriptionDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class SuscriptionService{
    constructor(){
        this.suscriptionDAO = new SuscriptionDAO()
    }

    async createSuscription(suscriptionData){
        const suscriptionExist = await this.suscriptionDAO.getByType(suscriptionData.type)
        if(suscriptionExist) throw new ValidationError("Este tipo de suscripcion ya existe")
        const suscription = await this.suscriptionDAO.create(suscriptionData)
        return suscription
    }

    async updateSuscription(id, suscriptionData){
        const suscriptionToUpdate = await this.suscriptionDAO.getById(id)
        if(!suscriptionToUpdate) throw new ValidationError("La suscripcion no existe")
        const suscriptionUpdated = await this.suscriptionDAO.update(id, suscriptionData)
        return suscriptionUpdated
    }

    async deleteSuscription(id){
        const suscriptionDeleted = await this.suscriptionDAO.delete(id)
        if(!suscriptionDeleted) throw new ValidationError("La suscripcion no existe")
        return suscriptionDeleted
    }

    async getSuscriptions(limit){
        const suscriptions = await this.suscriptionDAO.get(limit)
        return suscriptions
    }

    async getSuscription(id){
        const suscription = await this.suscriptionDAO.getById(id)
        if(!suscription) throw new ValidationError("La suscripcion no existe")
        return suscription
    }
}