import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="dot" /> AVAILABLE FOR FULL-TIME ROLES</div>
        <p className="hero-kicker">FULL-STACK DEVELOPER <span>·</span> MERN</p>
        <h1 className="hero-title">Prabin<br /><em>Pradeep</em><span className="hero-period">.</span></h1>
        <p className="hero-sub">
          I build things end-to-end: APIs, databases, and the interfaces on top of them.
          Working across the <strong>MERN stack</strong> — MongoDB, Express, React, and Node.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn btn-fill">View Projects <span aria-hidden="true">↗</span></Link>
          <Link to="/contact" className="btn btn-line">Get In Touch <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <aside className="hero-card" aria-label="Full-stack developer, MERN stack">
        <div className="hero-card-top"><span>01 / THE STACK</span><span className="hero-card-mark">✳</span></div>
        <div className="hero-card-title">One stack,<br /><em>many layers.</em></div>
        <div className="stack-list">
          <div><span>01</span><strong>MongoDB</strong><small>DATA</small></div>
          <div><span>02</span><strong>Express + Node</strong><small>BACKEND</small></div>
          <div><span>03</span><strong>React</strong><small>INTERFACE</small></div>
        </div>
        <div className="hero-card-foot"><span>KOTTAYAM, KERALA</span><span>BCA · FINAL YEAR</span></div>
      </aside>

      <div className="hero-meta"><span>PORTFOLIO / 2026</span><a href="#home-explore">SCROLL TO EXPLORE ↓</a></div>
    </section>
  )
}
