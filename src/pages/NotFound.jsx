import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound wrap">
      <div className="code">404</div>
      <p className="hero-sub" style={{ marginTop: 16 }}>Route not found. Try <Link to="/" className="btn-line" style={{ textDecoration: 'underline' }}>home</Link>.</p>
    </section>
  )
}
