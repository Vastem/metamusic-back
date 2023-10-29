import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config();

export async function generateToken(req) {
    try {
        const payload = {
            username: req.username,
            email: req.email
        }
        const token = await jwt.sign(payload, process.env.KEY, { expiresIn: '1h' });
        return token
    } catch (error) {
        throw error;
    }
    next()
}

export async function verifyToken(req, res, next) {
    try {
        const decoded = await jwt.verify(req.headers.authorization, process.env.KEY);
        next()
    } catch (error) {
        console.log(error)
    }

}