'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [theme, setTheme] = useState('light')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header className="header" id="header">
            <div className="container header__container">
                <Link href="/" className="header__logo">
                    Rathnakumar <span style={{ fontWeight: 'var(--font-normal)', opacity: 0.6 }}>| RK</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header__nav" aria-label="Main navigation">
                    <Link href="/" className={`header__nav-link ${pathname === '/' ? 'header__nav-link--active' : ''}`}>
                        Home
                    </Link>

                    <div className="header__nav-item">
                        <Link href="/about" className="header__nav-link">About</Link>
                        <div className="header__dropdown">
                            <Link href="/about#story" className="header__dropdown-link">My Story</Link>
                            <Link href="/about#achievements" className="header__dropdown-link">Achievements</Link>
                            <Link href="/about#journey" className="header__dropdown-link">Professional Journey</Link>
                        </div>
                    </div>

                    <div className="header__nav-item">
                        <Link href="/portfolio" className="header__nav-link">Portfolio</Link>
                        <div className="header__dropdown">
                            <Link href="/portfolio#books" className="header__dropdown-link">Books & Publications</Link>
                            <Link href="/portfolio#patents" className="header__dropdown-link">Patents</Link>
                            <Link href="/portfolio#awards" className="header__dropdown-link">Awards Judging</Link>
                            <Link href="/portfolio#ventures" className="header__dropdown-link">Ventures Founded</Link>
                            <Link href="/portfolio#mentoring" className="header__dropdown-link">Mentoring & Speaking</Link>
                        </div>
                    </div>

                    <div className="header__nav-item">
                        <Link href="/press" className="header__nav-link">Press</Link>
                        <div className="header__dropdown">
                            <Link href="/press#featured" className="header__dropdown-link">Featured Articles</Link>
                            <Link href="/press#media" className="header__dropdown-link">Media Mentions</Link>
                            <Link href="/press#speaking" className="header__dropdown-link">Speaking Engagements</Link>
                        </div>
                    </div>

                    <Link href="/blog" className="header__nav-link">Blog</Link>
                </nav>

                {/* Theme Toggle */}
                <button
                    id="theme-toggle"
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    className={`menu-toggle ${mobileMenuOpen ? 'menu-toggle--open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu - Always rendered, visibility controlled by class */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}>
                <Link href="/" className="mobile-menu__link" onClick={closeMobileMenu}>Home</Link>
                <Link href="/about" className="mobile-menu__link" onClick={closeMobileMenu}>About</Link>
                <Link href="/portfolio" className="mobile-menu__link" onClick={closeMobileMenu}>Portfolio</Link>
                <Link href="/press" className="mobile-menu__link" onClick={closeMobileMenu}>Press</Link>
                <Link href="/blog" className="mobile-menu__link" onClick={closeMobileMenu}>Blog</Link>
            </div>
        </header>
    )
}

