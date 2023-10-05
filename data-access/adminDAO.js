const Admin = require('../schemas/Admin')

/**
 * AdminDAO class
 */
module.exports = class AdminDAO{
    /**
     * Constructor of AdminDAO class
     */
    constructor(){}

    /**
     * Creates an Admin Object with the data given and inserts into Database
     * @param {Admin Data} adminData 
     */
    async create(adminData){
        try {
            const admin = new Admin(adminData)
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Updates the Admin Data in Database on the Admin Object which matches with ID given
     * @param {Id Admin} id 
     * @param {Admin Data} adminData 
     */
    async update(id, adminData){
        try {
            const admin = await Admin.findByIdAndUpdate(id, adminData, {new: true})
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Deletes from Database the object which ID matches the one given 
     * @param {Id Admin} id 
     */
    async delete(id){
        try {
            const admin = await Admin.findByIdAndRemove(id)
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Returns all Admin Objects from Database within a limit of 10
     * @param {limit} limit 
     * @returns List of Admin Objects
     */
    async get(limit = 10){
        try {
            const admins = await Admin.find().limit(limit)
            return admins
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Returns an Admin Object from Database that matches the id given
     * @param {Id Admin} id 
     * @returns Object admin
     */
    async getID(id){
        try {
            const admin = await Admin.findById(id)
            return admin
        } catch (error) {
            console.log(error)
        }
    }
}