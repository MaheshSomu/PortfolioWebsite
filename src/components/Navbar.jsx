import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Button from './Button'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollPosition(40)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={reducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`section-container flex items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'border-white/5 bg-surface/70 px-4 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:px-6'
              : 'border-transparent bg-transparent px-0 py-0'
          }`}
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="text-sm font-semibold tracking-tight text-text-primary sm:text-base"
          >
            {portfolio.name.split(' ')[0]}
            <span className="text-text-muted">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {portfolio.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="group relative py-1 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-white/60 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              variant="primary"
              className="!px-4 !py-2"
            >
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-primary md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={20} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={reducedMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reducedMotion ? undefined : { x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-surface-elevated p-6 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-text-primary">
                  {portfolio.name}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-1">
                {portfolio.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reducedMotion ? 0 : i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="block rounded-xl px-4 py-3 text-lg text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  variant="primary"
                  className="w-full"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
