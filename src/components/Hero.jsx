import { motion } from 'framer-motion'
import { Mail, MapPin, Download, ArrowDown } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Button from './Button'

const container = (reducedMotion) =>
  reducedMotion
    ? {}
    : {
        initial: 'hidden',
        animate: 'visible',
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
        },
      }

const item = (reducedMotion) =>
  reducedMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          },
        },
      }

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const { hero } = portfolio
  const parts = hero.headline.split(hero.highlightWord)

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="section-container w-full">
        <motion.div {...container(reducedMotion)}>
          <motion.div
            {...item(reducedMotion)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-sm text-text-secondary shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </span>
            {portfolio.availability}
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-20 -inset-y-20 z-0 bg-white/5 opacity-0 blur-3xl transition-opacity duration-1000 hover:opacity-100" aria-hidden="true" />
            <motion.h1
              {...item(reducedMotion)}
              id="hero-heading"
              className="relative z-10 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {parts[0]}
              <span className="text-gradient-accent">{hero.highlightWord}</span>
              {parts[1]}
            </motion.h1>
          </div>

          <motion.p
            {...item(reducedMotion)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:mt-8 sm:text-lg"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            {...item(reducedMotion)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button href="#projects" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
            }}>
              View My Work
              <ArrowDown size={16} className="rotate-[-90deg]" aria-hidden="true" />
            </Button>
            <Button href={portfolio.resume} download variant="secondary">
              <Download size={16} aria-hidden="true" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            {...item(reducedMotion)}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { href: portfolio.github, icon: GitHubIcon, label: 'GitHub' },
              { href: portfolio.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
              { href: `mailto:${portfolio.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          <motion.div
            {...item(reducedMotion)}
            className="mt-12 flex flex-wrap gap-2 sm:mt-16"
          >
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-text-muted sm:text-sm"
              >
                {tag === portfolio.location && (
                  <MapPin size={12} className="text-text-muted" aria-hidden="true" />
                )}
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
