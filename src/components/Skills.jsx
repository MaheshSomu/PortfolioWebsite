import { motion } from 'framer-motion'
import {
  Code2,
  Brackets,
  FileCode,
  Globe,
  Wind,
  Sparkles,
  GitBranch,
  Server,
  Database,
} from 'lucide-react'
import { GitHubIcon, FigmaIcon } from './SocialIcons'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { staggerContainer, staggerItem } from '../utils/motion'
import SectionHeading from './SectionHeading'

const skillIcons = {
  react: Code2,
  javascript: Brackets,
  typescript: FileCode,
  html: Globe,
  css: Sparkles,
  tailwind: Wind,
  motion: Sparkles,
  git: GitBranch,
  github: GitHubIcon,
  api: Globe,
  node: Server,
  mongodb: Database,
  sql: Database,
}

export default function Skills() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeading 
          label="MY TOOLBOX"
          title="Technologies I use." 
          description="A practical stack for building full-stack applications, from responsive interfaces and REST APIs to backend services and cloud deployment."
        />

        <motion.ul
          {...staggerContainer(reducedMotion, 0.04)}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
          role="list"
        >
          {portfolio.skills.map((skill) => {
            const IconComponent =
              skill.icon === 'github'
                ? GitHubIcon
                : skill.icon === 'figma'
                  ? FigmaIcon
                  : skillIcons[skill.icon] || Code2
            return (
              <motion.li
                key={skill.name}
                {...staggerItem(reducedMotion)}
                className="group h-full"
              >
                <div className={`glass flex h-full flex-col items-start gap-4 rounded-2xl px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] ${skill.color || ''}`}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-text-secondary transition-colors group-hover:bg-white/10 ${skill.iconColor || 'group-hover:text-text-primary'}`}>
                    <IconComponent size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {skill.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-text-secondary opacity-80">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>

        {portfolio.tools && portfolio.tools.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <h3 className="mb-6 text-sm font-semibold tracking-widest text-text-muted uppercase">
              Tools & Workflow
            </h3>
            <motion.ul
              {...staggerContainer(reducedMotion, 0.04)}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 lg:gap-4"
              role="list"
            >
              {portfolio.tools.map((tool) => {
                const ToolIconComponent =
                  tool.icon === 'github'
                    ? GitHubIcon
                    : tool.icon === 'figma'
                      ? FigmaIcon
                      : skillIcons[tool.icon] || Code2
                return (
                  <motion.li
                    key={tool.name}
                    {...staggerItem(reducedMotion)}
                    className="group"
                  >
                    <div className="glass flex items-center gap-3 rounded-xl p-3.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-text-secondary transition-colors group-hover:bg-white/10 group-hover:text-text-primary">
                        <ToolIconComponent size={16} />
                      </span>
                      <span className="text-xs font-medium text-text-primary sm:text-sm truncate">
                        {tool.name}
                      </span>
                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>
        )}

        <motion.p
          {...staggerItem(reducedMotion)}
          className="mt-16 text-center text-sm font-medium text-text-muted"
        >
          Always learning. Always building. Always improving.
        </motion.p>
      </div>
    </section>
  )
}
