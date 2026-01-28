"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    { src: "/images/gallery/DSC_7511.jpg", position: "center 20%" }, // Adjusted for face visibility
    { src: "/images/gallery/DSC_9378.jpg", position: "center" },
    { src: "/images/gallery/DSC_9382.jpg", position: "center" },
    { src: "/images/gallery/DSC_9410.jpg", position: "center" },
    { src: "/images/gallery/IMG_2553.jpg", position: "center" },
    { src: "/images/gallery/IMG_3583.jpg", position: "center" },
    { src: "/images/gallery/IMG_4433.jpg", position: "center" },
    { src: "/images/gallery/IMG_7469.jpg", position: "center" },
];

export default function PhotoGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    // Direction state: 1 for right, -1 for left
    const directionRef = useRef(1);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        // Speed of auto-scroll (pixels per frame)
        const speed = 0.5;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
                const maxScroll = scrollWidth - clientWidth;

                // Check boundaries to reverse direction
                if (scrollLeft >= maxScroll - 1) { // -1 buffer for float precision
                    directionRef.current = -1;
                } else if (scrollLeft <= 1) {
                    directionRef.current = 1;
                }

                scrollContainer.scrollLeft += speed * directionRef.current;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <div className="gallery-container">
            <div
                className="gallery-track"
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* Single set of unique images */}
                {images.map((item, index) => (
                    <div key={`gallery-${index}`} className="gallery-item">
                        <Image
                            src={item.src}
                            alt={`Gallery image ${index + 1}`}
                            width={400}
                            height={300}
                            style={{
                                objectFit: "cover",
                                objectPosition: item.position,
                                width: "100%",
                                height: "300px",
                                borderRadius: "var(--radius-md)"
                            }}
                            draggable={false} // Prevent image drag behavior interfering with scroll
                        />
                    </div>
                ))}
            </div>

            {/* Gradient Overlays for smooth fade effect at edges */}
            <div className="gallery-overlay-left"></div>
            <div className="gallery-overlay-right"></div>
        </div>
    );
}
