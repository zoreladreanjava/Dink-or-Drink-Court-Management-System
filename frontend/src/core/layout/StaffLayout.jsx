import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu.jsx'

// The frame around every staff page: the navy side menu on the left, the page on the right.
export default function StaffLayout({ features }) {
  return (
    <div className="staff-layout">
      <SideMenu features={features} />
      <main className="staff-main">
        <Outlet />
      </main>
    </div>
  )
}
