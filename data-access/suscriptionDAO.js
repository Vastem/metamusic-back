import Suscription from "../schemas/Suscription";

export default class SuscriptionDAO{
    constructor(){}
    /**
     * Creates a Suscription Object with the data given and inserts into Database
     * @param {Suscription Data} suscriptionData 
     */
    async create(suscriptionData){
        try {
            const suscription = new Suscription(suscriptionData)
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Updates the Suscription Data in Database on the Suscription Object which matches with ID given
     * @param {Id Suscription} id 
     * @param {Suscription Data} suscriptionData 
     */
    async update(id, suscriptionData){
        try {
            const suscription = await Suscription.findByIdAndUpdate(id, suscriptionData, {new: true})
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Deletes from Database the object which ID matches the one given
     * @param {Id Suscription} id  
     */
    async delete(id){
        try {
            const suscription = await Suscription.findByIdAndRemove(id)
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Returns all Suscription Objects from Database within a limit of 10 
     * @param {limit} limit 
     * @returns List of Suscription Objects
     */
    async get(limit = 10){
        try {
            const suscriptions = await Suscription.find().limit(limit)
            return suscriptions
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Returns a Suscription Object from Database that matches the id given
     * @param {Id Suscription} id 
     * @returns Object Suscription 
     */
    async getID(id){
        try {
            const suscription = await Suscription.findById(id)
            return suscription
        } catch (error) {
            console.log(error)
        }
    }
}