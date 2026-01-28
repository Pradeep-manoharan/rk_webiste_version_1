import Image from 'next/image'
import Timeline from '@/components/Timeline'

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}


            {/* Bio Section */}
            <section className="section section--white" id="story" style={{ paddingTop: 'calc(var(--header-height) + var(--space-2))' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <Image
                                src="/images/Rathnakumar.jpg"
                                alt="Rathnakumar Udayakumar"
                                width={400}
                                height={400}
                                style={{ maxWidth: '400px', width: '100%', borderRadius: 'var(--radius-lg)' }}
                            />
                        </div>
                        <div>
                            <span style={{ display: 'block', marginBottom: 'var(--space-2)', color: 'var(--color-accent)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: 'var(--text-sm)' }}>About Me</span>
                            <h1 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-3xl)', lineHeight: '1.2' }}>Rathnakumar Udayakumar</h1>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', fontSize: 'var(--text-base)' }}>Entrepreneur | Author | Mentor | Data Nerd | Angel Investor</p>

                            <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>My Story</h2>

                            <p className="text-lead">
                                A seasoned tech professional with over 10 years of experience in the field of Data Science and AI.
                                I&apos;ve worked with Fortune 500 companies such as Amazon and IBM, as well as high-growth startups
                                operating in the data and AI space.
                            </p>
                            <p>
                                As the founder of Pawsh, I&apos;ve dedicated my career to empowering individuals
                                and entrepreneurs to take control of their financial destinies. My mission is simple: to help
                                you create a life of choice, not chance, by aligning your money with what truly matters to you.
                            </p>
                            <p>
                                I hold 2 patents in AI/Edge computing, have authored books on Product Management and Data Science,
                                and have successfully raised funds from top VCs including Village Global, 500 Startups, and Twin Ventures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Achievements */}
            <section className="section" id="achievements" style={{ background: 'var(--color-black)', color: 'var(--color-white)', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-20)' }}>
                <div className="container">
                    <h2 className="text-center" style={{ color: 'var(--color-white)', marginBottom: 'var(--space-12)', marginTop: 'var(--space-26)' }}>
                        Key Achievements
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div>
                            <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-2)' }}>2</div>
                            <p style={{ color: 'var(--color-gray-400)' }}>Patents in AI & Edge Computing</p>
                        </div>
                        <div>
                            <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-2)' }}>40+</div>
                            <p style={{ color: 'var(--color-gray-400)' }}>Startups Funded via ShoutStart</p>
                        </div>
                        <div>
                            <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-2)' }}>100+</div>
                            <p style={{ color: 'var(--color-gray-400)' }}>Hospital Partnerships (Socialblood)</p>
                        </div>
                        <div>
                            <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-black)', marginBottom: 'var(--space-2)' }}>10+</div>
                            <p style={{ color: 'var(--color-gray-400)' }}>Years in Data Science & AI</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Professional Journey - Horizontal Timeline */}
            < section className="section section--white" id="journey" >
                <div className="container">
                    <Timeline />
                </div>
            </section >


        </>
    )
}
