import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp } from '../utils/motion'
import SectionHeading from './SectionHeading'
import Button from './Button'

export default function Experience() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        <SectionHeading 
          title="Experience & Education." 
          description="My academic background and professional internship experience in full-stack software development."
        />

        <div className="relative ml-3 border-l border-white/10 pl-6 sm:ml-6 sm:pl-10 space-y-8 sm:space-y-10">
          {portfolio.experience.map((item, index) => (
            <motion.article
              key={item.id}
              {...fadeUp(reducedMotion, index * 0.08)}
              className="group relative"
            >
              {/* Timeline Dot */}
              <span
                className="absolute -left-[calc(1.5rem+7px)] sm:-left-[calc(2.5rem+7px)] top-6 h-3.5 w-3.5 rounded-full border-2 border-surface bg-text-muted transition-all duration-300 group-hover:scale-125 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                aria-hidden="true"
              />

              {/* Timeline Card */}
              <div className="glass flex flex-col rounded-2xl border border-border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
                    {item.number} · {item.date}
                  </span>
                  {item.assignment && (
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs text-text-secondary">
                      {item.assignment}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-semibold text-text-primary sm:text-xl transition-colors group-hover:text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {item.organization}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2" aria-label="Tags">
                    {item.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-white/[0.02] px-2.5 py-0.5 text-xs text-text-muted transition-colors group-hover:border-white/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {item.certificate && (
                    <Button
                      href={item.certificate}
                      external
                      variant="ghost"
                      className="!rounded-xl !px-3 !py-1.5 text-xs"
                    >
                      <Award size={14} aria-hidden="true" />
                      View Certificate
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
