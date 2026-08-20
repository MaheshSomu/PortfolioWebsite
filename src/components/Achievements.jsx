import { motion } from 'framer-motion'
import { Trophy, Code2, Star, Award, Medal } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { staggerContainer, staggerItem } from '../utils/motion'
import SectionHeading from './SectionHeading'

const achievementIcons = {
  trophy: Trophy,
  code: Code2,
  star: Star,
  certificate: Medal,
  award: Award,
}

export default function Achievements() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="achievements"
      className="section-padding border-y border-border/50"
      aria-labelledby="achievements-heading"
    >
      <div className="section-container">
        <SectionHeading
          title="Highlights."
          description="Replace these with your real achievements, certifications and coding milestones."
        />

        <motion.ul
          {...staggerContainer(reducedMotion, 0.06)}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
          role="list"
        >
          {portfolio.achievements.map((item) => {
            const Icon = achievementIcons[item.icon] || Award
            return (
              <motion.li
                key={item.label}
                {...staggerItem(reducedMotion)}
                className="glass glass-hover flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-text-secondary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-text-primary sm:text-sm">
                  {item.label}
                </span>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
