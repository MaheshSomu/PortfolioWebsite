import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { portfolio } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUp } from '../utils/motion'
import SectionHeading from './SectionHeading'
import Button from './Button'

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 10)
    errors.message = 'Message should be at least 10 characters'
  return errors
}

export default function Contact() {
  const reducedMotion = useReducedMotion()
  const formRef = useRef()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    setErrors({})

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeading
          title="Let's build something great."
          description="Have a placement opportunity, project or conversation in mind? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.div {...fadeUp(reducedMotion)} className="lg:col-span-2">
            <p className="mb-8 text-sm text-text-secondary">
              Prefer reaching out directly? Connect via any of these channels.
            </p>
            <ul className="space-y-4">
              {[
                {
                  label: 'Email',
                  value: portfolio.email,
                  href: `mailto:${portfolio.email}`,
                  icon: Mail,
                },
                {
                  label: 'LinkedIn',
                  value: 'LinkedIn Profile',
                  href: portfolio.linkedin,
                  icon: LinkedInIcon,
                },
                {
                  label: 'GitHub',
                  value: 'GitHub Profile',
                  href: portfolio.github,
                  icon: GitHubIcon,
                },
              ].map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-border-hover hover:bg-white/[0.03]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-text-secondary group-hover:text-text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-text-muted">{label}</p>
                      <p className="text-sm font-medium text-text-primary">{value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(reducedMotion, 0.1)}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div
                className="glass flex flex-col items-center justify-center rounded-2xl p-10 text-center"
                role="status"
              >
                <CheckCircle
                  size={40}
                  className="text-emerald-400"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  Thanks! Your message has been sent successfully.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-text-secondary">
                  I will get back to you as soon as possible.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass space-y-5 rounded-2xl p-6 sm:p-8 relative"
                noValidate
              >
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-400 border border-red-500/20">
                    <AlertCircle size={18} />
                    <p>Something went wrong. Please try again.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-text-secondary">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-white/30 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/10 focus:outline-none disabled:opacity-50"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-text-secondary">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-white/30 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/10 focus:outline-none disabled:opacity-50"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-white/30 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/10 focus:outline-none disabled:opacity-50"
                    placeholder="Tell me about the opportunity..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
