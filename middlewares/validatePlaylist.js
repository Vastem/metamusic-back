import mongoose from "mongoose"

export function validateAddPlaylistData(req, res, next) {
    const { name, description, user } = req.body
    if (!name || !description || !user | !user) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }
    if (typeof name !== 'string' || typeof description !== 'string') {
        return res.status(400).json({ message: 'El tipo de los datos es inválido.' })
    }

    try {
        new mongoose.Types.ObjectId(user)
    } catch (error) {
        return res.status(400).json({ message: 'El tipo de los datos es inválido.' })
    }


    next()
}

export function validateUpdatePlaylistData(req, res, next) {
    const { name, description, user, image } = req.body
    try {
        new mongoose.Types.ObjectId(req.params.id)
        new mongoose.Types.ObjectId(req.params.user)
    } catch (error) {
        return res.status(400).json({ message: 'El id de la playlist es inválido' })
    }
    if (!name || !description || !user || !image || !user) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }
    if (typeof name !== 'string' || typeof description !== 'string' || typeof image !== 'string') {
        return res.status(400).json({ message: 'El tipo de los datos es inválido.' })
    }
    next()
}

export function validatePlaylistId(req, res, next) {
    try {
        new mongoose.Types.ObjectId(req.params.id)
    } catch (error) {
        return res.status(400).json({ message: 'Se necesita el id de la playlist' })
    }
    next()
}