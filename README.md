# 🛍️ SENCILLE STORE - E-commerce React

SENCILLE STORE es una Single Page Application (SPA) de e-commerce desarrollada con **React**, que permite explorar productos por categorías, ver detalles, gestionar un carrito de compras, y realizar una orden de compra conectada a **Firebase**.

## 🚀 Tecnologías utilizadas

- React JS
- React Router
- Context API
- Firebase Firestore
- EmailJS (formulario de contacto)
- Bootstrap & CSS Modules
- Vite

## 📦 Funcionalidades

- Visualización de productos desde una base de datos en Firebase.
- Filtro dinámico por categorías (`/category/:categoryId`).
- Detalle individual de cada producto (`/item/:itemId`).
- Sistema de carrito con contador, agregado y eliminación de productos.
- Checkout con formulario y almacenamiento de la orden en Firebase.
- Envío de formulario de contacto vía EmailJS.
- Footer y navegación responsiva.
- Renderizado condicional para stock, errores y cargas.

🧠 Firebase
Base de datos Firestore con productos y órdenes.

Al realizar una compra, se genera una orden con los detalles y un ID visible para el usuario.

Firebase Config se encuentra en src/firebase/firebaseConfig.js.

📫 Contacto
Formulario de contacto disponible en /contact, con envío por EmailJS.

👩‍💻 Autora
Proyecto desarrollado por Sofía Bresso como entrega final del curso de React JS en Coderhouse.

📌 Este proyecto fue realizado con fines educativos y como práctica integral del desarrollo de SPAs con React y Firebase.