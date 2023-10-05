const User = require('../schemas/User');

module.exports = class UserDAO {
    constructor() { }

    async create(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, userData) {
        try {
            const user = await User.findByIdAndUpdate(id, userData, { new: true });
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const user = await User.findByIdAndRemove(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async get(limit = 10) {
        try {
            const users = await User.find().limit(limit);
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async getID(id) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

}