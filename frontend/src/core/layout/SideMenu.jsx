import { Link, NavLink } from 'react-router-dom'
import Brand from '../components/Brand.jsx'

// The staff side menu. It is built from the features that exist,
// so a missing feature simply has no heading or links here.
export default function SideMenu({ features }) {
  const featuresWithStaffPages = features.filter((feature) => feature.staffPages?.length > 0)

  return (
    <aside className="side-menu">
      <Link to="/" className="brand-link">
        <Brand />
      </Link>

      <nav className="side-menu-nav">
        <p className="side-menu-group">Court</p>
        {/* "end" makes this link active only on exactly /staff */}
        <NavLink to="/staff" end>
          Today's Schedule
        </NavLink>

        {featuresWithStaffPages.map((feature) => (
          <div key={feature.id}>
            <p className="side-menu-group">{feature.menuGroup}</p>
            {feature.staffPages.map((page) => (
              <NavLink key={page.path} to={`/staff/${page.path}`}>
                {page.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
