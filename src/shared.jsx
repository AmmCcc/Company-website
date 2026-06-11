import React from "react";
import { GraduationCap, FileText, BadgeCheck, Award, Home, Plane } from "lucide-react";

const LOGO_FULL = "/img/logo-full.png";
const LOGO_SHIELD = "/img/logo-shield.png";
const STUDENT = "/img/student.jpg";

const PARTNERS = [
  { src: "/img/monash-university-malaysia.png", alt: "Monash University Malaysia" },
  { src: "/img/university-of-nottingham-malaysia.png", alt: "University of Nottingham Malaysia" },
  { src: "/img/university-of-southampton-malaysia.png", alt: "University of Southampton Malaysia" },
  { src: "/img/taylor-s-university.png", alt: "Taylor's University" },
  { src: "/img/asia-pacific-university.png", alt: "Asia Pacific University" },
  { src: "/img/sunway-university.png", alt: "Sunway University" },
  { src: "/img/inti-international-university.png", alt: "INTI International University" },
  { src: "/img/segi-university.png", alt: "SEGi University" },
  { src: "/img/kings-university-college.png", alt: "Kings University College" },
  { src: "/img/lincoln-university-college.png", alt: "Lincoln University College" },
];

const SERVICES = [
  { Icon: GraduationCap, title: "University & Course Matching", desc: "We learn your goals and budget, then shortlist universities and programmes that genuinely fit you." },
  { Icon: FileText, title: "Application & Offer Letter", desc: "We prepare a clean, complete application and follow up with the university until your offer is confirmed." },
  { Icon: BadgeCheck, title: "Visa & Immigration", desc: "Student pass, medical and documentation — we guide every form and deadline for a smooth approval." },
  { Icon: Award, title: "Scholarship Guidance", desc: "We flag every fee waiver and merit scholarship you qualify for — 1 in 4 of our students wins one." },
  { Icon: Home, title: "Accommodation", desc: "Safe, verified housing near campus sorted before you fly, so you arrive to a room with your name on it." },
  { Icon: Plane, title: "Pre-Departure & Arrival", desc: "Briefings, packing guidance, airport pickup and settling-in support. You're never alone on arrival." },
];

const STEPS = [
  { n: 1, title: "Free Consultation", desc: "Share your goals and budget. We give honest, no-pressure advice on what's realistic." },
  { n: 2, title: "Match & Apply", desc: "We shortlist the right universities, prepare your documents and submit your application." },
  { n: 3, title: "Offer & Visa", desc: "Receive your offer letter, then we handle the student visa process end to end." },
  { n: 4, title: "Fly & Settle", desc: "Accommodation, airport pickup and arrival support — we're with you on day one." },
];

const WHY_POINTS = [
  { title: "Malaysia specialists", desc: "We focus deeply on Malaysia rather than spreading thin across twenty countries." },
  { title: "Honest advice in your language", desc: "Clear guidance in Myanmar language, with realistic expectations from the start." },
  { title: "No hidden costs", desc: "We explain every fee upfront so families know exactly what to expect." },
  { title: "Support that continues after you arrive", desc: "Our help doesn't stop once you've paid — we stay with you through settling in." },
];

const WHY_ROWS = [
  { n: "01", title: "Rooted in the community", desc: "Roots in Taunggyi and a base in Malaysia — real people, not a call centre." },
  { n: "02", title: "Lived the experience", desc: "We know Myanmar families and exactly what it takes to settle into Malaysian university life." },
  { n: "03", title: "End-to-end accountability", desc: "One team owns your journey from first enquiry to your first day on campus." },
];

const NAV = [
  ["/", "Home"],
  ["/malaysia", "Malaysia"],
  ["/thailand", "Thailand"],
  ["/singapore", "Singapore"],
];

const css = `
.sg *{margin:0;padding:0;box-sizing:border-box}
.sg{--red:#A4151A;--red-deep:#7E1113;--gold:#C19A3A;--gold-soft:#E8CC77;--ink:#1B1A19;--slate:#5C5A57;--bg:#fff;--bg-soft:#F8F6F2;--bg-soft2:#F1ECE4;--line:#E7E2DA;--radius:12px;--shadow:0 18px 44px -26px rgba(27,26,25,.45);--shadow-sm:0 8px 22px -14px rgba(27,26,25,.32);
  font-family:'Mulish',sans-serif;color:var(--ink);background:var(--bg);line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.sg h1,.sg h2,.sg h3,.sg h4{font-family:'Lora',serif;font-weight:600;line-height:1.14;letter-spacing:-.01em;color:var(--ink)}
.sg a{color:inherit;text-decoration:none}.sg img{display:block;max-width:100%}
.wrap{max-width:1200px;margin:0 auto;padding:0 32px}
.eyebrow{font-weight:700;font-size:.76rem;letter-spacing:.16em;text-transform:uppercase;color:var(--red);display:inline-flex;align-items:center;gap:9px}
.eyebrow::before{content:"";width:24px;height:2px;background:var(--gold)}
.eyebrow.center{justify-content:center}
.btn{display:inline-flex;align-items:center;gap:.5em;font-weight:700;font-size:.95rem;padding:13px 26px;border-radius:8px;border:1.6px solid transparent;cursor:pointer;transition:all .22s;white-space:nowrap;font-family:'Mulish'}
.btn-primary{background:var(--red);color:#fff}
.btn-primary:hover{background:var(--red-deep);transform:translateY(-2px);box-shadow:0 12px 22px -12px rgba(164,21,26,.7)}
.btn-outline{background:transparent;color:var(--ink);border-color:var(--line)}
.btn-outline:hover{border-color:var(--red);color:var(--red)}
.topbar{background:var(--ink);color:#d8d3ca;font-size:.82rem}
.topbar .wrap{display:flex;justify-content:space-between;align-items:center;height:42px}
.topbar a{color:#d8d3ca}.topbar a:hover{color:var(--gold-soft)}
.tb-left{display:flex;gap:22px}.tb-left span{display:inline-flex;align-items:center;gap:7px}
.tb-right{display:flex;gap:16px;align-items:center}
.hdr{position:sticky;top:0;z-index:1000;background:#fff;border-bottom:1px solid var(--line);transition:box-shadow .3s}
.hdr.scrolled{box-shadow:0 4px 22px -16px rgba(0,0,0,.5)}
.nav{display:flex;align-items:center;justify-content:space-between;height:80px}
.nav .logo img{height:44px}
.nav-links{display:flex;gap:32px}
.nav-links a{font-weight:600;font-size:.95rem;position:relative;padding:4px 0}
.nav-links a::after{content:"";position:absolute;left:0;bottom:-2px;width:0;height:2px;background:var(--red);transition:width .25s}
.nav-links a:hover{color:var(--red)}.nav-links a:hover::after{width:100%}
.nav-right{display:flex;align-items:center;gap:18px}
.burger{display:none;background:none;border:0;cursor:pointer;color:var(--ink)}
.hero{background:linear-gradient(180deg,#fff,var(--bg-soft));padding:74px 0 96px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;top:-120px;right:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(193,154,58,.12),transparent 70%)}
.hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:64px;align-items:center;position:relative}
.hero h1{font-size:clamp(2.5rem,4.6vw,3.75rem);margin:20px 0 22px}.hero h1 .accent{color:var(--red)}
.hero .lede{font-size:1.16rem;color:var(--slate);max-width:33em;margin-bottom:30px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:36px}
.hero-micro{display:flex;gap:34px;flex-wrap:wrap;padding-top:26px;border-top:1px solid var(--line)}
.hero-micro .m b{font-family:'Lora';font-size:1.75rem;color:var(--red);display:block;line-height:1}
.hero-micro .m span{font-size:.83rem;color:var(--slate);font-weight:600}
.hero-visual{position:relative}
.hero-photo{border-radius:18px;overflow:hidden;box-shadow:var(--shadow);aspect-ratio:4/4.6;border:5px solid #fff;position:relative}
.hero-photo img{width:100%;height:100%;object-fit:cover;object-position:center 28%}
.hero-photo::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(126,17,19,.78))}
.hero-photo .cap{position:absolute;left:20px;bottom:18px;z-index:2;color:#fff}
.hero-photo .cap b{font-family:'Lora';font-size:1.15rem}.hero-photo .cap span{display:block;font-size:.84rem;opacity:.9}
.gold-frame{position:absolute;inset:-14px -14px auto auto;width:60px;height:60px;border-top:3px solid var(--gold);border-right:3px solid var(--gold);border-radius:0 14px 0 0}
.float-card{position:absolute;background:#fff;border-radius:12px;box-shadow:var(--shadow);padding:15px 18px}
.float-card.c1{top:24px;left:-26px;display:flex;align-items:center;gap:12px}
.float-card.c1 .badge{width:42px;height:42px;border-radius:9px;background:#fdeceb;display:grid;place-items:center;flex:0 0 auto;color:var(--red)}
.float-card.c1 b{font-family:'Lora';font-size:1.4rem;line-height:1;display:block}
.float-card.c1 small{color:var(--slate);font-size:.78rem;font-weight:600}
.float-card.c2{bottom:34px;right:-24px;display:flex;align-items:center;gap:10px;padding:12px 16px}
.float-card.c2 .dot{width:10px;height:10px;border-radius:50%;background:#1faa59;box-shadow:0 0 0 4px rgba(31,170,89,.18)}
.float-card.c2 b{font-size:.9rem}
.partners{padding:60px 0;background:#fff;border-bottom:1px solid var(--line)}
.partners .sec-head{margin-bottom:30px}.partners .sec-head h2{font-size:clamp(1.5rem,2.6vw,2rem)}
.partner-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
.ptile{background:#fff;border:1px solid var(--line);border-radius:9px;height:74px;display:grid;place-items:center;padding:14px 20px;transition:transform .25s,box-shadow .25s,border-color .25s}
.ptile:hover{transform:translateY(-3px);box-shadow:var(--shadow-sm);border-color:#d9d0c2}
.ptile img{max-height:34px;max-width:100%;width:auto;object-fit:contain;filter:grayscale(1);opacity:.7;transition:filter .3s,opacity .3s}
.ptile:hover img{filter:none;opacity:1}
.more-note{text-align:center;margin-top:24px;color:var(--slate);font-weight:600;font-size:.92rem}
.stats{background:var(--ink);color:#fff}
.stats .row{display:grid;grid-template-columns:repeat(4,1fr)}
.stats .s{text-align:center;padding:42px 18px;border-right:1px solid rgba(255,255,255,.12)}
.stats .s:last-child{border-right:0}
.stats .s b{font-family:'Lora';font-size:clamp(2.2rem,3.6vw,3rem);color:var(--gold-soft);display:block;line-height:1.05}
.stats .s span{color:#cfc9bf;font-weight:600;font-size:.92rem}
.block{padding:96px 0}
.sec-head{max-width:44em;margin-bottom:54px}.sec-head.center{margin-left:auto;margin-right:auto;text-align:center}
.sec-head h2{font-size:clamp(1.9rem,3.4vw,2.7rem);margin:16px 0 14px}
.sec-head p{font-size:1.08rem;color:var(--slate)}
.dest-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.dest{background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;transition:transform .28s,box-shadow .28s;display:flex;flex-direction:column}
.dest:hover{transform:translateY(-6px);box-shadow:var(--shadow)}
.dest .cap{height:128px;position:relative;display:flex;align-items:flex-end;padding:18px 22px}
.dest.my .cap{background:linear-gradient(135deg,var(--red),var(--red-deep))}
.dest.th .cap{background:linear-gradient(135deg,#1f3a5f,#142840)}
.dest.sg .cap{background:linear-gradient(135deg,#3b3b3b,#1c1c1c)}
.dest .cap .flag{position:absolute;top:16px;right:18px;font-size:1.6rem}
.dest .cap h3{color:#fff;font-size:1.5rem}
.dest .feat{position:absolute;top:16px;left:18px;font-size:.66rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;padding:5px 10px;border-radius:5px}
.dest .feat.gold{background:var(--gold-soft);color:var(--red-deep)}
.dest .feat.soon{background:rgba(255,255,255,.22);color:#fff}
.dest .body{padding:22px;display:flex;flex-direction:column;flex:1}
.dest .body p{color:var(--slate);font-size:.96rem;margin-bottom:16px}
.dest ul{list-style:none;margin-bottom:20px}
.dest ul li{font-size:.9rem;padding:7px 0;border-bottom:1px dashed var(--line);display:flex;gap:9px;align-items:center;font-weight:500}
.dest ul li::before{content:"";width:6px;height:6px;background:var(--gold);border-radius:50%;flex:0 0 auto}
.dest .more{margin-top:auto;font-weight:700;color:var(--red);font-size:.92rem}
.services{background:var(--bg-soft)}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}
.svc{background:#fff;padding:34px 30px;transition:background .25s}.svc:hover{background:#fffdf9}
.svc .ico{width:50px;height:50px;border-radius:10px;background:linear-gradient(135deg,var(--red),var(--red-deep));display:grid;place-items:center;margin-bottom:18px;color:#fff}
.svc h3{font-size:1.2rem;margin-bottom:9px}.svc p{color:var(--slate);font-size:.95rem}
.success-card{display:grid;grid-template-columns:.85fr 1.15fr;border-radius:18px;overflow:hidden;box-shadow:var(--shadow);background:linear-gradient(150deg,var(--red),var(--red-deep))}
.success-photo{position:relative;min-height:380px}
.success-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 22%}
.success-body{padding:50px 48px;color:#fff;position:relative}
.success-body .shield-wm{position:absolute;right:18px;top:18px;width:84px;opacity:.16}
.success-body .tag{display:inline-flex;align-items:center;gap:7px;background:var(--gold-soft);color:var(--red-deep);font-weight:800;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;padding:6px 13px;border-radius:6px;margin-bottom:18px}
.success-body h2{color:#fff;font-size:clamp(1.7rem,3vw,2.3rem);margin-bottom:6px}
.success-body .uni{color:var(--gold-soft);font-weight:700;font-size:1.05rem;margin-bottom:18px}
.success-body p{opacity:.92;font-size:1.02rem;max-width:30em;margin-bottom:22px}
.success-chips{display:flex;gap:10px;flex-wrap:wrap}
.success-chips .chip{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);padding:8px 15px;border-radius:8px;font-weight:600;font-size:.86rem}
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.why-points{list-style:none;margin-top:8px}
.why-points li{display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--line)}
.why-points li:last-child{border-bottom:0}
.why-points .ck{width:30px;height:30px;border-radius:50%;background:#fdeceb;display:grid;place-items:center;flex:0 0 auto;margin-top:2px;color:var(--red)}
.why-points b{display:block;font-size:1.04rem;margin-bottom:2px}
.why-points span{color:var(--slate);font-size:.94rem}
.why-visual{background:linear-gradient(160deg,var(--bg-soft2),#fff);border:1px solid var(--line);border-radius:18px;padding:38px;box-shadow:var(--shadow-sm)}
.why-visual .vrow{display:flex;gap:16px;padding:18px 0;border-bottom:1px solid var(--line)}
.why-visual .vrow:last-child{border-bottom:0}
.why-visual .vnum{font-family:'Lora';font-size:1.7rem;color:var(--gold);font-weight:700;min-width:48px}
.why-visual h4{font-size:1.06rem}.why-visual p{color:var(--slate);font-size:.9rem}
.process{background:var(--bg-soft)}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.step{position:relative}
.step .n{width:54px;height:54px;border-radius:50%;background:#fff;border:2px solid var(--red);color:var(--red);font-family:'Lora';font-size:1.4rem;font-weight:700;display:grid;place-items:center;margin-bottom:18px;position:relative;z-index:2}
.step:not(:last-child)::after{content:"";position:absolute;top:27px;left:54px;right:-24px;height:2px;background:repeating-linear-gradient(90deg,var(--gold) 0 6px,transparent 6px 12px)}
.step h3{font-size:1.16rem;margin-bottom:8px}.step p{color:var(--slate);font-size:.94rem}
.cta{background:var(--bg-soft)}
.cta-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.cta h2{font-size:clamp(1.9rem,3.4vw,2.6rem);margin:14px 0 16px}
.cta .lede{color:var(--slate);font-size:1.08rem;margin-bottom:28px}
.contact-list{display:flex;flex-direction:column;gap:12px}
.crow{display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 18px;transition:border-color .2s,transform .2s}
.crow:hover{border-color:var(--red);transform:translateX(3px)}
.crow .ci{width:42px;height:42px;border-radius:9px;display:grid;place-items:center;flex:0 0 auto;color:#fff}
.crow b{display:block;font-size:.96rem}.crow span{font-size:.83rem;color:var(--slate)}
.form-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:36px;box-shadow:var(--shadow-sm)}
.form-card h3{font-size:1.4rem;margin-bottom:6px}.form-card .sub{color:var(--slate);font-size:.94rem;margin-bottom:22px}
.field{margin-bottom:15px}.field label{display:block;font-size:.82rem;font-weight:700;margin-bottom:6px}
.field input,.field select,.field textarea{width:100%;padding:12px 15px;border:1.5px solid var(--line);border-radius:8px;font-family:inherit;font-size:.95rem;color:var(--ink)}
.field textarea{resize:vertical;min-height:90px;line-height:1.5}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--red)}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:560px){.field-row{grid-template-columns:1fr}}
.form-card .btn{width:100%;justify-content:center;margin-top:6px}
.form-note{font-size:.8rem;color:var(--slate);text-align:center;margin-top:13px}
.ft{background:var(--ink);color:#b8b2a8;padding:66px 0 28px}
.foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1.2fr;gap:44px;margin-bottom:46px}
.fb-logo{display:flex;align-items:center;gap:13px;margin-bottom:18px}.fb-logo img{height:46px}
.fb-logo .fname{font-family:'Lora';color:#fff;font-size:1.3rem;font-weight:600;line-height:1.1}.fb-logo .fname b{color:var(--gold-soft);font-weight:600}
.foot-brand p{font-size:.93rem;color:#a39d92;max-width:26em}
.foot-col h5{color:#fff;font-size:.8rem;letter-spacing:.13em;text-transform:uppercase;margin-bottom:18px}
.foot-col a{display:block;color:#a39d92;font-size:.93rem;margin-bottom:12px}.foot-col a:hover{color:var(--gold-soft)}
.foot-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:.84rem;color:#8a857b}
.socials{display:flex;gap:12px}
.socials a{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.18);display:grid;place-items:center}
.socials a:hover{background:var(--red);border-color:var(--red)}.socials svg{width:16px;height:16px;fill:#cfc9bf}.socials a:hover svg{fill:#fff}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
.reveal.show{opacity:1;transform:none}
.mobile-menu{position:fixed;inset:0;background:#fff;z-index:2000;display:flex;flex-direction:column;padding:30px;gap:6px}
.mm-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.mm-top img{height:42px}
.mm-close{background:none;border:0;cursor:pointer;color:var(--ink)}
.mobile-menu a{font-family:'Lora';font-size:1.45rem;padding:12px 0;border-bottom:1px solid var(--line)}
.mobile-menu .btn{margin-top:16px;justify-content:center}
@media(max-width:980px){
  .hero-grid,.why-grid,.cta-grid,.success-card{grid-template-columns:1fr}
  .hero-visual{max-width:430px;margin:8px auto 0}.success-photo{min-height:300px}
  .dest-grid,.svc-grid{grid-template-columns:1fr 1fr}
  .partner-grid{grid-template-columns:repeat(4,1fr)}
  .steps{grid-template-columns:1fr 1fr;gap:30px}.step::after{display:none}
  .stats .row{grid-template-columns:1fr 1fr}.stats .s{padding:30px 12px}
  .stats .s:nth-child(2){border-right:0}.stats .s:nth-child(1),.stats .s:nth-child(2){border-bottom:1px solid rgba(255,255,255,.12)}
  .foot-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:680px){
  .wrap{padding:0 20px}
  .tb-left span:last-child,.nav-links,.nav-right .btn{display:none}
  .burger{display:flex}
  .block{padding:60px 0}
  .dest-grid,.svc-grid,.foot-grid{grid-template-columns:1fr}
  .partner-grid{grid-template-columns:repeat(3,1fr)}
  .success-body,.form-card{padding:30px}
  .float-card.c1{left:0}.float-card.c2{right:0}
}
`;

// Inline SVG flags — Windows doesn't render flag emojis, so we draw them.
const starPts = (cx, cy, spikes, outer, inner) => {
  const pts = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 ? inner : outer;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    pts.push((cx + r * Math.cos(a)).toFixed(2) + "," + (cy + r * Math.sin(a)).toFixed(2));
  }
  return pts.join(" ");
};

const FLAG_DEFS = {
  my: (
    <>
      <rect width="36" height="24" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => <rect key={i} y={(i * 24) / 14} width="36" height={24 / 14} fill="#CC0001" />)}
      <rect width="18" height="12" fill="#010066" />
      <circle cx="6.2" cy="6" r="3.6" fill="#FFCC00" />
      <circle cx="7.6" cy="6" r="3.1" fill="#010066" />
      <polygon points={starPts(11.6, 6, 14, 3.4, 1.5)} fill="#FFCC00" />
    </>
  ),
  th: (
    <>
      <rect width="36" height="24" fill="#fff" />
      <rect width="36" height="4" fill="#A51931" />
      <rect y="20" width="36" height="4" fill="#A51931" />
      <rect y="8" width="36" height="8" fill="#2D2A4A" />
    </>
  ),
  sg: (
    <>
      <rect width="36" height="24" fill="#fff" />
      <rect width="36" height="12" fill="#EE2536" />
      <circle cx="7" cy="6" r="4.2" fill="#fff" />
      <circle cx="8.8" cy="6" r="3.7" fill="#EE2536" />
      <polygon points={starPts(11.7, 3.4, 5, 1.1, 0.45)} fill="#fff" />
      <polygon points={starPts(9.5, 5, 5, 1.1, 0.45)} fill="#fff" />
      <polygon points={starPts(13.9, 5, 5, 1.1, 0.45)} fill="#fff" />
      <polygon points={starPts(10.4, 7.5, 5, 1.1, 0.45)} fill="#fff" />
      <polygon points={starPts(13, 7.5, 5, 1.1, 0.45)} fill="#fff" />
    </>
  ),
};

const Flag = ({ code, size = 30 }) => (
  <svg viewBox="0 0 36 24" width={size} height={(size * 2) / 3} style={{ borderRadius: 3, boxShadow: "0 1px 4px rgba(0,0,0,.3)", display: "block" }} aria-hidden="true">
    {FLAG_DEFS[code]}
  </svg>
);

const Viber = () => (<svg viewBox="0 0 24 24" fill="#fff" width="22" height="22"><path d="M12 2C6.5 2 2 5.9 2 10.7c0 2.7 1.5 5.1 3.8 6.7-.2.7-.7 2.4-.8 2.8 0 0 0 .3.2.4.1 0 .3 0 .4-.1.3-.2 2.4-1.6 3.3-2.2.9.1 1.9.2 2.9.2 5.5 0 10-3.9 10-8.7S17.5 2 12 2Z"/></svg>);
const Messenger = () => (<svg viewBox="0 0 24 24" fill="#fff" width="22" height="22"><path d="M12 2C6.3 2 2 6.1 2 11.5c0 3 1.4 5.7 3.7 7.5V22l3.4-1.9c.9.3 1.9.4 2.9.4 5.7 0 10-4.1 10-9.5S17.7 2 12 2Zm1 12.4-2.5-2.7-4.9 2.7 5.4-5.7 2.6 2.7 4.8-2.7-5.4 5.7Z"/></svg>);
const WhatsApp = () => (<svg viewBox="0 0 24 24" fill="#fff" width="22" height="22"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.8-4.3-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.2.2-.3.4-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2 0 .4 0 .5-.2l.7-.9c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3 0 .1 0 .6-.2 1.2Z"/></svg>);

export {
  LOGO_FULL, LOGO_SHIELD, STUDENT,
  PARTNERS, SERVICES, STEPS, WHY_POINTS, WHY_ROWS, NAV,
  css, Viber, Messenger, WhatsApp, Flag,
};
