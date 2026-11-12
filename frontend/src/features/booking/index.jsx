import BookCourtPage from './pages/BookCourtPage.jsx'
import VerifyDepositsPage from './pages/VerifyDepositsPage.jsx'

// Court booking (Java). The app reads this object to add these pages and menu links.
// Public pages open at /<path>; staff pages open at /staff/<path>.
export default {
  id: 'booking',
  menuGroup: 'Bookings',
  publicPages: [{ path: 'book', label: 'Book a Court', element: <BookCourtPage /> }],
  staffPages: [
    { path: 'deposits', label: 'Verify Deposits', element: <VerifyDepositsPage />, ownerOnly: false },
  ],
}
