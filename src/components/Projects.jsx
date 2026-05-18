import React, { useRef, useCallback, useEffect } from 'react';
import { CONFIG } from '../../config.js';

/* Reusable 3D tilt card for project cards */
function TiltCard3D({ children, className = '' }) {
  const cardRef = useRef(null);
  const animRef = useRef(null);
  const targetRef = useRef({ rx: 0, ry: 0, glow: 0 });
  const currentRef = useRef({ rx: 0, ry: 0, glow: 0 });

  const onMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    targetRef.current = { rx: -dy * 10, ry: dx * 10, glow: 1 };
  }, []);

  const onLeave = useCallback(() => {
    targetRef.current = { rx: 0, ry: 0, glow: 0 };
  }, []);

  useEffect(() => {
    const tick = () => {
      const c = currentRef.current;
      const t = targetRef.current;
      const lerp = (a, b, f) => a + (b - a) * f;
      c.rx = lerp(c.rx, t.rx, 0.1);
      c.ry = lerp(c.ry, t.ry, 0.1);
      c.glow = lerp(c.glow, t.glow, 0.08);

      if (cardRef.current) {
        const el = cardRef.current;
        el.style.transform = `perspective(800px) rotateX(${c.rx}deg) rotateY(${c.ry}deg) translateZ(${c.glow * 10}px)`;

        const glare = el.querySelector('.card-glare');
        if (glare) {
          const gx = 50 + c.ry * 3;
          const gy = 50 - c.rx * 3;
          glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(0,255,65,0.06) 0%, transparent 60%)`;
          glare.style.opacity = c.glow;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card-3d ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {children}
      <div className="card-glare absolute inset-0 rounded-xl pointer-events-none" style={{ opacity: 0 }} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 w-full">
        {/* Section header */}
        <div className="reveal-element flex items-center gap-4 mb-14">
          <span className="font-mono text-matrix-green/40 text-sm tracking-widest">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects &amp; Achievements</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-matrix-green/30 to-transparent" />
        </div>

        {/* Timeline wrapped in game selection container */}
        <div className="relative game-selection-container">
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-matrix-green/40 via-matrix-green/20 to-transparent" />

          <div className="space-y-10 sm:space-y-14">
            {CONFIG.projects.map((project, index) => {
              // Alternate floating animations for organic feel
              const floatClass = index % 2 === 0 ? 'animate-float' : 'animate-float-delayed';
              
              return (
                <div key={index} className={`reveal-element group relative grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 game-card-wrapper ${floatClass}`}>

                  {/* Date column */}
                  <div className="relative font-mono text-sm text-white/60 pt-1 md:text-right md:pr-10">
                    <span className="relative z-10">{project.date}</span>
                    <div className="absolute right-0 md:-right-[4px] top-1.5 w-2.5 h-2.5 rounded-full bg-matrix-card border-[1.5px] border-matrix-green/50 group-hover:bg-matrix-green group-hover:shadow-matrix-glow transition-all duration-300 hidden md:block" />
                    <div className="absolute right-0 md:-right-[9px] top-0.5 w-[20px] h-[20px] rounded-full bg-matrix-green/0 group-hover:bg-matrix-green/20 transition-all duration-500 hidden md:block" />
                  </div>

                  {/* 3D card */}
                  <TiltCard3D className="relative ml-6 md:ml-0 cursor-pointer">
                    <div className="relative p-5 sm:p-7 rounded-xl border border-matrix-border bg-matrix-card/40 backdrop-blur-sm transition-all duration-500 group-hover:border-matrix-green/40 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">

                      {/* Holographic corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-matrix-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-matrix-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-matrix-green transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5 sm:flex-shrink-0">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md bg-matrix-green/5 border border-matrix-green/15 text-matrix-green/70 font-mono text-[10px] sm:text-[11px] transition-colors whitespace-nowrap shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-matrix-green/80 font-mono text-sm">{project.role}</p>
                      </div>

                      <ul className="space-y-2.5">
                        {project.description.map((desc, i) => (
                          <li key={i} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                            <span className="text-matrix-green mt-1 flex-shrink-0 text-xs">▹</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {/* Scan line reveal on hover */}
                      <div className="project-scanline absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </TiltCard3D>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
