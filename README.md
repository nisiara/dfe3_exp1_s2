# Aplicación Autententicación - DFE3 Exp1 S1
Plataforma que simula una página web de viajes exclusivos para probar autenticación de usuario.

## 🎯 Características

- **Registro de Usuarios**: Registro seguro con validación de correo electrónico
- **Verificación de Código**: Sistema de verificación por código enviado al correo
- **Página de Inicio**: Dashboard para usuarios autenticados
- **Redirección Automática**: Redireccionamiento de rutas

## 🛠️ Tecnologías

- **Frontend**: React 18 + Vite
- **Enrutamiento**: React Router
- **Estilos**: CSS personalizado
- **API**: ReqRes

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas de la aplicación
│   ├── register/       # Página de registro
│   ├── verification/   # Página de verificación de código
│   ├── login/          # Página de login
│   ├── home/           # Página principal
│   └── not-found/      # Página 404
├── routes/
│   └── RoutesApp.jsx   # Configuración de rutas
├── services/
│   ├── authentication.js  # Servicios de autenticación
│   └── verification.js    # Servicios de verificación
├── assets/             # Imágenes y recursos
├── index.css           # Estilos globales
└── main.jsx            # Punto de entrada
```

## 🚀 Instalación

### Requisitos previos
- Node.js >= 14
- npm

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/nisiara/dfe3_exp1_s1.git
cd dfe3_exp1_s1
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📝 Flujo de Navegación

1. **Raíz (/)** → Redirige automáticamente a `/register`
2. **Registro (/register)** → Usuario ingresa email
3. **Verificación (/verification)** → Usuario verifica código recibido
4. **Home (/home)** → Dashboard del usuario autenticado
5. **Login (/login)** → Acceso para usuarios existentes
6. **Not Found (*)** → Página para rutas no encontradas

## 🔐 Autenticación

La aplicación utiliza **Reqres** para gestionar:
- Autenticación segura
- Gestión de sesiones
- Tokens de usuario






