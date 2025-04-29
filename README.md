# 💸 Credifacil - Plataforma de Préstamos Ágil y Segura

Credifacil es una aplicación financiera full-stack que permite a los usuarios solicitar préstamos monetarios de forma rápida, sencilla y sin los trámites burocráticos tradicionales. La plataforma ofrece una experiencia centrada en el usuario con un enfoque en la transparencia, velocidad y accesibilidad.

---

## 🚀 Tecnologías utilizadas

### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework minimalista para construir APIs RESTful.
- **SQL Server Developer**: Base de datos relacional robusta y escalable.
- **JWT**: Sistema de autenticación segura mediante tokens.
- **Dotenv**: Gestión de variables de entorno.

### Frontend
- **React**: Biblioteca de JavaScript para construir interfaces de usuario reactivas.
- **Axios**: Cliente HTTP para consumir servicios del backend.
- **React Router**: Manejo de rutas dentro de la SPA (Single Page Application).
- **Tailwind CSS**: Framework de CSS utilitario para estilos rápidos y personalizados.

### Arquitectura
- **Modelo MVC en backend**: Separación en controladores, servicios y modelos.
- **API RESTful**: Comunicación estandarizada entre frontend y backend.

---

## 🛠️ Requisitos previos

Asegúrate de tener instalado:

- **Node.js 18.0.0+**
- **SQL Server Developer Edition**
- **Git**

---

## 🔧 Instalación del proyecto

### 1. Clona el repositorio
```bash
git clone https://github.com/tuusuario/credifacil.git
cd credifacil
```

---

## ⚙️ Backend - Node.js + Express

### 1. Configura las variables de entorno
Copia el archivo `.env.example` a `.env` y edítalo con tus credenciales:
```bash
cp .env.example .env
# Edita .env con tus configuraciones
```

### 2. Instala las dependencias
```bash
cd backend
npm install
```

### 3. Ejecuta las migraciones y corre el servidor
```bash
npm run migrate
npm run dev
```

El servidor estará disponible en: `http://localhost:5000`

---

## 🌐 Frontend - React

### 1. Instala las dependencias
```bash
cd frontend
npm install
```

### 2. Corre el servidor de desarrollo
```bash
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

---

## 📁 Estructura del proyecto

```
credifacil/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   └── app.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── services/
│   │   └── App.jsx
│   └── index.html
│
└── README.md
```

---

## 📦 Funcionalidades clave

- Registro y autenticación de usuarios
- Solicitud y gestión de préstamos
- Historial de transacciones
- Seguimiento de pagos y estado del préstamo
- Interfaz intuitiva y responsiva

---

## 🔄 Actualización de dependencias

### Backend
```bash
npm install nueva-dependencia
```

### Frontend
```bash
npm install nueva-dependencia
```

---

## 👨‍💻 Autor

**[Tu nombre o equipo de desarrollo]**

---

## 📄 Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
