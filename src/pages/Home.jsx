import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Flag } from "../shared";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="wrap">
          <div className="sec-head center reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
            <span className="eyebrow center">Myanmar's trusted study-abroad partner</span>
            <h1>Where do you want to study?</h1>
            <p>StudyGateway Asia helps Myanmar students choose the right university, win admission and scholarships, and arrive prepared. Pick a destination to get started.</p>
          </div>
        </div>
      </section>

      <section className="block" id="destinations">
        <div className="wrap">
          <div className="dest-grid">
            <div className="dest my reveal">
              <div className="cap"><span className="feat gold">Our Specialty</span><span className="flag"><Flag code="my" /></span><h3>Malaysia</h3></div>
              <div className="body">
                <p>World-ranked, English-taught universities at a fraction of Western tuition. The destination we know best.</p>
                <ul><li>Globally recognised degrees</li><li>Affordable cost of living</li><li>Straightforward student pass</li><li>Large Myanmar community</li></ul>
                <Link className="more" to="/malaysia">Explore Malaysia →</Link>
              </div>
            </div>
            <div className="dest th reveal">
              <div className="cap"><span className="feat soon">Coming Soon</span><span className="flag"><Flag code="th" /></span><h3>Thailand</h3></div>
              <div className="body">
                <p>International programmes in Bangkok and beyond — close to home, with a familiar culture.</p>
                <ul><li>Close to Myanmar</li><li>English-taught programmes</li><li>Vibrant student life</li></ul>
                <Link className="more" to="/thailand">Explore Thailand →</Link>
              </div>
            </div>
            <div className="dest sg reveal">
              <div className="cap"><span className="feat soon">Coming Soon</span><span className="flag"><Flag code="sg" /></span><h3>Singapore</h3></div>
              <div className="body">
                <p>Top-tier global education and a launchpad into careers across Asia for ambitious students.</p>
                <ul><li>World top-ranked universities</li><li>Major career hub</li><li>Safe, world-class city</li></ul>
                <Link className="more" to="/singapore">Explore Singapore →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
