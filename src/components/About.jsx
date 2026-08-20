import { motion } from 'framer-motion'
import {
  Layers,
  Accessibility,
  Palette,
  Gauge,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp, staggerContainer, staggerItem } from '../utils/motion'
import SectionHeading from './SectionHeading'

const exploreIcons = {
  layers: Layers,
  accessibility: Accessibility,
  palette: Palette,
  gauge: Gauge,
}

export default function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeading title={portfolio.about.heading} />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeUp(reducedMotion)} className="space-y-5">
            {portfolio.about.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-text-secondary sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(reducedMotion, 0.1)}
            className="glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
          >
            <p className="mb-6 text-sm font-medium tracking-widest text-text-muted uppercase">
              Currently exploring
            </p>
            <motion.ul
              {...staggerContainer(reducedMotion)}
              className="grid gap-3 sm:grid-cols-2"
            >
              {portfolio.about.exploring.map((item) => {
                const Icon = exploreIcons[item.icon]
                return (
                  <motion.li
                    key={item.label}
                    {...staggerItem(reducedMotion)}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-text-secondary transition-colors group-hover:bg-white/10 group-hover:text-text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {item.label}
                    </span>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
