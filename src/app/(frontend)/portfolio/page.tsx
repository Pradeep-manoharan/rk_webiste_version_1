import Image from 'next/image'
import VenturesFilteredList from '@/components/VenturesFilteredList'

export default function PortfolioPage() {
    return (
        <>
            {/* Ventures Founded - from Open Venture portfolio */}
            <section className="section section--page-header" id="ventures">
                <div className="container">
                    <span className="page-header__label">Portfolio</span>
                    <h1 className="page-header__title">Founded and Funded</h1>

                    <VenturesFilteredList variant="portfolio" />
                </div>
            </section>

            {/* Books & Publications */}
            <section className="section section--white" id="books">
                <div className="container">
                    <h2 style={{ marginBottom: '1rem', fontSize: 'var(--text-xl)' }}>Books & Publications</h2>
                    <div className="portfolio-grid portfolio-grid--2">
                        {/* Book 1 */}
                        <div className="portfolio-card portfolio-card--horizontal">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/book/AuthorshipPM101.jpg"
                                    alt="Product Management 101"
                                    width={120}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">Book</span>
                                <h4 className="portfolio-card__title">Product Management 101</h4>
                                <p className="portfolio-card__text">A comprehensive guide for aspiring and experienced product managers.</p>
                            </div>
                        </div>

                        {/* Book 2 */}
                        <div className="portfolio-card portfolio-card--horizontal">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/book/AuthorshipABCdataScience.png"
                                    alt="ABCs of Data Science"
                                    width={120}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">Book</span>
                                <h4 className="portfolio-card__title">ABCs of Data Science</h4>
                                <p className="portfolio-card__text">A beginner-friendly introduction to Data Science fundamentals.</p>
                            </div>
                        </div>

                        {/* Paper 1 */}
                        <div className="portfolio-card portfolio-card--horizontal">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/Papers/WhitePaper1.png"
                                    alt="Research Paper 1"
                                    width={120}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">Journal</span>
                                <h4 className="portfolio-card__title">International Journal of CSE</h4>
                                <p className="portfolio-card__text">Role of AI in Autonomous Vehicle Delivery.</p>
                            </div>
                        </div>

                        {/* Paper 2 */}
                        <div className="portfolio-card portfolio-card--horizontal">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/Papers/WhitePaper2.png"
                                    alt="Research Paper 2"
                                    width={120}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">White Paper</span>
                                <h4 className="portfolio-card__title">AI & Machine Learning Applications</h4>
                                <p className="portfolio-card__text">Practical applications of AI and ML in enterprise solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patents */}
            <section className="section section--gray" id="patents">
                <div className="container">
                    <h2 style={{ marginBottom: '0.5rem', fontSize: 'var(--text-xl)' }}>Patents</h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '700px' }}>
                        Innovations in AI safety systems and intelligent driver assistance technology
                    </p>
                    <div className="patent-grid">
                        {/* Patent 1: Drowsy Driving Detection */}
                        <a
                            href="https://worldwide.espacenet.com/patent/search/family/090458147/publication/EP4453907A1?q=pn%3DEP4453907A1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="patent-card"
                        >
                            <div className="patent-card__header">
                                <span className="patent-card__label">US Patent Application 63/446,368</span>
                                <span className="patent-card__badge">EP4453907A1</span>
                            </div>
                            <h3 className="patent-card__title">Video-Based Drowsy Driving Detection on an Edge Device</h3>
                            <p className="patent-card__description">
                                A computer-implemented method for real-time drowsy driving detection using edge computing. The system processes video from an in-vehicle camera to detect facial features, calculates a drowsy confidence score based on sequential facial image analysis, and generates alerts when drowsiness thresholds are exceeded.
                            </p>
                            <div className="patent-card__tech">
                                <strong>Technical Field:</strong> Intelligent Driving Monitoring Systems (IDMS), Advanced Driver Assistance Systems (ADAS), and autonomous driving systems.
                            </div>
                            <div className="patent-card__features">
                                <span>Edge AI Processing</span>
                                <span>Real-time Detection</span>
                                <span>Computer Vision</span>
                                <span>Driver Safety</span>
                            </div>
                            <span className="patent-card__link">View Patent Document →</span>
                        </a>

                        {/* Patent 2: Virtual Coaching Sessions */}
                        <a
                            href="https://worldwide.espacenet.com/patent/search/family/090829359/publication/EP4514668A1?q=pn%3DEP4514668A1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="patent-card"
                        >
                            <div className="patent-card__header">
                                <span className="patent-card__label">US Patent Application 63/449,931</span>
                                <span className="patent-card__badge">EP4514668A1</span>
                            </div>
                            <h3 className="patent-card__title">Systems and Methods for In-Cab Feedback Control Using Virtual Coaching Sessions</h3>
                            <p className="patent-card__description">
                                An innovative system that combats &quot;alert fatigue&quot; by implementing virtual coaching sessions for drivers. The system generates driving scores based on behavior, segments video recordings of risky events, and selectively enables alerts only when coaching proves insufficient—balancing real-time safety with cognitive load management.
                            </p>
                            <div className="patent-card__tech">
                                <strong>Technical Field:</strong> Vehicle notification systems, driving behavior analysis, and intelligent feedback control for enhanced road safety.
                            </div>
                            <div className="patent-card__features">
                                <span>Behavior Analysis</span>
                                <span>Virtual Coaching</span>
                                <span>Alert Management</span>
                                <span>Video Segmentation</span>
                            </div>
                            <span className="patent-card__link">View Patent Document →</span>
                        </a>
                    </div>
                </div>
            </section>


            {/* Mentoring & Conferences */}
            <section className="section section--gray" id="mentoring">
                <div className="container">
                    <h2 style={{ marginBottom: '0.5rem', fontSize: 'var(--text-xl)' }}>Mentoring & Conferences</h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '700px' }}>
                        Speaking engagements and leadership discussions on AI, technology, and innovation.
                    </p>
                    <div className="portfolio-grid portfolio-grid--3">
                        <div className="portfolio-card">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/Mentorship/AIM LEADERS COUNCIL ROUNDTABLE DISCUSSION FUTURE OF AI.png"
                                    alt="Future of AI Discussion"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '180px' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">AIM Leaders Council</span>
                                <h4 className="portfolio-card__title">Future of AI</h4>
                                <p className="portfolio-card__text">Roundtable discussion on the evolving landscape of artificial intelligence.</p>
                            </div>
                        </div>

                        <div className="portfolio-card">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/Mentorship/AIM LEADERS COUNCIL ROUNDTABLE DISCUSSION BUILDING RESPONSIVE AI.jpeg"
                                    alt="Building Responsive AI"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '180px' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">AIM Leaders Council</span>
                                <h4 className="portfolio-card__title">Building Responsive AI</h4>
                                <p className="portfolio-card__text">Strategic discussions on creating AI systems that adapt to user needs.</p>
                            </div>
                        </div>

                        <div className="portfolio-card">
                            <div className="portfolio-card__image">
                                <Image
                                    src="/work/Mentorship/GLOBAL ARTIFICIAL INTELLIGENCE CONFERENCE.png"
                                    alt="Global AI Conference"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '180px' }}
                                />
                            </div>
                            <div className="portfolio-card__body">
                                <span className="portfolio-card__label">Speaker</span>
                                <h4 className="portfolio-card__title">Global AI Conference</h4>
                                <p className="portfolio-card__text">International conference on artificial intelligence applications and innovations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
