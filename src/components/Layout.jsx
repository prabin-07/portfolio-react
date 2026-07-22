import { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'home', end: true },
  { to: '/about', label: 'about' },
  { to: '/skills', label: 'skills' },
  { to: '/experience', label: 'experience' },
  { to: '/projects', label: 'projects' },
  { to: '/contact', label: 'contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <div className="grid-bg" />
      <nav>
        <div className="wrap nav-inner">
          <NavLink to="/" className="logo">prabin<span>.</span>dev</NavLink>
          <div className={`nav-links${open ? ' open' : ''}`}>
            {LINKS.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? '×' : '☰'}
          </button>
        </div>
      </nav>

      <main className="page" key={location.pathname}>
        <Outlet />
      </main>

      <footer>
        © 2026 Prabin Pradeep — built with React + Vite, deployed on Vercel.
      </footer>
    </>
  )
}
