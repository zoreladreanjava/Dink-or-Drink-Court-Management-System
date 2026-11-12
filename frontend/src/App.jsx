import { Routes, Route } from 'react-router-dom'
import features from './core/features.js'
import PublicLayout from './core/layout/PublicLayout.jsx'
import StaffLayout from './core/layout/StaffLayout.jsx'
import HomePage from './core/pages/HomePage.jsx'
import TodaySchedulePage from './core/pages/TodaySchedulePage.jsx'
import NotFoundPage from './core/pages/NotFoundPage.jsx'

// Collect the pages of every feature that exists into two lists.
const publicPages = features.flatMap((feature) => feature.publicPages ?? [])
const staffPages = features.flatMap((feature) => feature.staffPages ?? [])

export default function App() {
  return (
    <Routes>
      {/* Pages for players: no login needed */}
      <Route element={<PublicLayout publicPages={publicPages} />}>
        <Route index element={<HomePage publicPages={publicPages} />} />
        {publicPages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Route>

      {/* Pages for staff and the owner, under /staff */}
      <Route path="staff" element={<StaffLayout features={features} />}>
        <Route index element={<TodaySchedulePage />} />
        {staffPages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
