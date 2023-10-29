import mongoose from "mongoose";

export function validateCreateAdminData(req, res, next) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
  
    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ message: 'Todos los campos deben ser cadenas de texto.' });
    }
  
    next();
}

export function validateUpdateAdminData(req, res, next) {
  const { username, email, password } = req.body;

  try {
    new mongoose.Types.ObjectId(req.params.id)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'El id es inválido' });
  }

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ message: 'Todos los campos deben ser cadenas de texto.' });
  }

  next();
}

export function validateAdminId(req, res, next) {
  try {
    new mongoose.Types.ObjectId(req.params.id)
  } catch (error) {
    return res.status(400).json({ message: 'Se necesita el id del administrador' });
  }

  next();
}
