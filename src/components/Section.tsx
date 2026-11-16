import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  lead?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
}: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} className={`section reveal ${className}`}>
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
