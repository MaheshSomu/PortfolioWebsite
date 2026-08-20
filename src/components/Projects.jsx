import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { staggerContainer, staggerItem } from '../utils/motion'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeading title="Things I've built." />

        <motion.div
          {...staggerContainer(reducedMotion, 0.08)}
          className="grid gap-6 md:grid-cols-2"
        >
          {portfolio.projects.map((project) => (
            <motion.div key={project.id} {...staggerItem(reducedMotion)}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
