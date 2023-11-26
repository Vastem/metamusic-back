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
  const { username, email } = req.body;

  try {
    new mongoose.Types.ObjectId(req.params.id)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'El id es inválido' });
  }

  if (typeof username !== 'string' || typeof email !== 'string') {
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

export function validateUserSubscriptionData(req, res, next) {
  console.log(req.body)
  const { idsubscription } = req.body;
  if ( !idsubscription) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    new mongoose.Types.ObjectId(idsubscription)
  } catch (error) {
    return res.status(400).json({ message: 'Los ids son inválidos' });
  }

  next();
}

export function verifyUser(req, res, next) {
  if (!res.locals.data || !res.locals.data.rol || res.locals.data.rol !== "user") {
    console.log("[UNAUTHORIZED] No es un usuario.")
    return res.status(401).json({ message: 'No tienes permisos para realizar esta acción' });
  }
  res.locals.data = res.locals.data
  next();
}

export function verifySubscription(req, res, next) {
     if (!res.locals.data.subscription || !res.locals.data.subscription.expirationDate) {
      console.log(res.locals)
      console.log("[UNAUTHORIZED] No tiene suscripcion.")
      return res.status(401).json({ message: 'No cuentas con una suscripción' });
    }
  
    if (hasSubscriptionExpired(res.locals.data.subscription.expirationDate)) {
      console.log("[UNAUTHORIZED] Suscripcion expirada.")
      return res.status(403).json({ message: 'No cuentas con una suscripción activa.' });
    } 

  next();
}

function hasSubscriptionExpired(expirationDate) {
  const currentDate = new Date();

  if (expirationDate < currentDate) {
    // La suscripción ha expirado
    return true;
  } else {
    // La suscripción aún es válida
    return false;
  }
}