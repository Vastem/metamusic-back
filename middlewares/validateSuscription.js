import mongoose from "mongoose";

export function validateAddSuscriptionData(req, res, next) {
    const { type, cost, startDate, dueDate } = req.body;
    if (!type || !cost || !startDate || !dueDate) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (typeof type !== 'string' || typeof cost !== 'number' || typeof startDate !== 'string' || typeof dueDate !== 'string') {
        return res.status(400).json({ message: 'Tipos de datos incorrecto.' });
    }

    if (!isValidDate(startDate) || !isValidDate(dueDate)) {
        return res.status(400).json({ message: 'Las fechas no son válidas.' });
    } 

    next();
}

export function validateUpdateSuscriptionData(req, res, next) {
    const { type, cost, startDate, dueDate } = req.body;

    try {
      new mongoose.Types.ObjectId(req.params.id)
    } catch (error) {
      return res.status(400).json({ message: 'El id es inválido' });
    }

    if (!type || !cost || !startDate || !dueDate) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (typeof type !== 'string' || typeof cost !== 'number' || typeof startDate !== 'string' || typeof dueDate !== 'string') {
        return res.status(400).json({ message: 'Tipos de datos incorrecto.' });
    }

    if (!isValidDate(startDate) || !isValidDate(dueDate)) {
      return res.status(400).json({ message: 'Las fechas no son válidas.' });
  } 

    next();
}

export function validateSuscriptionId(req, res, next) {
    try {
      new mongoose.Types.ObjectId(req.params.id)
    } catch (error) {
      return res.status(400).json({ message: 'Se necesita el id de la suscripcion' });
    }

    next();
}

// Función para validar fechas
function isValidDate(dateString) {
  const iso8601Pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/;
  return iso8601Pattern.test(dateString);
}