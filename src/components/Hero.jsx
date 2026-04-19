import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../config.js';

// SVG Icon components
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
};

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
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-[1400px] mx-auto px-8 w-full xl:px-12">
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="order-2 md:order-1 animate-fade-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            {/* Terminal-style greeting */}
            <p className="font-mono text-matrix-green text-sm mb-4 tracking-wider">
              <span className="text-matrix-green/50">&gt;</span> Hello, World! My name is
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              {CONFIG.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="text-matrix-green border-r-2 border-matrix-green pr-2">{CONFIG.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            {/* Typing effect */}
            <div className="text-xl sm:text-2xl text-matrix-green mb-6 h-10">
              <TypingEffect texts={CONFIG.roles} />
            </div>

            {/* Short bio */}
            <p className="text-matrix-text-muted text-base leading-relaxed max-w-lg mb-8">
              {CONFIG.summary.substring(0, 170)}...
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
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

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {CONFIG.socials.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 flex items-center justify-center rounded-lg border border-matrix-border text-matrix-text-muted transition-all duration-300 hover:text-matrix-green hover:border-matrix-green/40 hover:-translate-y-0.5"
                    aria-label={social.platform}
                    title={social.platform}
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Photo + Project highlights */}
          <div className="order-1 lg:order-2 animate-fade-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <div className="rounded-3xl border border-matrix-border bg-matrix-card/80 p-8 shadow-card-hover backdrop-blur-md">
              <div className="mx-auto mb-8 relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-matrix-green shadow-matrix-lg bg-matrix-card">
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
                  <div className="w-full h-full flex items-center justify-center bg-matrix-card">
                    <span className="text-matrix-green font-mono text-6xl">A</span>
                  </div>
                )}
              </div>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-matrix-green/80 mb-3">Project Highlights</h3>
              <div className="space-y-3">
                {highlightedProjects.map((project) => (
                  <a
                    key={project.title}
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="block rounded-lg border border-matrix-border px-3 py-2.5 transition-colors duration-300 hover:border-matrix-green/40"
                  >
                    <p className="text-sm text-white leading-snug">{project.title}</p>
                    <p className="font-mono text-[11px] text-matrix-green/70 mt-1">{project.role}</p>
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
