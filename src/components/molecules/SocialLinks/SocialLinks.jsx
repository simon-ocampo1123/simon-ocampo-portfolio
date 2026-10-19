import { Icon } from '../../atoms/Icon/Icon'

export function SocialLinks({ links = [], className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const isEmail = link.name.toLowerCase() === 'email'
        const label = isEmail
          ? 'Enviar correo electrónico a Simón Ocampo'
          : `Visitar perfil de Simón Ocampo en ${link.name} (se abre en nueva pestaña)`

        return (
          <a
            key={link.name}
            href={link.url}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Icon name={link.icon} size={18} aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
