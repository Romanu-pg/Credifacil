# 🧠 MARU - Medical Analysis and Reporting Unit

MARU es una aplicación de salud que permite a los usuarios gestionar aspectos importantes de su bienestar, como el monitoreo de glucosa, planificación de menús saludables, recordatorios de medicamentos y más. La aplicación incluye un asistente de IA que ofrece recomendaciones personalizadas y menús adaptados a las necesidades específicas de cada usuario.

---

## 🚀 Tecnologías utilizadas

### Backend
- **Python 3.10+** 
- **FastAPI**: Framework moderno para APIs con validación automática
- **SQLAlchemy**: ORM para manipulación de base de datos
- **Pydantic**: Validación de datos y settings
- **JWT**: Autenticación basada en tokens
- **OpenAI API**: Integración con IA para recomendaciones personalizadas

### Frontend
- **React 19**: Biblioteca JavaScript para interfaces de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Material UI 7**: Componentes de interfaz con diseño Material
- **React Router 7**: Manejo de rutas en la aplicación
- **Axios**: Cliente HTTP para peticiones a la API

### Arquitectura
- **Modelo MVC en backend**: Controllers, services, models y schemas
- **Patrón MVVM en frontend**: Models, Views, ViewModels
- **API RESTful**: Comunicación estandarizada entre frontend y backend

---

## 🛠️ Requisitos previos

Asegúrate de tener instalado:

- **Python 3.10+**
- **Node.js 18.0.0+ y npm**
- **Git**

---

## 🔧 Instalación del proyecto

### 1. Clona el repositorio
```bash
git clone https://github.com/tuusuario/MARU.git
cd MARU
```

---

## ⚙️ Backend - FastAPI

### 1. Crea y activa un entorno virtual (Windows)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
```

### 2. Configuración del entorno
Copia el archivo `.env.example` a `.env` y configura tus variables de entorno:
```bash
cp .env.example .env
# Edita el archivo .env con tus configuraciones
```

### 3. Instala las dependencias
```bash
pip install -r requirements.txt
```

### 4. Inicializa la base de datos y ejecuta el servidor
```bash
python run.py
```

El servidor estará disponible en: http://localhost:8000

La documentación de la API estará en: http://localhost:8000/docs

---

## 🌐 Frontend - React + Vite

### 1. Entra a la carpeta del frontend e instala dependencias
```bash
cd frontend
npm install
```

### 2. Ejecuta el servidor de desarrollo
```bash
npm run dev
```

El frontend estará disponible en: http://localhost:5173

---

## 📁 Estructura del proyecto

```
MARU/
│
├── backend/                      # Código del backend con FastAPI
│   ├── .env.example              # Plantilla para variables de entorno
│   ├── app/                      # Aplicación principal
│   │   ├── core/                 # Funcionalidades centrales
│   │   │   ├── config.py         # Configuración de la aplicación
│   │   │   ├── database.py       # Configuración de la base de datos
│   │   │   ├── init_db.py        # Inicialización de la BD con datos de prueba
│   │   │   └── security.py       # Autenticación y seguridad
│   │   │
│   │   ├── models/               # Modelos de la base de datos (SQLAlchemy)
│   │   │   ├── base_model.py     # Modelo base para herencia
│   │   │   ├── glucose.py        # Modelo para lecturas de glucosa
│   │   │   ├── menu.py           # Modelo para menús y comidas
│   │   │   ├── reminder.py       # Modelo para recordatorios
│   │   │   └── user.py           # Modelo de usuarios
│   │   │
│   │   ├── routes/               # Endpoints de la API
│   │   │   ├── auth.py           # Rutas de autenticación
│   │   │   ├── glucose.py        # Rutas para gestión de glucosa
│   │   │   ├── health.py         # Rutas para recomendaciones de salud
│   │   │   ├── menu.py           # Rutas para menús
│   │   │   ├── reminders.py      # Rutas para recordatorios
│   │   │   └── users.py          # Rutas de gestión de usuarios
│   │   │
│   │   ├── schemas/              # Esquemas Pydantic para validación
│   │   │   ├── glucose.py        # Esquemas para lecturas de glucosa
│   │   │   ├── health.py         # Esquemas para datos de salud
│   │   │   ├── menu.py           # Esquemas para menús
│   │   │   ├── reminder.py       # Esquemas para recordatorios
│   │   │   └── user.py           # Esquemas para usuarios
│   │   │
│   │   ├── services/             # Lógica de negocio
│   │   │   ├── ai_service.py     # Servicio de IA para recomendaciones
│   │   │   ├── glucose_service.py # Servicio para gestión de glucosa
│   │   │   ├── reminder_service.py # Servicio para recordatorios
│   │   │   └── user_service.py   # Servicio para gestión de usuarios
│   │   │
│   │   └── main.py               # Punto de entrada de la aplicación
│   │
│   ├── requirements.txt          # Dependencias del backend
│   └── run.py                    # Script para iniciar la aplicación
│
├── frontend/                     # Código del frontend con React
│   ├── public/                   # Archivos estáticos
│   ├── src/                      # Código fuente
│   │   ├── assets/               # Imágenes y recursos
│   │   ├── router/               # Configuración de rutas
│   │   │   └── AppRouter.tsx     # Router principal
│   │   │
│   │   ├── services/             # Servicios para comunicación con la API
│   │   │   ├── apiClient.tsx     # Cliente HTTP configurado
│   │   │   └── authService.tsx   # Servicio de autenticación
│   │   │
│   │   ├── viewmodels/           # ViewModels para lógica de UI
│   │   │   └── hooks/            # Custom hooks de React
│   │   │       └── useAuth.tsx   # Hook para gestión de autenticación
│   │   │
│   │   ├── views/                # Componentes de vista
│   │   │   ├── Dashboard/        # Vista principal
│   │   │   ├── GlucoseTracker/   # Seguimiento de glucosa
│   │   │   ├── Legal/            # Términos y condiciones
│   │   │   ├── Login/            # Autenticación
│   │   │   ├── MenuPlanner/      # Planificador de menús
│   │   │   ├── Profile/          # Perfil de usuario
│   │   │   ├── Reminders/        # Gestión de recordatorios
│   │   │   └── common/           # Componentes comunes
│   │   │       └── layout/       # Layouts compartidos
│   │   │
│   │   ├── App.tsx               # Componente principal
│   │   └── main.tsx              # Punto de entrada
│   │
│   ├── package.json              # Dependencias del frontend
│   └── vite.config.ts            # Configuración de Vite
│
└── README.md                     # Documentación del proyecto
```

---

## 📦 Características principales

### Seguimiento de Glucosa
- Registro de lecturas con fecha, hora y contexto (antes/después de comidas)
- Visualización de tendencias y estadísticas
- Alertas configurables para niveles anormales

### Planificador de Menú Saludable
- Recomendaciones personalizadas basadas en perfil de salud
- Biblioteca de comidas y alimentos con información nutricional
- Generación de menús semanales con IA

### Sistema de Recordatorios
- Recordatorios para medicación, lecturas de glucosa, ejercicio y más
- Notificaciones configurables (email, push, SMS)
- Repeticiones personalizables (diaria, semanal, mensual)

### Perfil de Usuario
- Registro de información médica personal
- Seguimiento de IMC y métricas de salud
- Contactos de emergencia

### Inteligencia Artificial
- Recomendaciones personalizadas basadas en datos de salud
- Generación de dietas adaptadas a condiciones específicas
- Respuestas a consultas sobre salud

---

## 🔄 Actualización de dependencias

### Backend
Si añades nuevas librerías con `pip install`, actualiza el archivo `requirements.txt`:

```bash
pip freeze > requirements.txt
```

### Frontend
Para añadir nuevas dependencias:

```bash
npm install nombre-paquete
```

> 🚧 Este proyecto está en desarrollo activo. ¡Gracias por colaborar!
