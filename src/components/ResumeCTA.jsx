import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp } from '../utils/motion'
import Button from './Button'

export default function ResumeCTA() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="resume" className="section-padding" aria-labelledby="resume-heading">
      <div className="section-container">
        <motion.div
          {...fadeUp(reducedMotion)}
          className="relative overflow-hidden rounded-3xl border border-border glass p-8 text-center sm:p-12 lg:p-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
            aria-hidden="true"
          />
          <p className="text-sm font-medium tracking-widest text-text-muted uppercase">
            Want to know more?
          </p>
          <h2
            id="resume-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl lg:text-4xl"
          >
            Take a look at my resume.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary sm:text-base">
            A concise overview of my skills, projects and experience — ready for
            recruiters and hiring managers.
          </p>
          <div className="mt-8">
            {/* INSTRUCTION: Place your actual resume file at public/resume.pdf */}
            <Button href={portfolio.resume} download variant="primary">
              <Download size={16} aria-hidden="true" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
