import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { hoverLift } from '../utils/motion'
import Button from './Button'

export default function ProjectCard({ project }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      {...hoverLift(reducedMotion)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-card transition-all duration-300 hover:border-border-hover hover:shadow-xl hover:shadow-black/20"
    >
      <Link
        to={`/projects/${project.id}`}
        className="relative block aspect-[2/1] sm:aspect-[21/9] overflow-hidden bg-surface-elevated"
        aria-label={`View details for ${project.title}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-semibold text-white/80 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105"
            style={{ boxShadow: `0 0 60px ${project.accent}22` }}
            aria-hidden="true"
          >
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 left-4 text-xs font-medium tracking-widest text-text-muted">
          {project.number}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
          {project.category}
        </p>
        <Link to={`/projects/${project.id}`} className="group/title mt-2">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-text-primary sm:text-xl">
            {project.title}
            <ArrowUpRight
              size={18}
              className="text-text-muted transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover:text-text-primary"
              aria-hidden="true"
            />
          </h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            href={project.github}
            external
            variant="ghost"
            className="!rounded-xl !px-3 !py-2 text-xs"
          >
            <GitHubIcon size={14} />
            View on GitHub
          </Button>
          {project.liveDemo && (
            <Button
              href={project.liveDemo}
              external
              variant="ghost"
              className="!rounded-xl !px-3 !py-2 text-xs"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
