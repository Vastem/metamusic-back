import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import InternalServerError from '../errors/InternalServerError.js';
dotenv.config();

export async function generateUserToken(user) {
    try {
        const payload = {
            username: user.username,
            email: user.email,
            rol: "user",
            subscription: null
        }
        const token = await jwt.sign(payload, process.env.KEY, { expiresIn: '12h' });
        return token
    } catch (error) {
        console.log(error)
        throw new InternalServerError("Lo sentimos, ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.")
    }
}

export function generateAdminToken(admin) {
    try {
        const payload = {
            username: admin.username,
            email: admin.email,
            rol: "admin"
        }
        const token = jwt.sign(payload, process.env.KEY, { expiresIn: '12h' });
        return token
    } catch (error) {
        console.log(error)
        throw new InternalServerError("Lo sentimos, ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.")
    }
}

export async function generateSubscriptionToken({username, email, subscription}){
    try {
        const payload = {
            username: username,
            email: email,
            rol: "user",
            subscription: {
                id: subscription.id,
                startDate: subscription.startDate,
                expirationDate: subscription.expirationDate
            }
        }
        const token = await jwt.sign(payload, process.env.KEY, { expiresIn: '12h' });
        return token
    } catch (error) {
        console.log(error)
        throw new InternalServerError("Lo sentimos, ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.")
    }
}

export async function verifyToken(req, res, next) {
    try {
        const decoded = await jwt.verify(req.headers.authorization, process.env.KEY);
        res.locals.data = decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'No tienes permisos para realizar esta acción' })
    }
}