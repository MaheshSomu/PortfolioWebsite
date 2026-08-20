import { Mail, ArrowUp } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Footer() {
  const reducedMotion = useReducedMotion()
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-text-secondary">
              © {year} {portfolio.name}
            </p>
            <p className="mt-1 text-xs text-text-muted">Built with React</p>
          </div>

          <div className="flex items-center gap-3">
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
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
