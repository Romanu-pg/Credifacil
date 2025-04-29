const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../infrastructure/repository/userRepository');

// Esta clave debe almacenarse en un archivo .env
const SECRET_KEY = 'mi-clave-secreta';

async function login(body) {
  const user = await userRepository.login(body);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  
  if (!passwordIsValid) {
    throw new Error('Contraseña incorrecta');
  }

  // Genera el token JWT
  const token = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: 86400, // 24 horas
  });

  return { token };
}

module.exports = {
  login,
};