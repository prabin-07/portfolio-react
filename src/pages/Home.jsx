import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const FOCUS_AREAS = [
  { number: '01', title: 'Web interfaces', detail: 'Responsive React experiences with clear, thoughtful interactions.' },
  { number: '02', title: 'APIs & services', detail: 'Node.js and Express services designed to connect product features.' },
  { number: '03', title: 'Full-stack delivery', detail: 'From MongoDB data models to a polished interface, end to end.' },
]

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> OPEN TO FULL-TIME OPPORTUNITIES</div>
          <p className="hero-kicker">FULL-STACK DEVELOPER <span>·</span> MERN</p>
          <h1 className="hero-title">Prabin<br /><em>Pradeep</em><span className="hero-period">.</span></h1>
          <p className="hero-sub">
            I build web products from data layer to interface, with a focus on useful features and clean, reliable implementation.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-fill">Explore projects <span aria-hidden="true">↗</span></Link>
            <Link to="/contact" className="btn btn-line">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <aside className="hero-card" aria-label="MERN stack overview">
          <div className="hero-card-top"><span>TECHNOLOGY FOCUS</span><span className="hero-card-mark">✳</span></div>
          <div className="hero-card-title">One stack,<br /><em>many layers.</em></div>
          <div className="stack-list">
            <div><span>01</span><strong>MongoDB</strong><small>DATA</small></div>
            <div><span>02</span><strong>Express + Node</strong><small>BACKEND</small></div>
            <div><span>03</span><strong>React</strong><small>INTERFACE</small></div>
          </div>
          <div className="hero-card-foot"><span>KOTTAYAM, KERALA</span><span>BCA · MG UNIVERSITY</span></div>
        </aside>
        <div className="hero-meta"><span>PORTFOLIO / 2026</span><span>KOTTAYAM, KERALA, IN</span></div>
      </section>
      <section className="focus-section wrap" aria-labelledby="focus-title">
        <div className="focus-heading">
          <div>
            <p className="focus-overline">CAPABILITIES</p>
            <h2 id="focus-title">From idea to interface.</h2>
          </div>
          <Link to="/about" className="focus-more">More about me <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="focus-grid">
          {FOCUS_AREAS.map((area, index) => (
            <Reveal className="focus-card" key={area.number} delay={index * 70}>
              <span className="focus-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
