import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail } from "lucide-react";
import Layout from "../components/Layout";
import { Viber, Messenger, WhatsApp } from "../shared";

const DESTINATIONS = ["Malaysia", "Thailand", "Singapore", "Not sure yet"];

// Create a free form at https://formspree.io, then paste its endpoint here.
// Submissions arrive at the email you sign up with.
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Consultation() {
  const [params] = useSearchParams();
  const presetDest = DESTINATIONS.find((d) => d.toLowerCase() === (params.get("dest") || "").toLowerCase());

  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: presetDest || "Malaysia",
    level: "",
    course: "",
    intake: "",
    qualification: "",
    scholarship: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please add your name and phone / Viber number so we can reach you.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Form submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <section className="block cta">
        <div className="wrap">
          <div className="sec-head center reveal" style={{ marginBottom: 40 }}>
            <span className="eyebrow center">Free consultation</span>
            <h2>Book your free consultation.</h2>
            <p>Tell us a little about your plans and we'll reply within 24 hours — honest, no-pressure advice in Myanmar or English.</p>
          </div>

          <div className="cta-grid" style={{ alignItems: "start" }}>
            <div className="reveal">
              <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.3rem", marginBottom: 14 }}>Prefer to message us directly?</h3>
              <div className="contact-list">
                <a href="viber://chat?number=959958946184" className="crow"><span className="ci" style={{ background: "#7360F2" }}><Viber /></span><div><b>Viber</b><span>+95 9 958 946184</span></div></a>
                <a href="#" className="crow"><span className="ci" style={{ background: "#0084FF" }}><Messenger /></span><div><b>Messenger</b><span>Message our Facebook page</span></div></a>
                <a href="https://wa.me/601116714354" className="crow"><span className="ci" style={{ background: "#25D366" }}><WhatsApp /></span><div><b>WhatsApp (Malaysia)</b><span>+60 11 1671 4354</span></div></a>
                <a href="mailto:studygatewayasia@gmail.com" className="crow"><span className="ci" style={{ background: "#A4151A" }}><Mail size={22} /></span><div><b>Email</b><span>studygatewayasia@gmail.com</span></div></a>
              </div>
            </div>

            {status === "sent" ? (
              <div className="form-card reveal" style={{ textAlign: "center", padding: "56px 36px" }}>
                <h3 style={{ marginBottom: 10 }}>Thank you, {form.name.trim()}!</h3>
                <p className="sub" style={{ marginBottom: 0 }}>
                  We've received your request and will reach you on {form.phone.trim()} within 24 hours.
                  If it's urgent, message us on Viber or WhatsApp.
                </p>
              </div>
            ) : (
            <form className="form-card reveal" onSubmit={submit}>
              <h3>Request your free consultation</h3>
              <p className="sub">We reply within 24 hours. Your details stay private.</p>

              <div className="field"><label>Full name *</label><input type="text" placeholder="e.g. Aung Aung" value={form.name} onChange={set("name")} /></div>
              <div className="field"><label>Phone / Viber number *</label><input type="text" placeholder="+95 9 ..." value={form.phone} onChange={set("phone")} /></div>

              <div className="field-row">
                <div className="field"><label>Where do you want to study? *</label>
                  <select value={form.destination} onChange={set("destination")}>
                    {DESTINATIONS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div className="field"><label>Level of study *</label>
                  <select value={form.level} onChange={set("level")}>
                    <option value="">Select…</option>
                    <option>Foundation</option>
                    <option>Diploma</option>
                    <option>Bachelor's degree</option>
                    <option>Master's degree</option>
                    <option>English course</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="field"><label>Field or course of interest</label><input type="text" placeholder="e.g. Business, IT, Engineering, Medicine" value={form.course} onChange={set("course")} /></div>

              <div className="field-row">
                <div className="field"><label>Preferred intake</label>
                  <select value={form.intake} onChange={set("intake")}>
                    <option value="">Select…</option>
                    <option>As soon as possible</option>
                    <option>Next available intake</option>
                    <option>In 3–6 months</option>
                    <option>Next year</option>
                    <option>Just exploring for now</option>
                  </select>
                </div>
                <div className="field"><label>Highest qualification so far</label>
                  <select value={form.qualification} onChange={set("qualification")}>
                    <option value="">Select…</option>
                    <option>Currently in high school</option>
                    <option>Completed high school (matriculation)</option>
                    <option>Diploma</option>
                    <option>Bachelor's degree</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="field"><label>Interested in scholarships?</label>
                <select value={form.scholarship} onChange={set("scholarship")}>
                  <option value="">Select…</option>
                  <option>Yes, please</option>
                  <option>Maybe — tell me more</option>
                  <option>No, not needed</option>
                </select>
              </div>

              <div className="field"><label>Anything else? (optional)</label><textarea placeholder="Your questions, goals, or anything you'd like us to know…" value={form.message} onChange={set("message")} /></div>

              <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={status === "sending" ? { opacity: 0.6, cursor: "wait" } : undefined}>
                {status === "sending" ? "Sending…" : "Request my free consultation →"}
              </button>
              {status === "error" ? (
                <p className="form-note" style={{ color: "var(--red)", fontWeight: 700 }}>
                  Something went wrong sending your request. Please try again, or message us directly on Viber / WhatsApp.
                </p>
              ) : (
                <p className="form-note">Or message us directly on Viber / WhatsApp.</p>
              )}
            </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
