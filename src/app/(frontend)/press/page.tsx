import Image from 'next/image'

export default function PressPage() {
    return (
        <>
            {/* Press & Featured Section Combined */}
            <section className="section section--page-header" id="featured">
                <div className="container">
                    <span className="page-header__label">Press & Media</span>
                    <h1 className="page-header__title">Featured Coverage</h1>
                    <p className="page-header__subtitle">
                        Media features, interviews, and speaking engagements
                    </p>

                    <h2 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Featured In</h2>

                    {/* Press Cards Grid */}
                    <div className="press-grid">
                        {/* New York Weekly - Featured */}
                        <a href="#" className="press-card press-card--featured">
                            <div className="press-card__image">
                                <Image
                                    src="/work/press/Rathnakumar The Data Science titan empowering the Global tech landscape - New York Weekly Reports.png"
                                    alt="New York Weekly Feature"
                                    width={600}
                                    height={400}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="press-card__content">
                                <span className="press-card__source">New York Weekly</span>
                                <h3 className="press-card__title">The Data Science Titan Empowering the Global Tech Landscape</h3>
                                <p className="press-card__excerpt">
                                    An in-depth feature on Rathnakumar's journey from founding India's first crowdfunding platform
                                    to becoming a recognized leader in AI and Data Science at Fortune 500 companies.
                                </p>
                                <span className="press-card__link">Read Article →</span>
                            </div>
                        </a>

                        {/* Business Standard */}
                        <a href="#" className="press-card">
                            <div className="press-card__image">
                                <Image
                                    src="/work/press/Making the world a better place with Data Science and AI...-Business Standard Reports.png"
                                    alt="Business Standard Feature"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="press-card__content">
                                <span className="press-card__source">Business Standard</span>
                                <h3 className="press-card__title">Making the World a Better Place with Data Science and AI</h3>
                                <p className="press-card__excerpt">
                                    Featured article highlighting innovation in AI-driven product development and entrepreneurship.
                                </p>
                                <span className="press-card__link">Read Article →</span>
                            </div>
                        </a>

                        {/* Indian Achievers Forum */}
                        <a href="#" className="press-card">
                            <div className="press-card__image">
                                <Image
                                    src="/work/press/Indian Achievers Forum.png"
                                    alt="Indian Achievers Forum"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="press-card__content">
                                <span className="press-card__source">Indian Achievers Forum</span>
                                <h3 className="press-card__title">Recognition for Excellence in Technology Leadership</h3>
                                <p className="press-card__excerpt">
                                    Honored for contributions to the global technology landscape and innovation in AI.
                                </p>
                                <span className="press-card__link">Read Article →</span>
                            </div>
                        </a>

                        {/* Automation Article */}
                        <a href="#" className="press-card">
                            <div className="press-card__image">
                                <Image
                                    src="/work/press/How automation is reducing human bias in data collection and analysis.png"
                                    alt="Automation Article"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="press-card__content">
                                <span className="press-card__source">Tech Publication</span>
                                <h3 className="press-card__title">How Automation is Reducing Human Bias in Data Collection</h3>
                                <p className="press-card__excerpt">
                                    Insights on leveraging automation to minimize bias in data collection and analysis.
                                </p>
                                <span className="press-card__link">Read Article →</span>
                            </div>
                        </a>

                        {/* Globee Awards */}
                        <a href="#" className="press-card">
                            <div className="press-card__image">
                                <Image
                                    src="/work/press/Rathnakumar Udayakumar, Product Lead Cloud and AI, one among the Globee Business Awards Judge panel..png"
                                    alt="Globee Business Awards"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="press-card__content">
                                <span className="press-card__source">Globee Awards</span>
                                <h3 className="press-card__title">Judge Panel for Globee Business Awards</h3>
                                <p className="press-card__excerpt">
                                    Selected as a judge for the prestigious Globee Business Awards, evaluating innovation excellence.
                                </p>
                                <span className="press-card__link">Read Article →</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
