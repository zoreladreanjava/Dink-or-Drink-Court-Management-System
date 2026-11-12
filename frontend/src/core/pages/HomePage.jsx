import { Link } from 'react-router-dom'

// The first page players see. publicPages comes from App.jsx,
// so there is one button for each player page that exists.
export default function HomePage({ publicPages }) {
  return (
    <section className="hero">
      <p className="hero-kicker">Indoor pickleball · Inayawan, Cebu City</p>
      <h1 className="hero-title">See open hours and book the court yourself.</h1>
      <p className="hero-text">
        No more waiting for a reply on Messenger. Pick a free hour, pay the deposit by GCash,
        and you're set.
      </p>
      <div className="hero-actions">
        {publicPages.map((page) => (
          <Link key={page.path} to={`/${page.path}`} className="btn btn-primary">
            {page.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
