import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

export const config = {
    url: process.env.DATABASE_URL,
    options: {
        usenewUrlParser: true,
        useUnifiedTopology: true
    }
}

export function connect() {
    return mongoose.connect(config.url, config.options)
}


export function disconnect() {
    return mongoose.disconnect()
}