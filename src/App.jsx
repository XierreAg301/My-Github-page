import React, { useEffect, useState } from 'react';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-element').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
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
      {/* Matrix rain background */}
      <MatrixRain scrollProgress={scrollProgress} />

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-matrix-green/5 blur-[120px]" />
      </div>

      {/* Scroll rail */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
        <div className="h-32 w-[2px] bg-matrix-border rounded-full overflow-hidden">
          <div className="w-full bg-matrix-green/80 transition-all duration-300" style={{ height: `${Math.max(scrollProgress * 100, 4)}%` }} />
        </div>
        <div className="w-2 h-2 rounded-full bg-matrix-green/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}
