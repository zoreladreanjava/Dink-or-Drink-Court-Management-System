import { Link, NavLink, Outlet } from 'react-router-dom'
import Brand from '../components/Brand.jsx'

// The frame around every player page: top bar with links, the page itself, then a footer.
// publicPages comes from App.jsx: one link per public page of every feature.
export default function PublicLayout({ publicPages }) {
  return (
    <div className="public-layout">
      <header className="topbar">
        <Link to="/" className="brand-link">
          <Brand />
        </Link>
        <nav className="topbar-nav">
          {publicPages.map((page) => (
            <NavLink key={page.path} to={`/${page.path}`}>
              {page.label}
            </NavLink>
          ))}
          <NavLink to="/staff" className="topbar-staff">
            Staff
          </NavLink>
        </nav>
      </header>

      {/* Outlet is where the current page appears */}
      <main className="public-main">
        <Outlet />
      </main>

      <footer className="public-footer">Dink or Drink · Inayawan, Cebu City</footer>
    </div>
  )
}
