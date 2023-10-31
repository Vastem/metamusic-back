import mongoose from "mongoose"

export function validateAddPlaylistData(req, res, next) {
    const { name, description, user, image } = req.body
    if (!name || !description || !user || !image || !user.username || !user.image) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }
    if (typeof name !== 'string' || typeof description !== 'string' ||
        typeof user !== 'object' || typeof image !== 'string' || user.username !== 'string' || user.image !== 'string') {
        return res.status(400).json({ message: 'El tipo de los datos es inválido.' })
    }
    next()
}

export function validateUpdatePlaylistData(req, res, next) {
    const { name, description, user, image } = req.body
    try {
        new mongoose.Types.ObjectId(req.body.idplaylist)
    } catch (error) {
        return res.status(400).json({ message: 'El id de la playlist es inválido' })
    }
    if (!name || !description || !user || !image || !user.username || !user.image) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }
    if (typeof name !== 'string' || typeof description !== 'string' ||
        typeof user !== 'object' || typeof image !== 'string' || user.username !== 'string' || user.image !== 'string') {
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