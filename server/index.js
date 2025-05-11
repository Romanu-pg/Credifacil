// Importación de dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Creación de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

// Definimos las rutas directamente en este archivo
const authRouter = express.Router();

// Ruta para registrar un nuevo usuario
authRouter.post('/registro', (req, res) => {
  try {
    // Aquí iría la lógica de registro
    res.status(201).json({ message: 'Usuario registrado exitosamente', success: true });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
});

// Ruta para iniciar sesión
authRouter.post('/login', (req, res) => {
  try {
    // Aquí iría la lógica de login
    res.status(200).json({ message: 'Inicio de sesión exitoso', success: true, token: 'token-ejemplo' });
  } catch (error) {
    res.status(401).json({ message: 'Credenciales inválidas', error: error.message });
  }
});

// Ruta para verificar token
authRouter.get('/verificar', (req, res) => {
  try {
    // Aquí iría la lógica de verificación de token
    res.status(200).json({ message: 'Token válido', success: true });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido o expirado', error: error.message });
  }
});

// Registramos las rutas de autenticación
app.use('/api/auth', authRouter);

// Ruta base para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('CrediFacil API está funcionando correctamente');
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

// Manejo global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});