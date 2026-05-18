import React, { useEffect, useState, useRef } from 'react';
import MatrixRain from './components/MatrixRain';
import ParticleField, { triggerParticleBurst } from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const curtainRef = useRef(null);

  useEffect(() => {
    document.title = 'Aaron Austin C. Amaro | Full Stack Developer';

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal-element').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let currentSection = 'hero';
    
    // Section transition observer (for bursting particles like a game warp)
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && sectionId !== currentSection) {
              currentSection = sectionId;
              triggerParticleBurst();
              
              // Trigger Subtle Data Stream Wipe
              if (curtainRef.current) {
                curtainRef.current.classList.remove('stream-animate');
                // Force DOM reflow to restart animation
                void curtainRef.current.offsetWidth;
                curtainRef.current.classList.add('stream-animate');
              }
              
              // Trigger Decrypt on page content
              const contentContainer = document.getElementById('main-content-wrapper');
              if (contentContainer) {
                contentContainer.classList.remove('decrypt-animate');
                void contentContainer.offsetWidth;
                contentContainer.classList.add('decrypt-animate');
              }
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger when a section is substantially in view
    );

    document.querySelectorAll('section').forEach((el) => {
      sectionObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const next = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, next)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-matrix-black text-matrix-text overflow-x-hidden">

      <MatrixRain scrollProgress={scrollProgress} />
      <ParticleField />

      {/* Ambient depth glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-matrix-green/4 blur-[140px]" />
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-matrix-cyan/3 blur-[100px]" />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-matrix-green/3 blur-[80px]" />
      </div>

      {/* Navbar outside of transformed container so position: fixed isn't broken */}
      <Navbar />

      {/* Content wrapper with smooth perspective */}
      <div className="relative z-10 perspective-[1000px]">
        <div id="main-content-wrapper" className="w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          <Hero />
          <About />
          <Projects />
          <Certificates />
          <Footer />
        </div>
      </div>

      {/* Subtle Data Stream Overlay for Scene Transitions */}
      <div ref={curtainRef} className="data-stream-overlay" aria-hidden="true">
        <div className="data-stream-log text-right">
          <div>[SYS] Fetching data block...</div>
          <div className="animate-pulse opacity-50">&gt; decrypting_payload</div>
        </div>
      </div>
    </div>
  );
}
