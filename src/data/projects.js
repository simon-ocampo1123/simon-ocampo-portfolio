import colsubsidioImage from '../assets/images/colsubsidio.png'
import georreferenciacionImage from '../assets/images/georreferenciacion.png'
import portfolioImage from '../assets/images/portfolio.png'

export const projectsData = [
  {
    id: 'accesibilidad-colsubsidio',
    title: 'Accesibilidad Colsubsidio.com',
    description:
      'Participé en mejoras de accesibilidad web para contribuir al cumplimiento de los criterios WCAG 2.1 AA en componentes y experiencias del portal de Colsubsidio.',
    image: colsubsidioImage,
    technologies: [
      'Drupal',
      'React',
      'CSS',
      'Next.js',
      'Accesibilidad web',
      'WCAG 2.1 AA',
      'NVDA',
    ],
    liveUrl: null,
    repositoryUrl: null,
    availability: 'En producción',
    contribution:
      'Ajustes de contraste, navegación por teclado, roles semánticos y corrección de incidencias WCAG 2.1 AA.',
  },
  {
    id: 'georreferenciacion-salud-colsubsidio',
    title: 'Georreferenciación de establecimientos',
    description:
      'Desarrollo de un componente de georreferenciación para consultar establecimientos farmacéuticos, con filtros por departamento y ciudad y visualización de ubicaciones en mapa dentro del portal de Salud Colsubsidio.',
    image: georreferenciacionImage,
    technologies: ['Drupal', 'React', 'CSS', 'Next.js'],
    liveUrl: null,
    repositoryUrl: null,
    availability: 'Portal Salud Colsubsidio',
    contribution:
      'Desarrollo del componente interactivo de consulta georreferenciada con filtrado dinámico y consumo de endpoints JSON:API.',
  },
  {
    id: 'portafolio-web-personal',
    title: 'Portafolio Web Personal',
    description:
      'Sitio web interactivo desarrollado con arquitectura modular, diseño accesible, animaciones fluidas y optimización para rendimiento y dispositivos móviles.',
    image: portfolioImage,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Motion', 'Accesibilidad web'],
    liveUrl: null,
    repositoryUrl: 'https://github.com/simon-ocampo1123/simon-ocampo-portfolio',
    availability: 'Código abierto',
    contribution:
      'Diseño e implementación integral de la interfaz, arquitectura de componentes, scroll spy y adaptación responsive completa.',
  },
]
