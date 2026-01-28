"use client";

import React, { useRef } from 'react';

const timelineData = [
    {
        role: "Co-Founder",
        company: "Open Atlas",
        date: "May 2024 - Present",
        description: "An ecosystem for immigrants driving innovation. Connecting students, high-skill immigrants, founders, investors, and global talent."
    },
    {
        role: "Co-Founder & Head of Product",
        company: "Nextazy",
        date: "August 2023 - Present",
        description: "Leading product strategy and development, fostering innovation and customer-centric growth."
    },
    {
        role: "Co-Founder",
        company: "PayHype",
        date: "August 2022 - August 2024",
        description: "Co-founded PayHype, a secure payment processing solution. Recognized as Top 3 Finte Company by KMPG."
    },
    {
        role: "Founder",
        company: "Pawsh",
        date: "Apr 2021 - Apr 2024",
        description: "Financial literacy platform empowering individuals to take control of their financial wellness."
    },
    {
        role: "Senior Applied Scientist",
        company: "Amazon",
        date: "May 2022 - Mar 2024",
        description: "Led data science and AI projects for strategic initiatives in cloud computing and infrastructure."
    },
    {
        role: "Data Scientist",
        company: "IBM",
        date: "Apr 2018 - Apr 2022",
        description: "Developed AI-powered solutions for clients across healthcare, finance, and retail sectors."
    },
    {
        role: "Founder & CEO",
        company: "ShoutStart",
        date: "Jan 2015 - Sep 2019",
        description: "Founded India's first crowdfunding platform. Raised funds from Village Global, 500 Startups, and Twin Ventures."
    },
    {
        role: "Founder",
        company: "Socialblood",
        date: "Dec 2011 - Aug 2015",
        description: "Social network connecting blood donors with recipients. Partnered with 100+ hospitals across India."
    }
];

export default function Timeline() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Approximates card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-end mb-12">
                <h2 style={{ marginBottom: 0 }}>Professional Journey</h2>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="timeline-nav-button"
                        aria-label="Scroll Left"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="timeline-nav-button"
                        aria-label="Scroll Right"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="timeline-section"
            >
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <span className="timeline-date">{item.date}</span>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4 className="timeline-role">{item.role}</h4>
                                <div className="timeline-company">{item.company}</div>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
