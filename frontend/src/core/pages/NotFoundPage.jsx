import { Link } from 'react-router-dom'

// Shown for any address the app doesn't know.
export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1 className="page-title">Page not found</h1>
      <p className="muted">That page doesn't exist, or its part of the app isn't installed.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </main>
  )
}
