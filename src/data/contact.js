import { socialLinks } from './navigation'

const linkedInSocial = socialLinks.find((item) => item.name.toLowerCase() === 'linkedin')

export const contactData = {
  badge: {
    label: 'CONTACTO',
  },
  title: {
    main: '¿Hacemos algo',
    highlight: 'interesante?',
  },
  description:
    'Me gusta convertir ideas en soluciones reales, desarrollar aplicaciones web y encontrar nuevas formas de hacer las cosas con tecnología. Si buscas a alguien con ganas de aportar, asumir retos y seguir creciendo, me encantaría conversar contigo.',
  email: 'ocamposimon108@gmail.com',
  linkedinUrl: linkedInSocial ? linkedInSocial.url : 'https://www.linkedin.com/in/simon-ocampo-113924259/',
  actions: {
    email: 'Hablemos por correo',
    linkedin: 'LinkedIn',
  },
  codeSnippet: {
    variable: 'ideas',
    items: ['Desarrollo Web', 'Automatización', 'Inteligencia Artificial'],
  },
  annotation: {
    line1: 'Buenas ideas',
    line2: 'Buena tecnología',
    line3: 'Grandes proyectos',
  },
}
