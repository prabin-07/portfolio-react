import Reveal from '../components/Reveal.jsx'

const PROJECTS = [
  {
    name: 'Advocate AI',
    github: 'https://github.com/prabin-07/advlaw',
    desc: 'A React-powered legal assistant platform pairing a modern Vite frontend with a Python backend for legal-domain logic. Includes data visualisation for case or usage trends and client-side routing across multiple views.',
    stack: ['React 19', 'Vite', 'Tailwind CSS 4', 'React Router', 'Recharts', 'Python'],
  },
  {
    name: 'Petromine — Smart Fuel Price Locker',
    github: 'https://github.com/prabin-07/PetromineE',
    desc: 'A full-stack app that tracks fuel prices over time and lets users lock in a preferred price to plan purchases. Node/Express backend with scheduled price-update logic, and a React dashboard for price-trend visualisation and price-lock management.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    name: 'Task Tracker',
    github: 'https://github.com/prabin-07/ProjectTaskTracker',
    desc: 'A full-stack task management app with complete CRUD — create, update, prioritise, and track task completion status — secured with JWT authentication and protected routes on both frontend and backend.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
]

export default function Projects() {
  return (
    <section className="page-section first wrap">
      <Reveal className="section-head" as="div">
        <span className="section-num">04</span><span className="section-title">Projects</span>
      </Reveal>
      <div className="proj-grid">
        {PROJECTS.map(p => (
          <Reveal className="proj-card" key={p.name}>
            <div className="proj-top">
              <div className="proj-name">{p.name}</div>
              <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">GITHUB →</a>
            </div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-stack">
              {p.stack.map(s => <span key={s}>{s}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
