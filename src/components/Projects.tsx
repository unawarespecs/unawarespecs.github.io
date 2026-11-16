import { projects } from '../data/content'
import { Icon } from './icons'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Full-stack builds, start to finish"
      lead="Coursework, client briefs, and personal projects that I took from database schema to deployed, responsive interfaces."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-year">{project.year}</span>
              {project.featured ? (
                <span className="tag tag-accent">
                  <Icon name="sparkle" size={13} />
                  Featured
                </span>
              ) : null}
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-blurb">{project.blurb}</p>
            <p className="project-desc">{project.description}</p>

            <ul className="chip-list chip-list-sm">
              {project.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="project-links">
              {project.links.map((link) => (
                <a
                  className="project-link"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <Icon name="arrow-up-right" size={14} />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
