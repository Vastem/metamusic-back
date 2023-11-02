import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import InternalServerError from '../errors/InternalServerError.js';
dotenv.config();

export function generateUserToken(user) {
    try {
        const payload = {
            username: user.username,
            email: user.email,
            rol: "user",
            subscription: null
        }
        const token = jwt.sign(payload, process.env.KEY, { expiresIn: '12h' });
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

export function generateSubscriptionToken({username, email, subscription}){
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
        const token = jwt.sign(payload, process.env.KEY, { expiresIn: '12h' });
        return token
    } catch (error) {
        console.log(error)
        throw new InternalServerError("Lo sentimos, ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.")
    }
}

export function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        console.log("[UNAUTHORIZED] No se ha enviado el token.")
        return res.status(401).json({ message: 'No tienes permisos para realizar esta acción' })
    }
    try {
        const tokenData = jwt.verify(req.headers.authorization, process.env.KEY);
        res.locals.data = tokenData
        next()
    } catch (error) {
        console.log("[UNAUTHORIZED] Token inválido o sesión expirada.")
        res.status(401).json({ message: 'Su sesión a expirado.' })
    }
}