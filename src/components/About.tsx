import { principles, profile, skillGroups } from '../data/content'
import { Icon } from './icons'
import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building things that actually work"
      lead={profile.summary}
    >
      <div className="about-grid">
        <div className="about-card">
          <div className="about-head">
            <span className="about-avatar">{profile.initials}</span>
            <div>
              <h3>{profile.name}</h3>
              <p className="about-meta">
                {profile.degree} · {profile.university}
              </p>
              <p className="about-meta about-location">
                <Icon name="map-pin" size={14} />
                {profile.location}
              </p>
            </div>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <span className="skill-group-title">{group.title}</span>
                <ul className="chip-list">
                  {group.items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <ul className="principle-list">
          {principles.map((item, index) => (
            <li className="principle" key={item.title}>
              <span className="principle-index">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
