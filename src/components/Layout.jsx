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
      <div className="grid-bg" aria-hidden="true" />
      <nav aria-label="Main navigation">
        <div className="wrap nav-inner">
          <NavLink to="/" className="logo">prabin<span>.</span>dev</NavLink>
          <div className={`nav-links${open ? ' open' : ''}`}>
            {LINKS.map(link => (
              <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => isActive ? 'active' : ''}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <button className="nav-toggle" onClick={() => setOpen(value => !value)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? '×' : '☰'}
          </button>
        </div>
      </nav>
      <main className="page" key={location.pathname}><Outlet /></main>
      <footer>© 2026 Prabin Pradeep <span aria-hidden="true">·</span> Full-Stack Developer <span aria-hidden="true">·</span> Kerala, India</footer>
    </>
  )
}
