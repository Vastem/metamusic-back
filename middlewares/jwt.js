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
            subscription: user.subscription
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

export function generateSubscriptionToken({ username, email, subscription }) {
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

export function authenticated(req, res, next) {
    if (!req.cookies.authToken) {
        return res.json({ isAuthenticated: false })
    }
    try {
        jwt.verify(req.cookies.authToken, process.env.KEY, (err, decoded) => {
            if (err) {
                // Si hay un error al verificar el token, envía una respuesta indicando que el usuario no está autenticado
                res.json({ isAuthenticated: false });
            } else {
                // Si el token es válido, envía una respuesta indicando que el usuario está autenticado
                res.json({ isAuthenticated: true, username: decoded.username });
            }
        })
    } catch (error) {
        res.status(401).json({ isAuthenticated: false, message: 'Su sesión a expirado.' })
    }
}

export function verifyToken(req, res, next) {
    if (!req.cookies.authToken) {
        console.log("[UNAUTHORIZED] No se ha enviado el token.")
        return res.status(401).json({ message: 'No tienes permisos para realizar esta acción' })
    }
    try {
        const tokenData = jwt.verify(req.cookies.authToken, process.env.KEY);
        res.locals.data = tokenData
        next()
    } catch (error) {
        console.log("[UNAUTHORIZED] Token inválido o sesión expirada.")
        res.status(401).json({ message: 'Su sesión a expirado.' })
    }
}