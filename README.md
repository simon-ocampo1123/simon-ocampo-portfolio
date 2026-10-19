# Portafolio Personal - Simón Ocampo

Portafolio profesional desarrollado con **React**, **Vite**, **Tailwind CSS 4**, **Atomic Design** y preparado para animaciones con **Motion**.

---

## 🛠️ Stack Tecnológico

- **Framework**: React 19 + Vite 8
- **Estilos**: Tailwind CSS 4 (usando `@tailwindcss/vite`)
- **Iconografía**: Lucide React
- **Animaciones**: Motion (`motion`)
- **Despliegue**: Optimizado para Netlify

---

## 🏗️ Arquitectura: Atomic Design

La interfaz está dividida en niveles de abstracción para garantizar máxima reusabilidad y separación de responsabilidades:

```text
src/
├── assets/                  # Recursos estáticos (images/, icons/, fonts/)
├── components/
│   ├── atoms/              # Elementos visuales mínimos e independientes (Button, Badge, Icon)
│   ├── molecules/          # Combinaciones de átomos con propósito concreto (SocialLinks, TechnologyBadge, SectionHeading)
│   ├── organisms/          # Secciones completas de la interfaz (Navbar, Hero, FeaturedProjects, ExperienceTimeline, etc.)
│   └── templates/          # Estructuras de página y layout maestro (PortfolioLayout)
├── data/                   # Contenido desacoplado de la vista (navigation, technologies, projects, etc.)
├── styles/                 # Estilos globales y tokens base (index.css)
├── App.jsx                 # Ensamblador principal de la aplicación
└── main.jsx                # Punto de entrada de React y Vite
```

### 1. ¿Qué va en cada nivel?

* **`atoms/`**: Elementos atómicos sin dependencia de datos de negocio.
  - Ejemplos: `Button/Button.jsx`, `Badge/Badge.jsx`, `Icon/Icon.jsx`.
  - Reciben únicamente props genéricas (`variant`, `size`, `onClick`, `href`, `children`).

* **`molecules/`**: Unión de 2 o más átomos para formar un componente funcional simple.
  - Ejemplos: `SocialLinks/SocialLinks.jsx`, `TechnologyBadge/TechnologyBadge.jsx`, `SectionHeading/SectionHeading.jsx`.

* **`organisms/`**: Bloques y secciones completas del portafolio.
  - Ejemplos: `Navbar/`, `Hero/`, `FeaturedProjects/`, `ExperienceTimeline/`, `Education/`, `Languages/`, `ContactSection/`, `Footer/`.
  - Consumen átomos, moléculas y datos de `src/data/`.

* **`templates/`**: Estructuras globales de distribución y maquetación.
  - `PortfolioLayout/PortfolioLayout.jsx` define el contenedor maestro con el Navbar fijo, el fondo ambiental, el contenedor principal `<main>` y el Footer.

* **`data/`**: Centralización de textos, enlaces y configuraciones.
  - Modificar un proyecto, experiencia o tecnología no requiere alterar código de maquetación JSX.

---

## ➕ ¿Cómo agregar una nueva sección?

1. **Definir los datos** en `src/data/` (por ejemplo, `certificaciones.js` o actualizar `projects.js`).
2. **Crear el organismo** en `src/components/organisms/NombreSeccion/NombreSeccion.jsx` componiendo átomos y moléculas.
3. **Incorporar la sección** en `App.jsx` dentro de `<PortfolioLayout>`.
4. Si la sección requiere navegación, añadir su enlace en `src/data/navigation.js`.

---

## 🚀 Comandos del Proyecto

### 1. Servidor de desarrollo
Inicia Vite en el puerto `3000` con `strictPort: true`:
```bash
npm run dev
```
Acceso local: [http://localhost:3000](http://localhost:3000)

### 2. Compilar para producción
Genera el bundle optimizado en la carpeta `dist/`:
```bash
npm run build
```

### 3. Previsualizar compilación de producción
```bash
npm run preview
```

### 4. Despliegue en Netlify
El proyecto está listo para ser conectado directamente a Netlify con los siguientes parámetros:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
