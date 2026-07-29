'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import VentureCard from '@/components/VentureCard'
import {
  ventures,
  ventureCategories,
  type VentureCategory,
} from '@/data/ventures'

type VenturesFilteredListProps = {
  variant: 'home' | 'portfolio'
}

export default function VenturesFilteredList({ variant }: VenturesFilteredListProps) {
  const [active, setActive] = useState<VentureCategory>('All')

  useEffect(() => {
    if (variant !== 'portfolio') return

    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (!hash || hash === 'ventures') return

      const match = ventures.find((venture) => venture.id === hash)
      if (!match) return

      setActive('All')
      requestAnimationFrame(() => {
        document.getElementById(match.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [variant])

  const filtered =
    active === 'All'
      ? ventures
      : ventures.filter((venture) => venture.category === active)

  return (
    <div className="ventures-filtered">
      <div className="venture-filter" role="tablist" aria-label="Filter ventures by category">
        {ventureCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            className={`venture-filter__btn${active === category ? ' is-active' : ''}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="ventures-filtered__empty">No companies in this category yet.</p>
      ) : variant === 'home' ? (
        <div className="section__grid section__grid--ventures">
          {filtered.map((venture) => (
            <VentureCard
              key={venture.id}
              href={`/portfolio#${venture.id}`}
              logo={venture.logo}
              name={venture.name}
              tagline={venture.tagline}
            />
          ))}
        </div>
      ) : (
        <div className="venture-detail-grid">
          {filtered.map((venture) => (
            <article key={venture.id} id={venture.id} className="venture-detail-card">
              <div className="venture-detail-card__top">
                <div className="venture-detail-card__logo">
                  <Image
                    src={venture.logo}
                    alt={`${venture.name} logo`}
                    width={48}
                    height={48}
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <span className="venture-detail-card__category">{venture.category}</span>
              </div>
              <h3 className="venture-detail-card__title">{venture.name}</h3>
              <p className="venture-detail-card__tagline">{venture.tagline}</p>
              <p className="venture-detail-card__description">{venture.description}</p>
              {venture.website ? (
                <a
                  href={venture.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--sm venture-detail-card__cta"
                >
                  Visit Website →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
