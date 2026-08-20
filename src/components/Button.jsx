import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const variants = {
  primary: 'bg-surface-elevated text-text-primary ring-1 ring-inset ring-white/10 hover:bg-white/5 hover:ring-white/20 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]',
  secondary:
    'bg-white/[0.02] text-text-primary ring-1 ring-inset ring-border hover:bg-white/[0.04] hover:ring-border-hover',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  download,
  external,
  ...props
}) {
  const reducedMotion = useReducedMotion()
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 ${variants[variant]} ${className}`

  const motionProps = reducedMotion
    ? {}
    : { whileHover: { y: -2 }, whileTap: { y: 0 }, transition: { duration: 0.2, ease: 'easeOut' } }

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClass}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}
