import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const target = 'whoami'

  useEffect(() => {
    let i = 0
    let timeout
    const start = setTimeout(function type() {
      if (i <= target.length) {
        setTyped(target.slice(0, i))
        i++
        timeout = setTimeout(type, 90)
      } else {
        setDone(true)
      }
    }, 300)
    return () => { clearTimeout(start); clearTimeout(timeout) }
  }, [])

  return (
    <section className="hero wrap">
      <div className="eyebrow"><span className="dot" /> AVAILABLE FOR FULL-TIME ROLES</div>
      <div className="terminal">
        <span className="prompt">$</span> <span id="typed" className={done ? 'done' : ''}>{typed}</span>
      </div>
      <p className="hero-sub">
        I'm <strong>Prabin Pradeep</strong>, a full-stack developer working in the
        <strong> MERN stack</strong> — MongoDB, Express, React, Node. I build things
        end-to-end: APIs, databases, and the interfaces on top of them.
      </p>
      <div className="hero-cta">
        <Link to="/projects" className="btn btn-fill">View Projects</Link>
        <Link to="/contact" className="btn btn-line">Get In Touch</Link>
      </div>
      <div className="hero-meta">
        <span>Kottayam, Kerala, IN</span>
        <span>BCA — Final Year</span>
      </div>
    </section>
  )
}
