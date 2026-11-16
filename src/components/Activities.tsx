import { certifications, seminars } from '../data/content'
import { Icon } from './icons'
import { Section } from './Section'

export function Activities() {
  return (
    <Section
      id="activities"
      eyebrow="Activities"
      title="Seminars & certifications"
      lead="Conference sessions, workshops, and the credentials I have picked up along the way."
    >
      <div className="activities-grid">
        <div className="activity-col">
          <h3 className="activity-heading">
            <span className="activity-icon">
              <Icon name="calendar" size={18} />
            </span>
            Seminars & Conferences
          </h3>

          <ul className="seminar-list">
            {seminars.map((seminar) => (
              <li className="seminar" key={seminar.name}>
                <span className="seminar-date">{seminar.date}</span>
                <h4>{seminar.name}</h4>
                <p className="seminar-event">{seminar.event}</p>
                <p className="seminar-note">{seminar.note}</p>
                <span className="seminar-location">
                  <Icon name="map-pin" size={13} />
                  {seminar.location}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="activity-col">
          <h3 className="activity-heading">
            <span className="activity-icon">
              <Icon name="award" size={18} />
            </span>
            Certifications
          </h3>

          <ul className="cert-list">
            {certifications.map((cert) => (
              <li className="cert" key={cert.name}>
                <span className="cert-mark">
                  <Icon name="award" size={16} />
                </span>
                <div className="cert-body">
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span>{cert.date}</span>
                    <span className="dot-sep">·</span>
                    <span className="cert-id">{cert.credential}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
