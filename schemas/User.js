import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    subscription: {
        id: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        expirationDate: {
            type: Date,
            required: true
        }
    }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);
export default User;
