import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile, socials } from '../data/content'
import { Icon } from './icons'
import { Section } from './Section'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const emptyForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [sent, setSent] = useState(false)

  const update = (key: keyof FormState) => (value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
    setSent(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = form.subject.trim() || 'Portfolio enquiry'
    const body = [
      `Hi ${profile.name.split(' ')[0]},`,
      '',
      form.message.trim(),
      '',
      `— ${form.name} (${form.email})`,
    ].join('\n')

    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = href
    setSent(true)
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      lead="Got a project, an internship, or a course that needs a full-stack teammate? Send a message and I'll reply within a day or two."
    >
      <div className="contact-grid">
        <aside className="contact-aside">
          <div className="contact-card">
            <h3>Contact details</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <Icon name="mail" size={16} />
                </span>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="map-pin" size={16} />
                </span>
                <div>
                  <span className="contact-label">Location</span>
                  <span>{profile.location}</span>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="calendar" size={16} />
                </span>
                <div>
                  <span className="contact-label">Availability</span>
                  <span>{profile.available}</span>
                </div>
              </li>
            </ul>

            <ul className="social-row social-row-contact">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    className="social-btn"
                    href={social.href}
                    target={social.label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field">
              <span className="field-label">Name</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name')(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label className="field">
              <span className="field-label">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email')(e.target.value)}
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="field">
            <span className="field-label">Subject</span>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => update('subject')(e.target.value)}
              placeholder="What is this about?"
            />
          </label>

          <label className="field">
            <span className="field-label">Message</span>
            <textarea
              rows={5}
              required
              value={form.message}
              onChange={(e) => update('message')(e.target.value)}
              placeholder="Tell me a little about the project..."
            />
          </label>

          <div className="form-foot">
            <button className="btn btn-primary" type="submit">
              Send message
              <Icon name="send" size={16} />
            </button>
            {sent ? (
              <span className="form-note">
                <Icon name="check" size={15} />
                Your email client should be open — hit send there.
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </Section>
  )
}
