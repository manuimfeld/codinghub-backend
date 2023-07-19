# template_api

API Template: Un template de API con Node, Express, TypeScript, MongoDB y JWT para agilizar mi desarrollo de futuros proyectos.

Este repositorio contiene una plantilla lista para usar que te brinda la base necesaria para crear una API segura y escalable. Incluye la implementación de funcionalidades comunes, como la creación de cuentas, inicio de sesión y la protección de rutas mediante JSON Web Tokens (JWT). La estructura del proyecto está diseñada para ser fácilmente entendible y extensible.

# Características principales:

- Framework de desarrollo: Node.js con Express.
- Lenguaje de programación: TypeScript para una experiencia de desarrollo más robusta.
- Base de datos: MongoDB para el almacenamiento de datos.
- Autenticación y autorización: Integración de JSON Web Tokens (JWT) para la protección de rutas y la gestión de sesiones.
- Estructura modular: Organización del código en módulos para facilitar su mantenimiento y escalabilidad.
- Validación de datos: Utilización de bibliotecas de validación para garantizar la integridad de los datos recibidos.
- Documentación: Incluye documentación clara y concisa para guiar en el uso y la extensión de la API.

# ¿Qué incluye este template?

- Model "User" para crear/buscar/editar/eliminar usuarios en MongoDB:
  username, email, password, role, fecha en la que fue actualizado y creado.

- Autenticación JWT y encriptación de contraseñas con bcrypt para los usuarios en MongoDB

- Rutas "Auth y Articles"
  Auth donde se puede registrar un usuario y también inicar sesión
  Articles es solamente una prueba, para mostrar cómo protejer una ruta de manera un tanto genérica (si en el header no hay un token firmado por el backend, no se podrá acceder a Articles)

# Variables de entorno .env

- _PORT_: Puerto en el cual estará escuchando la API.

- _MONGODB_URI_: Conexión a la base de datos de MongoDB por SRV.
  //Ejemplo: mongodb+srv://nombre:contraseña@pruebas-db.4gggo5.mongodb.net/pruebas?retryWrites=true&w=majority

- _JWT_SECRET_: Llave secreta (secret key) del JWT (JSON Web Token). Es una cadena de caracteres que se va a utilizar para firmar y verificar los tokens.

# ❗ IMPORTANTE ❗

Esto solo es un template para ahorrar tiempo al crear futuras API CRUD, en las que necesite un sistema con autenticación.
