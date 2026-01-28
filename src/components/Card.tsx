import Link from 'next/link'
import type { ReactNode } from 'react'

interface CardProps {
    href?: string
    children: ReactNode
    variant?: 'default' | 'angular' | 'journal' | 'award' | 'venture'
    className?: string
}

export default function Card({ href, children, variant = 'default', className = '' }: CardProps) {
    const variantClass = variant !== 'default' ? `card--${variant}` : ''
    const classes = `card ${variantClass} ${className}`.trim()

    if (href) {
        return (
            <Link href={href} className={classes}>
                <div className="card__body">{children}</div>
            </Link>
        )
    }

    return (
        <div className={classes}>
            <div className="card__body">{children}</div>
        </div>
    )
}

interface HighlightCardProps {
    href: string
    title: string
    subtitle: string
}

export function HighlightCard({ href, title, subtitle }: HighlightCardProps) {
    return (
        <Link href={href} className="highlight-card">
            <span className="highlight-card__title">{title}</span>
            <span className="highlight-card__subtitle">{subtitle}</span>
        </Link>
    )
}
