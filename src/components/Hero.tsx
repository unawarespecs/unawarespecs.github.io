import { profile, socials, stats } from '../data/content'
import { Icon } from './icons'

const codeLines = [
  { tokens: [{ t: 'const', c: 'kw' }, { t: ' developer', c: 'var' }, { t: ' =', c: 'op' }, { t: ' {', c: 'op' }] },
  {
    tokens: [
      { t: '    stack', c: 'key' },
      { t: ': ', c: 'op' },
      { t: "['TypeScript', 'React', 'Node']", c: 'str' },
      { t: ',', c: 'op' },
    ],
  },
  { tokens: [{ t: '    focus', c: 'key' }, { t: ': ', c: 'op' }, { t: "'full-stack web apps'", c: 'str' }, { t: ',', c: 'op' }] },
  { tokens: [{ t: '    status', c: 'key' }, { t: ': ', c: 'op' }, { t: "'ready for internships/OJT'", c: 'str' }] },
  { tokens: [{ t: '}', c: 'op' }] },
]

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="glow glow-a" />
        <span className="glow glow-b" />
        <span className="grid-lines" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="badge">
            <span className="pulse-dot" />
            {profile.available}
          </span>

          <h1 className="hero-title">
            Hi, I&rsquo;m <span className="text-accent">{profile.name}</span>
            <span className="hero-role">{profile.role}</span>
          </h1>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View my projects
              <Icon name="arrow-up-right" size={16} />
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in touch
            </a>
          </div>

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

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-bar">
              <span className="dot dot-r" />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
              <span className="code-file">developer.ts</span>
            </div>
            <pre className="code-body" aria-hidden="true">
              <code>
                {codeLines.map((line, i) => (
                  <span className="code-line" key={i}>
                    {line.tokens.map((token, j) => (
                      <span className={`tok tok-${token.c}`} key={j}>
                        {token.t}
                      </span>
                    ))}
                  </span>
                ))}
              </code>
            </pre>
            <div className="code-card-foot">
              <span className="foot-label">Currently</span>
              <span className="foot-value">{profile.degree}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="stat-row">
          {stats.map((stat) => (
            <li className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        className="scroll-hint"
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to about section"
      >
        <Icon name="arrow-down" size={18} />
      </a>
    </section>
  )
}
