---
name: frontend-design
description: Directrices, estándares de diseño visual y mejores prácticas para el desarrollo de interfaces y componentes frontend en el proyecto.
---

# Frontend Design Skill

Esta skill define las pautas de diseño, estilos y componentes de interfaz de usuario (UI/UX) para este proyecto (React + Vite).

---

## 1. Principios de Diseño
- **Consistencia visual:** Mantener una paleta de colores coherente, espaciados sistemáticos (escala de 4px / 8px) y tipografía estandarizada.
- **Responsive-first:** Toda interfaz debe ser completamente funcional y estética tanto en dispositivos móviles como en pantallas de escritorio.
- **Accesibilidad (a11y):**
  - Contraste adecuado entre texto y fondo.
  - Uso correcto de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<button>`).
  - Atributos `aria-*` y `alt` en imágenes cuando corresponda.
  - Navegación clara por teclado (estados `:focus` y `:focus-visible`).

---

## 2. Estructura de Componentes en React
- Crear componentes modulares, pequeños y reutilizables en `src/components/`.
- Separar la lógica de negocio de la presentación visual siempre que sea posible.
- Usar nombres descriptivos en PascalCase (ej. `UserProfileCard.jsx`, `Navbar.jsx`).

---

## 3. Estilos y CSS
- Evitar estilos inline repetitivos; preferir clases CSS reutilizables o módulos CSS.
- Definir variables CSS (`:root`) para temas (colores primarios, secundarios, bordes, sombras, etc.).
- Transiciones y microinteracciones suaves (`transition: all 0.2s ease`).
