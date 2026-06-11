import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Flag } from "../shared";

/**
 * On-brand "Coming Soon" page for a destination that isn't ready yet.
 * Pass a `country` config: { name, flag, lede, tint }.
 *   flag = Flag component code ("my" | "th" | "sg").
 *   tint = CSS gradient for the banner (defaults to the brand red).
 */
export default function CountryTemplate({ country }) {
  const c = country;
  const tint = c.tint || "linear-gradient(135deg,var(--red),var(--red-deep))";

  return (
    <Layout>
      <section className="hero" style={{ padding: "80px 0 96px", minHeight: "62vh", display: "grid", placeItems: "center" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto", background: "#fff", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <div style={{ background: tint, height: 150, display: "grid", placeItems: "center", position: "relative" }}>
              <span style={{ width: 92, height: 92, borderRadius: "50%", background: "rgba(255,255,255,.16)", border: "1px solid rgba(255,255,255,.35)", display: "grid", placeItems: "center", backdropFilter: "blur(2px)" }}><Flag code={c.flag} size={48} /></span>
            </div>
            <div style={{ padding: "36px 32px 40px" }}>
              <span className="eyebrow center" style={{ justifyContent: "center" }}>Coming soon</span>
              <h1 style={{ fontSize: "clamp(2.2rem, 5.4vw, 3.4rem)", margin: "16px 0 18px", lineHeight: 1.06 }}>Study in {c.name}</h1>
              <p className="lede" style={{ color: "var(--slate)", margin: "0 auto 30px", maxWidth: 460, fontSize: "1.08rem" }}>{c.lede}</p>
              <div className="hero-actions" style={{ justifyContent: "center", marginBottom: 0 }}>
                <Link to={"/consultation?dest=" + c.name} className="btn btn-primary">Register your interest</Link>
                <Link to="/malaysia" className="btn btn-outline">Explore Malaysia</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
