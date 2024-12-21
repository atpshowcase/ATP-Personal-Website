'use client';

import { useState, useEffect, useRef } from "react";
import { ClockLoader } from "react-spinners";
import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null); // Define the type of the ref
  const particlesRef = useRef<HTMLDivElement | null>(null); // Ref for particles container

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 2000, // Animation duration
      easing: "ease-out",
      once: true, // Animation should happen only once
    });

    // Initialize particles.js (only in the client-side)
    if (particlesRef.current && window.particlesJS) {
      window.particlesJS("particles-container", {
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          color: { value: "#ff0000" },
          links: { enable: true, distance: 150 },
        },
      });
    }

    const timer = setTimeout(() => {
      // Add zoom-out effect to the loader before it disappears
      if (loaderRef.current) {
        loaderRef.current.classList.add("zoom-out");
      }
      setTimeout(() => setLoading(false), 500); // Wait for zoom-out animation to complete
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        ref={loaderRef}
        className="flex items-center justify-center min-h-screen bg-background transition-transform duration-500"
      >
        <ClockLoader size={100} />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen" data-aos="fade-in">
      <div ref={particlesRef} id="particles-container" className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="container max-w-screen-lg mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section data-aos="fade-up" data-aos-delay="400">
            <Sidebar data-aos="fade-up" data-aos-delay="1000" />
          </section>
          <main className="md:col-span-2">
            <section data-aos="fade-up" data-aos-delay="1000">
              <AboutMe />
            </section>
            <section data-aos="fade-up" data-aos-delay="1200">
              <Projects />
            </section>
            <section data-aos="fade-up" data-aos-delay="1400">
              <Experience />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
