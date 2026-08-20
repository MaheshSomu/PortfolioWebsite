import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Wrench,
  Layers,
  Code2,
  UserCheck,
} from 'lucide-react'
import { getProjectById, portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp } from '../utils/motion'
import Button from '../components/Button'
import { GitHubIcon } from '../components/SocialIcons'
import Footer from '../components/Footer'

const detailSections = [
  { key: 'overview', label: 'Overview', icon: BookOpen },
  { key: 'problem', label: 'Problem & Purpose', icon: Lightbulb },
  { key: 'solution', label: 'Solution', icon: Wrench },
  { key: 'keyFeatures', label: 'Key Features', icon: Layers, isList: true },
  { key: 'implementation', label: 'Technical Implementation', icon: Code2 },
  { key: 'whatIWorkedOn', label: 'What I Worked On', icon: UserCheck },
]

export default function ProjectDetails() {
  const { id } = useParams()
  const project = getProjectById(id)
  const reducedMotion = useReducedMotion()

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="section-container flex items-center justify-between py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </Link>
          <span className="text-sm text-text-muted">{portfolio.name}</span>
        </div>
      </header>

      <motion.main
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="section-container section-padding"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp(reducedMotion)}>
            <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
              {project.number} · {project.category}
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={project.github} external variant="primary">
                <GitHubIcon size={16} />
                View on GitHub
              </Button>
              {project.liveDemo && (
                <Button href={project.liveDemo} external variant="secondary">
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(reducedMotion, 0.1)}
            className={`mt-12 aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.gradient}`}
          >
            <div className="flex h-full items-center justify-center">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl font-semibold text-white/80 backdrop-blur-sm"
                style={{ boxShadow: `0 0 80px ${project.accent}33` }}
                aria-hidden="true"
              >
                {project.title.charAt(0)}
              </div>
            </div>
          </motion.div>

          <div className="mt-16 space-y-12">
            {detailSections.map((section, index) => {
              const Icon = section.icon
              const content = project[section.key]

              if (!content) return null

              return (
                <motion.section
                  key={section.key}
                  {...fadeUp(reducedMotion, index * 0.05)}
                  aria-labelledby={`${section.key}-heading`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-text-secondary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h2
                      id={`${section.key}-heading`}
                      className="text-lg font-semibold text-text-primary sm:text-xl"
                    >
                      {section.label}
                    </h2>
                  </div>

                  {section.isList ? (
                    <ul className="ml-12 list-disc space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="ml-12 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {content}
                    </p>
                  )}
                </motion.section>
              )
            })}

            <motion.section {...fadeUp(reducedMotion, 0.3)}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-text-secondary">
                  <Code2 size={18} aria-hidden="true" />
                </span>
                <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                  Technology Stack
                </h2>
              </div>
              <ul className="ml-12 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-sm text-text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
