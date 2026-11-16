import { navItems, profile, socials } from '../data/content'
import { Icon } from './icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{profile.initials}</span>
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">{profile.role}</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="social-row">
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

      <div className="container footer-bottom">
        <span>
          © {year} {profile.name}. All rights reserved.
        </span>
        <span className="footer-built">Built with React, TypeScript &amp; Vite</span>
      </div>
    </footer>
  )
}
