import mongoose from "mongoose";

export function validateAddSongData(req, res, next) {
    const { idsong, name, album, duration, singers, image } = req.body;
    if (!idsong || !name || !album || !duration || !singers || !image) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (typeof idsong !== 'number' || typeof name !== 'string' || typeof album !== 'string' || typeof duration !== 'number' || 
        typeof singers !== 'string' || typeof image !== 'string') {
        return res.status(400).json({ message: 'El tipo de los datos es inválido.' });
    }

    next();
}

export function validateUpdateSongData(req, res, next) {
    const { idsong, name, album, duration, singers, image } = req.body;

    try {
      new mongoose.Types.ObjectId(req.params.id)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'El id es inválido' });
    }

    if (!idsong || !name || !album || !duration || !singers || !image) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (typeof idsong !== 'number' || typeof name !== 'string' || typeof album !== 'string' || typeof duration !== 'number' || 
        typeof singers !== 'string' || typeof image !== 'string') {
        return res.status(400).json({ message: 'El tipo de los datos es inválido.' });
    }

    next();
}

export function validateSongId(req, res, next) {
    try {
      new mongoose.Types.ObjectId(req.params.id)
    } catch (error) {
      return res.status(400).json({ message: 'Se necesita el id de la cancion' });
    }

    next();
}