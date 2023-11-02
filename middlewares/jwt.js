import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import InternalServerError from '../errors/InternalServerError';
dotenv.config();

export async function generateUserToken(user) {
    try {
        const payload = {
            username: user.username,
            email: user.email,
            rol: "user",
            suscription: null
        }
        const token = await jwt.sign(payload, process.env.KEY, { expiresIn: '12h' });
        return token
    } catch (error) {
        console.log(error)
        throw new InternalServerError("Lo sentimos, ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.")
    }
    next()
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
    next()
}

export function generateSubscriptionToken(userSubscribedData){
    try {
        //TODO: Crear payload con los datos del usuario
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