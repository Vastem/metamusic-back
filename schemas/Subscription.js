import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
}, { versionKey: false });

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;