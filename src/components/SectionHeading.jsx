import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp } from '../utils/motion'

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const reducedMotion = useReducedMotion()
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      {...fadeUp(reducedMotion)}
      className={`mb-12 max-w-2xl sm:mb-16 ${alignClass} ${className}`}
    >
      {label && (
        <p className="mb-3 text-sm font-medium tracking-widest text-text-muted uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
