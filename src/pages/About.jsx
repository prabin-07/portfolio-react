import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <section className="page-section first wrap">
      <Reveal className="section-head" as="div">
        <span className="section-num">01</span><span className="section-title">About</span>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-text" delay={80}>
          <p>BCA graduate specializing in full-stack web development, with hands-on MERN experience from
          an internship at <strong>ICT Academy, Technopark, Trivandrum</strong>.</p>
          <p>I've built two end-to-end applications from scratch — <strong>Petromine</strong>, a smart fuel
          price tracker, and a <strong>task management system</strong> with JWT authentication — and I'm
          currently building <strong>Advocate AI</strong>, a legal-assistant platform with a Python backend.</p>
          <p>Comfortable across the whole stack: MongoDB and Node on the backend, React on the front,
          and the REST APIs that connect them.</p>
        </Reveal>
        <Reveal className="fact-list" delay={160}>
          <div className="fact"><span className="fact-k">role</span><span className="fact-v">Full-Stack Developer (MERN)</span></div>
          <div className="fact"><span className="fact-k">education</span><span className="fact-v">BCA, MG University</span></div>
          <div className="fact"><span className="fact-k">internship</span><span className="fact-v">ICT Academy, Technopark</span></div>
          <div className="fact"><span className="fact-k">languages</span><span className="fact-v">English, Hindi, Malayalam</span></div>
          <div className="fact"><span className="fact-k">location</span><span className="fact-v">Kottayam, Kerala</span></div>
        </Reveal>
      </div>
    </section>
  )
}
