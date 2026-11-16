import { experiences } from '../data/content'
import { Icon } from './icons'
import { Section } from './Section'

const kindLabel: Record<string, string> = {
  internship: 'Internship',
  role: 'Leadership',
  project: 'Project',
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I have worked and built"
      lead="Internships, campus roles, and team projects — each one taught me to ship something real and explain it clearly."
    >
      <ol className="timeline">
        {experiences.map((item) => (
          <li className="timeline-item" key={`${item.role}-${item.period}`}>
            <div className="timeline-marker">
              <span className="timeline-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-top">
                <span className="tag tag-accent">
                  <Icon name={item.kind === 'project' ? 'code' : 'building'} size={13} />
                  {kindLabel[item.kind]}
                </span>
                <span className="timeline-period">{item.period}</span>
              </div>

              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-org">
                {item.org} <span className="dot-sep">·</span> {item.location}
              </p>

              <ul className="timeline-points">
                {item.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="chip-list chip-list-sm">
                {item.stack.map((tech) => (
                  <li className="chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
