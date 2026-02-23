import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div>
                        <div className="footer__brand">Rathnakumar</div>
                        <p className="footer__description">
                            Data Science & AI Product Leader | EB1A Visa Recipient | Empowering
                            individuals and entrepreneurs through technology and innovation
                        </p>
                        <div className="footer__social">
                            <a href="https://linkedin.com/in/rathanuday" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            <a href="https://forms.zohopublic.com/openventure1/form/OpenVentureProfileEvaluationWebsite/formperma/4nLvliOoETVHOSNXXApQ7p7wuUPCXUwBFdtKAk8a8dk" className="footer__social-link" aria-label="Schedule a call" target="_blank" rel="noopener noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="footer__title">Quick Links</h5>
                        <Link href="/about" className="footer__link">About</Link>
                        <Link href="/portfolio" className="footer__link">Portfolio</Link>
                        <Link href="/blog" className="footer__link">Blog</Link>
                        <Link href="/press" className="footer__link">Press</Link>
                    </div>

                    <div>
                        <h5 className="footer__title">Contact</h5>

                        <a href="https://forms.zohopublic.com/openventure1/form/OpenVentureProfileEvaluationWebsite/formperma/4nLvliOoETVHOSNXXApQ7p7wuUPCXUwBFdtKAk8a8dk" className="footer__link" target="_blank" rel="noopener noreferrer">
                            Schedule a Call
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; 2026 Rathnakumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
