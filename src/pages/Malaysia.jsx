import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Layout from "../components/Layout";
import { STUDENT, LOGO_SHIELD, PARTNERS, SERVICES, WHY_POINTS, WHY_ROWS, STEPS, Flag } from "../shared";

export default function Malaysia() {
  return (
    <Layout>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal">Myanmar's trusted bridge to Malaysia</span>
            <h1 className="reveal">Study in <span className="accent">Malaysia</span> with guidance you can trust.</h1>
            <p className="lede reveal">StudyGateway Asia helps Myanmar students choose the right university, win admission and scholarships, and arrive prepared — with honest advice, in your language, every step of the way.</p>
            <div className="hero-actions reveal">
              <Link to="/consultation?dest=Malaysia" className="btn btn-primary">Book your free consultation</Link>
              <a href="#success" className="btn btn-outline">See a success story</a>
            </div>
            <div className="hero-micro reveal">
              <div className="m"><b>20+</b><span>Students placed</span></div>
              <div className="m"><b>30+</b><span>Partner universities</span></div>
              <div className="m"><b>100%</b><span>Visa success</span></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-photo">
              <span className="gold-frame" />
              <img src={STUDENT} alt="StudyGateway Asia student placed at Monash University" />
              <div className="cap"><b>May Thet Naing</b><span>Now at Monash University Malaysia</span></div>
            </div>
            <div className="float-card c1">
              <span className="badge"><Check size={22} /></span>
              <div><b>100%</b><small>Visa approval rate</small></div>
            </div>
            <div className="float-card c2"><span className="dot" /><b>Now accepting July intake</b></div>
          </div>
        </div>
      </section>

      <section className="partners" id="partners">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Popular Universities</span>
            <h2>Trusted pathways to Malaysia's top universities.</h2>
          </div>
          <div className="partner-grid">
            {PARTNERS.map((p) => <div className="ptile reveal" key={p.alt}><img src={p.src} alt={p.alt} /></div>)}
          </div>
          <p className="more-note">…and 30+ partner universities across Malaysia.</p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap"><div className="row">
          <div className="s"><b>20+</b><span>Students placed abroad</span></div>
          <div className="s"><b>30+</b><span>Partner universities</span></div>
          <div className="s"><b>100%</b><span>Student visa success</span></div>
          <div className="s"><b>25%</b><span>Awarded scholarships</span></div>
        </div></div>
      </section>

      <section className="block" id="destinations">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Where you can study</span>
            <h2>Malaysia today — Thailand {"&"} Singapore next.</h2>
            <p>We specialise deeply in Malaysia, and we're expanding to Thailand and Singapore. We match you to the country, city and campus that fit your goals, budget and visa situation.</p>
          </div>
          <div className="dest-grid">
            <div className="dest my reveal">
              <div className="cap"><span className="feat gold">Our Specialty</span><span className="flag"><Flag code="my" /></span><h3>Malaysia</h3></div>
              <div className="body">
                <p>World-ranked, English-taught universities at a fraction of Western tuition. The smartest first step abroad — and the destination we know best.</p>
                <ul><li>Globally recognised degrees</li><li>Affordable cost of living</li><li>Straightforward student pass</li><li>Large Myanmar community</li></ul>
                <Link className="more" to="/consultation?dest=Malaysia">Start your application →</Link>
              </div>
            </div>
            <div className="dest th reveal">
              <div className="cap"><span className="feat soon">Coming Soon</span><span className="flag"><Flag code="th" /></span><h3>Thailand</h3></div>
              <div className="body">
                <p>International programmes in Bangkok and beyond — close to home, with a familiar culture. Now opening up for our students.</p>
                <ul><li>Close to Myanmar</li><li>English-taught programmes</li><li>Vibrant student life</li></ul>
                <Link className="more" to="/thailand">Explore Thailand →</Link>
              </div>
            </div>
            <div className="dest sg reveal">
              <div className="cap"><span className="feat soon">Coming Soon</span><span className="flag"><Flag code="sg" /></span><h3>Singapore</h3></div>
              <div className="body">
                <p>Top-tier global education and a launchpad into careers across Asia for ambitious students. Joining our destinations soon.</p>
                <ul><li>World top-ranked universities</li><li>Major career hub</li><li>Safe, world-class city</li></ul>
                <Link className="more" to="/singapore">Explore Singapore →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block services" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Full support — from first question to first day.</h2>
            <p>One team and one point of contact for your whole journey. No being passed around between agents.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map(({ Icon, title, desc }) => (
              <div className="svc reveal" key={title}>
                <div className="ico"><Icon size={25} strokeWidth={1.7} /></div>
                <h3>{title}</h3><p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="success">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Proud moment</span>
            <h2>Real students. Real results.</h2>
          </div>
          <div className="success-card reveal">
            <div className="success-photo"><img src={STUDENT} alt="May Thet Naing, placed at Monash University Malaysia" /></div>
            <div className="success-body">
              <img className="shield-wm" src={LOGO_SHIELD} alt="" />
              <span className="tag">🎉 Success Story</span>
              <h2>May Thet Naing</h2>
              <div className="uni">Monash University Malaysia (36th in ranking worldwide) </div>
              <p>Placed into the Bachelor of Computer Science in Data Science for the July intake. From first consultation to confirmed offer, we guided every step — and her parents knew exactly what to expect throughout.</p>
              <div className="success-chips">
                <span className="chip">📘 Computer Science · Data Science</span>
                <span className="chip">📅 July Intake</span>
                <span className="chip">✅ Visa Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="why">
        <div className="wrap why-grid">
          <div className="reveal">
            <span className="eyebrow">Why families trust us</span>
            <h2 style={{ margin: "16px 0 20px" }}>Built by people who made the same journey.</h2>
            <ul className="why-points">
              {WHY_POINTS.map((p) => (
                <li key={p.title}><span className="ck"><Check size={16} strokeWidth={2.4} /></span><div><b>{p.title}</b><span>{p.desc}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="why-visual reveal">
            {WHY_ROWS.map((r) => (
              <div className="vrow" key={r.n}><span className="vnum">{r.n}</span><div><h4>{r.title}</h4><p>{r.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="block process" id="process">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">How it works</span>
            <h2>Four simple steps to studying abroad.</h2>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step reveal" key={s.n}><div className="n">{s.n}</div><h3>{s.title}</h3><p>{s.desc}</p></div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
