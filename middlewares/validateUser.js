import mongoose from "mongoose";

export function validateCreateUserData(req, res, next) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Todos los campos deben ser cadenas de texto.' });
  }

  next();
}

export function validateLogin(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Todos los campos deben ser cadenas de texto.' });
  }

  next();
}

export function validateUpdateUserData(req, res, next) {
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

export function validateUserId(req, res, next) {
  try {
    new mongoose.Types.ObjectId(req.params.id)
  } catch (error) {
    return res.status(400).json({ message: 'Se necesita el id del usuario' });
  }

  next();
}