import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiDrupal,
  SiGit,
} from '@icons-pack/react-simple-icons'

import openaiLogo from '../../../assets/images/openai.png'
import expressLogo from '../../../assets/images/express.png'
import awsLogo from '../../../assets/images/aws-clean.png'
import mysqlLogo from '../../../assets/images/mysql.png'

function OpenaiIcon({ size = 38, className = '', ...props }) {
  return (
    <img
      src={openaiLogo}
      alt="OpenAI"
      width={size}
      height={size}
      className={`invert brightness-125 object-contain select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    />
  )
}

function ExpressIcon({ size = 38, className = '', ...props }) {
  return (
    <img
      src={expressLogo}
      alt="Express.js"
      width={size}
      height={size}
      className={`invert brightness-125 object-contain select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    />
  )
}

function AwsIcon({ size = 38, className = '', ...props }) {
  return (
    <img
      src={awsLogo}
      alt="AWS"
      width={size + 12}
      height={size}
      className={`object-contain select-none ${className}`}
      style={{ width: `${size + 12}px`, height: `${size}px` }}
      {...props}
    />
  )
}

function MysqlIcon({ size = 38, className = '', ...props }) {
  return (
    <img
      src={mysqlLogo}
      alt="MySQL"
      width={size}
      height={size}
      className={`object-contain select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    />
  )
}

const ICONS_MAP = {
  React: SiReact,
  Nextjs: SiNextdotjs,
  Nodejs: SiNodedotjs,
  Tailwindcss: SiTailwindcss,
  Express: ExpressIcon,
  Drupal: SiDrupal,
  Aws: AwsIcon,
  Openai: OpenaiIcon,
  Mysql: MysqlIcon,
  Git: SiGit,
}

/**
 * Átomo TechnologyIcon: Renderiza el logotipo oficial de marca con su color característico
 * y soporte para iconos vectoriales o imágenes transparentes de alta resolución.
 */
export function TechnologyIcon({ name, color, size = 38, className = '' }) {
  const IconComponent = ICONS_MAP[name]

  if (!IconComponent) {
    return <span className="font-bold text-xs">{name}</span>
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={`transition-transform duration-300 group-hover:scale-110 ${className}`}
    />
  )
}
