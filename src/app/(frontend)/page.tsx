import Image from 'next/image'
import VentureCard from '@/components/VentureCard'
import InnovationCard from '@/components/InnovationCard'
import PhotoGallery from '@/components/PhotoGallery'

export default async function HomePage() {
  return (
    <>
      {/* Hero Section - Full Viewport */}
      <section className="section section--hero">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__content">
              <h1 className="hero__title">
                Data Science & AI Product Leader
              </h1>
              <p className="hero__description">
                Empowering individuals and entrepreneurs through technology and innovation.
                Leading AI and Data Science initiatives at Fortune 500 companies.
              </p>
              <div className="hero__cta">
                <a href="#ventures" className="btn btn--accent">View My Work</a>
                <a href="https://calendly.com/rathnakumarudayakumar" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </a>
              </div>
            </div>
            <div className="hero__image">
              <Image
                src="/images/rkheroimg.png"
                alt="Rathnakumar - Data Science & AI Leader"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section - Full Viewport */}
      <section id="ventures" className="section section--white">
        <div className="container">
          <div className="section__header">
            <div>
              <h2 className="section__title">Ventures</h2>
              <p className="section__subtitle">Startups I&apos;ve founded and co-founded</p>
            </div>
            <a href="/portfolio#ventures" className="btn btn--outline btn--sm">View all →</a>
          </div>
          <div className="section__grid section__grid--ventures">
            <VentureCard
              href="/portfolio#ventures"
              logo="/venture_logo/openatlas_logo.png"
              name="Open Atlas"
              tagline="Empowering immigrant entrepreneurs to drive innovation"
            />
            <VentureCard
              href="/portfolio#ventures"
              logo="/venture_logo/nextazy1.jpg"
              name="Nextazy"
              tagline="Product innovation consultancy for modern businesses"
            />
            <VentureCard
              href="/portfolio#ventures"
              logo="/venture_logo/pawshlogo.png"
              name="Pawsh"
              tagline="Financial literacy platform for empowered wealth building"
            />
            <VentureCard
              href="/portfolio#ventures"
              logo="/venture_logo/socialblood.jpg"
              name="Socialblood"
              tagline="Connecting blood donors with recipients across India"
            />
            <VentureCard
              href="/portfolio#ventures"
              logo="/venture_logo/Shout stat.png"
              name="ShoutStart"
              tagline="India's first crowdfunding platform for startups"
            />
          </div>
        </div>
      </section>

      {/* Patents & Innovation - 2x2 Grid Layout */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <div>
              <h2 className="section__title">Patents & Innovation</h2>
              <p className="section__subtitle">Intellectual property, research, and publications</p>
            </div>
            <a href="/portfolio#patents" className="btn btn--outline btn--sm">View all →</a>
          </div>

          <div className="section__grid section__grid--patents">
            <InnovationCard
              href="/portfolio#patents"
              image="/work/patten/VIDEO-BASED DROWSY DRIVING DETECTION ON AN EDGE DEVICE.png"
              title="Video-Based Drowsy Driver Detection"
              description="Edge AI system detecting driver drowsiness in real-time"
              type="Patent"
              meta="US 63/446,368"
            />
            <InnovationCard
              className="reveal-delay-1"
              href="/portfolio#patents"
              image="/work/patten/SYSTEMS AND METHODS FOR IN-CAB FEEDBACK CONTROL USING VIRTUAL COACHING SESSIONS.png"
              title="AI-Powered Driver Coaching System"
              description="Intelligent in-cab feedback system using virtual coaching"
              type="Patent"
              meta="EP4514668A1"
            />
            <InnovationCard
              className="reveal-delay-2"
              href="/portfolio#books"
              image="/work/book/AuthorshipPM101.jpg"
              title="Product Management 101"
              description="A comprehensive guide to modern product management principles"
              type="Book"
              meta="Best Seller"
            />
            <InnovationCard
              className="reveal-delay-2"
              href="/portfolio#books"
              image="/work/book/AuthorshipABCdataScience.png"
              title="ABCs of Data Science"
              description="Making data science accessible for everyone"
              type="Book"
              meta="Educational"
            />
          </div>
        </div>
      </section>

      {/* Moving Photo Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="section__header">
            <div>
              <h2 className="section__title">Gallery</h2>
              <p className="section__subtitle">Moments</p>
            </div>
          </div>
        </div>
        <PhotoGallery />
      </section>


    </>
  )
}
