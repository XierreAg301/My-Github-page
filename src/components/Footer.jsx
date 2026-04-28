import React from 'react';
import { CONFIG } from '../../config.js';

// SVG Icon components (moved from Hero)
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

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 sm:py-24 border-t border-matrix-border px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        {/* Big CTA */}
        <div className="text-center mb-16">
          <p className="font-mono text-matrix-green text-sm mb-4">What's Next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-matrix-green mb-6">Get In Touch</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
          </p>

          <a
            href={`mailto:${CONFIG.email}`}
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-mono text-[15px] font-bold text-matrix-green border border-matrix-green/50 rounded-lg transition-all duration-300 hover:bg-matrix-green/10 hover:border-matrix-green hover:shadow-matrix-glow overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-matrix-green/10 to-transparent" />
          </a>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm font-mono text-matrix-green tracking-wide">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-matrix-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {CONFIG.email}
          </span>
          <span className="hidden sm:inline text-matrix-green/50">•</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-matrix-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {CONFIG.phoneDisplay}
          </span>
        </div>

        {/* Social Icon Links — moved from Hero about me */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {CONFIG.socials.map((social) => {
            const IconComponent = iconMap[social.icon];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg border border-matrix-border text-white/50 transition-all duration-300 hover:text-matrix-green hover:border-matrix-green/40 hover:-translate-y-1 hover:shadow-matrix"
                aria-label={social.platform}
                title={social.platform}
              >
                {IconComponent && <IconComponent />}
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono text-xs text-white/30">
            <span className="text-matrix-green/30">&lt;</span>
            {' '}Built by{' '}
            <a href={CONFIG.socials.find(s => s.icon === 'github')?.url || '#'} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-matrix-green transition-colors">
              {CONFIG.name}
            </a>
            {' '}
            <span className="text-matrix-green/30">/&gt;</span>
          </p>
          <p className="font-mono text-xs text-white/30 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
