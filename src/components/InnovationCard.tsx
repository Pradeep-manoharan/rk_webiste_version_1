'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface InnovationCardProps {
    href: string
    image: string
    title: string
    description: string
    type: 'Patent' | 'Book'
    meta?: string // Patent Number or Subtitle
    className?: string
}

export default function InnovationCard({ href, image, title, description, type, meta, className = '' }: InnovationCardProps) {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={cardRef}
            className={`reveal ${isVisible ? 'active' : ''} ${className}`}
        >
            <Link href={href} className="innovation-card">
                <div className="innovation-card__image">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        style={{ objectFit: 'contain', padding: '12px' }}
                    />
                </div>
                <div className="innovation-card__content">
                    <div className="innovation-card__header">
                        <span className={`innovation-card__badge innovation-card__badge--${type.toLowerCase()}`}>
                            {type}
                        </span>
                        {meta && (
                            <span className="innovation-card__meta">{meta}</span>
                        )}
                    </div>
                    <h3 className="innovation-card__title">{title}</h3>
                    <p className="innovation-card__description">{description}</p>
                    <span className="innovation-card__link">
                        View Details →
                    </span>
                </div>
            </Link>
        </div>
    )
}
