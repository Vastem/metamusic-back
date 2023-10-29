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
    suscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Suscription'
    }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);
export default User;
