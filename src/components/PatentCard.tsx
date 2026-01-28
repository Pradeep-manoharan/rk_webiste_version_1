'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface PatentCardProps {
    href: string
    image: string
    title: string
    description: string
    patentNumber?: string
    className?: string
}

export default function PatentCard({ href, image, title, description, patentNumber, className = '' }: PatentCardProps) {
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
            <Link href={href} className="patent-card">
                <div className="patent-card__image">
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="patent-card__content">
                    <div className="patent-card__header">
                        {patentNumber && (
                            <span className="patent-card__number">{patentNumber}</span>
                        )}
                        <span className="patent-card__badge">Patent</span>
                    </div>
                    <h3 className="patent-card__title">{title}</h3>
                    <p className="patent-card__description">{description}</p>
                    <span className="patent-card__link">
                        View Details →
                    </span>
                </div>
            </Link>
        </div>
    )
}
