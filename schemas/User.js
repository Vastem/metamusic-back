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
    image: {
        type: String
    },
    subscription: {
        id: {
            type: String
        },
        type: {
            type: String
        },
        startDate: {
            type: Date
        },
        expirationDate: {
            type: Date
        }
    }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);
export default User;
