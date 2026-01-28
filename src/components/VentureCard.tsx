import Link from 'next/link'
import Image from 'next/image'

interface VentureCardProps {
    href: string
    logo: string
    name: string
    tagline: string
    year?: string
}

export default function VentureCard({ href, logo, name, tagline, year }: VentureCardProps) {
    return (
        <Link href={href} className="venture-card">
            <div className="venture-card__logo">
                <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={200}
                    height={100}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="venture-card__content">
                <h3 className="venture-card__name">{name}</h3>
                <p className="venture-card__tagline">{tagline}</p>
                {year && <span className="venture-card__year">{year}</span>}
            </div>
        </Link>
    )
}
