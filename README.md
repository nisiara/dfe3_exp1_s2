# Aplicación de Autenticación - DFE3 Exp1 S2

Plataforma web que simula una página de viajes exclusivos. Implementa un sistema completo de registro, autenticación y login con JWT, incluyendo protección de rutas y gestión de sesiones.

## 🎯 Características

- **Registro de Usuarios**: Creación segura de cuentas con validación de datos
- **Autenticación con JWT**: Sistema de tokens seguros para mantener sesiones
- **Validación de Datos**: Verificación en frontend y backend
- **Protección de Rutas**: Acceso restringido a áreas autenticadas
- **Gestión de Sesión**: Recuperación automática de sesión al recargar
- **Redirección Automática**: Navegación inteligente entre vistas según autenticación

## 🛠️ Tecnologías

- **Frontend**: React 19 + Vite
- **Enrutamiento**: React Router 7
- **Estado Global**: Context API
- **Estilos**: CSS personalizado
- **Backend**: Node.js + Express (repositorio separado)
- **Autenticación**: JWT (JSON Web Tokens)

## 📁 Estructura del Proyecto

```
src/
├── contexts/
│   └── AuthenticationContext.jsx    # Estado global de autenticación
├── layouts/
│   └── Header.jsx                   # Componente header/navegación
├── pages/
│   ├── register/
│   │   └── RegisterPage.jsx         # Página de registro
│   ├── login/
│   │   └── LoginPage.jsx            # Página de inicio de sesión
│   ├── home/
│   │   └── HomePage.jsx             # Página principal (protegida)
│   └── not-found/
│       └── NotFoundPage.jsx         # Página 404
├── routes/
│   ├── ProtectedRoutes.jsx          # HOC para rutas protegidas
│   └── RoutesApp.jsx                # Configuración de rutas
├── services/
│   ├── authentication.js            # Llamadas API de autenticación
│   └── user-data.js                 # Llamadas API de usuario
├── assets/
│   └── images/                      # Imágenes y recursos
├── index.css                        # Estilos globales
└── main.jsx                         # Punto de entrada
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js 16+
- npm o yarn
- Backend ejecutándose en `http://localhost:3001`

### Pasos de Instalación

#### 1. Configurar el Backend

```bash
# Clonar el repositorio del backend
git clone https://github.com/nisiara/authentication-backend.git
cd authentication-backend

# Instalar dependencias
npm install

# Crear archivo .env
touch .env
```

**Contenido de `.authentication-backend/.env`:**
```
PORT=3001
JWT_SECRET="tu_clave_secreta_de_64_caracteres_aqui"
```

**Iniciar el servidor backend:**
```bash
npm run dev
```
El backend estará disponible en `http://localhost:3001`

#### 2. Configurar el Frontend

```bash
# Clonar este repositorio
git clone https://github.com/nisiara/dfe3_exp1_s2.git
cd dfe3_exp1_s2

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```
El frontend estará disponible en `http://localhost:5173`

## 📋 Flujo de Navegación

| Ruta | Descripción | Protección |
|------|-------------|-----------|
| `/` | Redirección a registro | No |
| `/register` | Formulario de registro | No |
| `/login` | Formulario de inicio de sesión | No |
| `/home` | Página principal de usuario | ✅ Requiere autenticación |
| `/*` | Página no encontrada (404) | No |

## 🔐 Flujo de Autenticación

1. **Registro**: Usuario crea una nueva cuenta con email y contraseña
2. **Validación**: Backend valida datos y almacena usuario
3. **Login**: Usuario ingresa credenciales
4. **Token JWT**: Backend genera token y lo envía al cliente
5. **Almacenamiento**: Token se guarda en `localStorage`
6. **Protección**: Rutas protegidas verifican token antes de permitir acceso
7. **Sesión**: Al recargar, se recupera automáticamente del `localStorage`

## 🚀 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Vista previa de compilación
npm run lint     # Verifica código con ESLint
```

## 📦 Dependencias Principales

- `react@^19.2.0` - Librería UI
- `react-dom@^19.2.0` - Manipulación del DOM
- `react-router@^7.12.0` - Enrutamiento

## 🔗 Recursos Relacionados

- [Backend - Authentication Service](https://github.com/nisiara/authentication-backend)
- [Documentación de React](https://react.dev)
- [Documentación de React Router](https://reactrouter.com)
- [Documentación de Vite](https://vite.dev)

## 📝 Notas Importantes

- El token JWT se almacena en `localStorage` y se incluye en el header `Authorization` de las solicitudes
- Las rutas protegidas redirigen a `/register` si el usuario no está autenticado
- Al desloguearse, se elimina el token de `localStorage` y se redirige a `/register`
- El contexto de autenticación mantiene el estado global de la aplicación










