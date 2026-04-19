import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config.js'; // Ensure config.js exports CONFIG 

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.title = `${CONFIG.name} | Portfolio`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const gradCapPath = "M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z";

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav className="navbar" id="navbar">
        <a href="#" className="navbar__brand" id="nav-brand">
          {CONFIG.name.split(" ").slice(0, 2).join(" ")}
        </a>
        <ul className="navbar__links" id="nav-links">
          <li><a href="#bio">Bio</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
        </ul>
        <div className="navbar__icons">
          <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode" title="Toggle dark/light mode">
            {theme === 'light' ? (
              <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"/>
              </svg>
            ) : (
              <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                <path d="M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"/>
              </svg>
            )}
          </button>
          <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={() => document.getElementById("nav-links").classList.toggle("active")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
          </button>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="main">
        {/* Hero / Profile Section */}
        <section className="hero" id="bio">
          <div className="profile">
            <div className="profile__avatar-wrapper">
              <div className="profile__avatar">
                {CONFIG.avatar ? (
                  <img src={CONFIG.avatar} alt={CONFIG.name} referrerPolicy="no-referrer" />
                ) : (
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>
                )}
              </div>
              <span className="profile__badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              </span>
            </div>
            <h1 className="profile__name">{CONFIG.name}</h1>
            <p className="profile__title">{CONFIG.title}</p>
            <p className="profile__org">{CONFIG.organization}</p>

            <div className="social-icons">
              {CONFIG.socials.map((s, index) => (
                <a key={index} href={s.url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.platform} title={s.platform}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox={s.viewBox}><path d={s.path}/></svg>
                </a>
              ))}
            </div>

            <a href={CONFIG.resumeLink || '#'} target={CONFIG.resumeLink ? "_blank" : ""} rel="noopener noreferrer" className="btn-cv" style={!CONFIG.resumeLink ? {opacity: 0.5, cursor: 'default'} : {}} onClick={(e) => !CONFIG.resumeLink && e.preventDefault()} title={!CONFIG.resumeLink ? "Resume coming soon" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              See My Resume
            </a>
          </div>

          <div className="details">
            <div className="section-header">
              <div className="section-header__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-24-96a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm240-48l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
              </div>
              <h2>Professional Summary</h2>
            </div>
            <p className="summary-text">{CONFIG.summary}</p>

            <div className="section-header" id="education" style={{marginTop: '32px'}}>
              <div className="section-header__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"/></svg>
              </div>
              <h2>Education</h2>
            </div>
            <div className="edu-inline">
              {CONFIG.education.map((ed, i) => (
                <div key={i} className="edu-chip">
                  <div className="edu-chip__logo">
                    {CONFIG.universityLogo ? (
                      <img src={CONFIG.universityLogo} alt={ed.school} referrerPolicy="no-referrer" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d={gradCapPath}/></svg>
                    )}
                  </div>
                  <div className="edu-chip__text">
                    <p className="edu-chip__title">{ed.degree}</p>
                    <p className="edu-chip__sub">{ed.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-card reveal visible" id="certificates">
          <div className="section-header">
            <div className="section-header__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z"/></svg>
            </div>
            <h2>Certificates</h2>
          </div>
          <div className="edu-cards">
            {CONFIG.certificates.length === 0 ? (
              <div className="edu-card" style={{color: "var(--text-muted)", fontStyle: "italic"}}>
                <p>Certificates coming soon — stay tuned! 🎓</p>
              </div>
            ) : (
              CONFIG.certificates.map((cert, i) => (
                <a key={i} className="cert-card" href={cert.url} target="_blank" rel="noopener noreferrer">
                  <div className="cert-card__preview">
                    {cert.imageUrl ? (
                      <>
                        <img src={cert.imageUrl} alt={cert.title} referrerPolicy="no-referrer" loading="lazy" />
                        <div className="cert-card__overlay">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 92.9-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.8-35.7-46.1-87.7-92.9-131.1C433.5 68.8 368.8 32 288 32zM128 256a160 160 0 1 1 320 0 160 160 0 1 1 -320 0zm160 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                          <span>Click Here to View it</span>
                        </div>
                      </>
                    ) : (
                      <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <svg style={{width: "40px", height: "40px", fill: "var(--accent)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                      </div>
                    )}
                  </div>
                  <div className="cert-card__body">
                    <span className="cert-card__title">{cert.title}</span>
                    <span className="cert-card__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                    </span>
                  </div>
                </a>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footer__contact">
          <p className="footer__heading">Get in Touch</p>
          <div className="footer__links-row">
            <span className="footer__contact-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>
              {CONFIG.email}
            </span>
            <span className="footer__separator">•</span>
            <span className="footer__contact-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" alt="PH flag" style={{width: "18px", height: "12px", borderRadius: "2px", verticalAlign: "middle", objectFit: "cover"}} />
              {CONFIG.phoneDisplay}
            </span>
          </div>
        </div>
        <div className="footer__copy">
          <p>&copy; {new Date().getFullYear()} <a href={CONFIG.socials.find(s => s.platform === 'GitHub')?.url || '#'} target="_blank" rel="noopener noreferrer">{CONFIG.name}</a>. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
