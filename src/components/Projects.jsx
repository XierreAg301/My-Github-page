import React from 'react';
import { CONFIG } from '../../config.js';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects & Achievements</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-matrix-green/30 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-matrix-green/40 via-matrix-green/20 to-transparent" />

          <div className="space-y-12">
            {CONFIG.projects.map((project, index) => (
              <div
                key={index}
                className="group relative grid md:grid-cols-[180px_1fr] gap-4 md:gap-8"
              >
                {/* Date column */}
                <div className="relative font-mono text-sm text-matrix-text-muted pt-1 md:text-right md:pr-10">
                  <span className="relative z-10">{project.date}</span>
                  {/* Timeline dot */}
                  <div className="absolute right-0 md:-right-[4px] top-1.5 w-2.5 h-2.5 rounded-full bg-matrix-card border-[1.5px] border-matrix-green/50 group-hover:bg-matrix-green group-hover:shadow-matrix-glow transition-all duration-300 hidden md:block" />
                  {/* Glow on active */}
                  <div className="absolute right-0 md:-right-[9px] top-0.5 w-[20px] h-[20px] rounded-full bg-matrix-green/0 group-hover:bg-matrix-green/20 transition-all duration-500 hidden md:block" />
                </div>

                {/* Content card */}
                <div className="relative p-7 rounded-xl border border-matrix-border bg-matrix-card/40 backdrop-blur-sm transition-all duration-500 group-hover:border-matrix-green/40 group-hover:shadow-matrix-glow group-hover:bg-matrix-card ml-6 md:ml-0 group-hover:-translate-y-1">
                  
                  {/* Top Header: Title & Role */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-matrix-green transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="font-mono text-[10px] uppercase text-matrix-green/60 border border-matrix-green/20 px-2 py-0.5 rounded-full ml-2">
                            Featured
                          </span>
                        )}
                      </h3>
                      <p className="text-matrix-green/80 font-mono text-sm">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm text-matrix-text-muted leading-relaxed">
                        <span className="text-matrix-green mt-1 flex-shrink-0 text-xs">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-matrix-green/5 border border-matrix-green/10 text-matrix-green/70 font-mono text-[11px] group-hover:border-matrix-green/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
