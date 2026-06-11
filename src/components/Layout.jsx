import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X } from "lucide-react";
import { LOGO_FULL, LOGO_SHIELD, NAV, css } from "../shared";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Re-run reveal animations whenever the page (route) changes.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".sg .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  // Close the mobile menu after navigating to a new page.
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <div className="sg">
      <style>{css}</style>

      <div className="topbar">
        <div className="wrap">
          <div className="tb-left">
            <span><Mail size={14} /> studygatewayasia@gmail.com</span>
            <span><Phone size={14} /> +95 9 958 946184</span>
          </div>
          <div className="tb-right"><a href="https://www.facebook.com/profile.php?id=61580793884076" target="_blank" rel="noopener">Facebook</a><a href="https://www.tiktok.com/@studygateway.asia" target="_blank" rel="noopener">TikTok</a></div>
        </div>
      </div>

      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        <div className="wrap nav">
          <Link to="/" className="logo"><img src={LOGO_FULL} alt="StudyGateway Asia" /></Link>
          <nav className="nav-links">{NAV.map(([h, t]) => <Link key={h} to={h}>{t}</Link>)}</nav>
          <div className="nav-right">
            <Link to="/consultation" className="btn btn-primary">Book Free Consultation</Link>
            <button className="burger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={26} /></button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mm-top">
            <img src={LOGO_FULL} alt="StudyGateway Asia" />
            <button className="mm-close" onClick={() => setMenuOpen(false)}><X size={30} /></button>
          </div>
          {NAV.map(([h, t]) => <Link key={h} to={h} onClick={() => setMenuOpen(false)}>{t}</Link>)}
          <Link to="/consultation" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Book Free Consultation</Link>
        </div>
      )}

      {children}

      <footer className="ft">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="fb-logo"><img src={LOGO_SHIELD} alt="" /><span className="fname">StudyGateway <b>Asia</b></span></div>
              <p>Guiding Myanmar students to top universities in Malaysia — honestly, and in your language. Thailand and Singapore coming soon.</p>
            </div>
            <div className="foot-col"><h5>Explore</h5><Link to="/">Home</Link><Link to="/malaysia">Malaysia</Link><Link to="/thailand">Thailand</Link><Link to="/singapore">Singapore</Link></div>
            <div className="foot-col"><h5>Destinations</h5><Link to="/malaysia">Study in Malaysia</Link><Link to="/thailand">Thailand (soon)</Link><Link to="/singapore">Singapore (soon)</Link></div>
            <div className="foot-col"><h5>Get in touch</h5><a href="mailto:studygatewayasia@gmail.com">studygatewayasia@gmail.com</a><a href="tel:+959958946184">+95 9 958 946184 (Myanmar)</a><a href="tel:+601116714354">+60 11 1671 4354 (Malaysia)</a><a href="#">Office — opening soon</a></div>
          </div>
          <div className="foot-bottom">
            <span>© 2025 StudyGateway Asia. All rights reserved.</span>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61580793884076" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-2 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z" /></svg></a>
              <a href="https://www.tiktok.com/@studygateway.asia" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M16 3c.3 2 1.7 3.5 3.7 3.8v2.7c-1.4 0-2.7-.4-3.7-1.1V15a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2 2.2V3h3Z" /></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
