import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp, staggerContainer, staggerItem } from '../utils/motion'
import SectionHeading from './SectionHeading'

function ProfileIcon({ name }) {
  if (name === 'GitHub') return <GitHubIcon size={22} />
  if (name === 'LeetCode')
    return (
      <span className="text-sm font-bold text-text-primary" aria-hidden="true">
        LC
      </span>
    )
  return (
    <span className="text-sm font-bold text-text-primary" aria-hidden="true">
      HR
    </span>
  )
}

export default function CodingProfiles() {
  const reducedMotion = useReducedMotion()
  const { codingProfiles } = portfolio

  return (
    <section
      id="coding"
      className="section-padding"
      aria-labelledby="coding-heading"
    >
      <div className="section-container">
        <SectionHeading
          title={codingProfiles.heading}
          description={codingProfiles.description}
        />

        <motion.ul
          {...staggerContainer(reducedMotion, 0.08)}
          className="grid gap-4 md:grid-cols-3"
          role="list"
        >
          {codingProfiles.profiles.map((profile) => (
            <motion.li key={profile.name} {...staggerItem(reducedMotion)}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass glass-hover flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-text-secondary transition-colors group-hover:text-text-primary">
                    <ProfileIcon name={profile.name} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text-primary">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{profile.username}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {profile.description}
                </p>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div {...fadeUp(reducedMotion, 0.2)} className="mt-8 text-center">
          <a
            href={portfolio.githubContributions}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            View GitHub contributions
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
