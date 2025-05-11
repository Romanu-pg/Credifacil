const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../infrastructure/repository/userRepository');

const SECRET_KEY = process.env.JWT_SECRET || 'mi-clave-secreta'; // Ideal: usar .env

async function login(body) {
  const result = await userRepository.login(body);

  const userList = result.data;
  const user = Array.isArray(userList) && userList.length > 0 ? userList[0] : null;

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  // En este punto asumimos que la contraseña en la base ya está hasheada
  const passwordIsValid = bcrypt.compareSync(body.password, user.password);

  if (!passwordIsValid) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: 86400, // 24 horas
  });

  return { token };
}

module.exports = {
  login,
};