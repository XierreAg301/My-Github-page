import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../config.js';

function TypingEffect({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-blink text-matrix-green ml-0.5 font-bold">|</span>
    </span>
  );
}

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const highlightedProjects = CONFIG.projects.slice(0, 3);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full xl:px-12">
        <div className="grid lg:grid-cols-[1fr_540px] gap-8 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 animate-fade-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            {/* Terminal-style greeting */}
            <p className="font-mono text-matrix-green text-sm mb-4 tracking-wider">
              <span className="text-matrix-green/50">&gt;</span> Hello, World! My name is
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              {CONFIG.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="text-matrix-green">{CONFIG.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            {/* Typing effect - bigger font */}
            <div className="text-2xl sm:text-3xl lg:text-4xl text-matrix-green mb-5 h-12 sm:h-14">
              <TypingEffect texts={CONFIG.roles} />
            </div>

            {/* Short bio */}
            <p className="text-white/60 text-base leading-relaxed max-w-lg mb-5">
              {CONFIG.summary.substring(0, 170)}...
            </p>

            {/* CTA Buttons — moved up by reducing bottom margin */}
            <div className="flex flex-wrap items-center gap-4 hero-buttons">
              <a
                href={CONFIG.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 font-mono text-sm text-matrix-black bg-matrix-green rounded-lg transition-all duration-300 hover:shadow-matrix hover:-translate-y-0.5"
              >
                <span className="font-semibold tracking-wide">See My Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-3 px-8 py-3.5 font-mono text-[15px] font-bold text-matrix-green border border-matrix-green/40 rounded-lg transition-all duration-300 hover:bg-matrix-green/10 shadow-matrix"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Photo + Project highlights */}
          <div className="order-1 lg:order-2 animate-fade-in-right flex flex-col items-center w-full mx-auto lg:mx-0" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            {/* Profile Picture — no background, glow effect instead of border */}
            <div className="mb-14 relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden pfp-glow z-10 shrink-0">
              {CONFIG.avatar ? (
                <img
                  src={CONFIG.avatar}
                  alt={CONFIG.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-matrix-green font-mono text-6xl">A</span>
                </div>
              )}
            </div>

            {/* Project Highlights (Spans full width, wider than picture) */}
            <div className="w-full">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-matrix-green/50" />
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-matrix-green/80 whitespace-nowrap">Project Highlights</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-matrix-green/50 to-transparent" />
              </div>
              
              <div className="relative pl-10 space-y-3">
                {/* Vertical Line */}
                <div className="absolute left-[10px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-matrix-green/40 via-matrix-green/20 to-transparent" />
                
                {highlightedProjects.map((project) => (
                  <a
                    key={project.title}
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="group block relative border border-transparent hover:border-matrix-green/30 p-4 rounded-xl transition-all duration-300"
                  >
                    {/* Node Dot */}
                    <div className="absolute top-[28px] left-[-35px] w-3 h-3 rounded-full bg-matrix-card border-[2px] border-matrix-green/70 group-hover:bg-matrix-green group-hover:shadow-matrix-glow transition-all duration-300" />
                    
                    <p className="text-lg font-bold text-white leading-snug group-hover:text-matrix-green transition-colors">{project.title}</p>
                    <p className="font-mono text-sm text-white/50 mt-1.5 group-hover:text-matrix-green/80 transition-colors">{project.role}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
