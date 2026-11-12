# Dink or Drink Court Management System

A web app for **Dink or Drink**, a one-court indoor pickleball business in Inayawan, Cebu City.

- **Players:** see open hours, book the court with a GCash deposit, and sign up for open play, tournaments and coaching, all without messaging the owner first.
- **Staff:** verify deposits, add walk-ins, and record paddle rentals and drink sales in one shared schedule, so the same hour can't be booked twice.
- **Owner:** gets a nightly sales tally.

## Team and parts

Each member owns one part. Parts never depend on each other: each one only uses the shared core, so the app still runs if any part is removed.

| Member | Part | Back end (`backend/src/main/java/com/dinkordrink/`) | Front end (`frontend/src/`) |
|---|---|---|---|
| Zorel Adrean R. Java | Shared core | `core/` | `core/` |
| Zorel Adrean R. Java | Court booking | `booking/` | `features/booking/` |
| Ashton N. Ruiz | Rentals and sales | `sales/` | `features/sales/` |
| Jundyll Kendrich L. Jaca | Events (open play, tournaments, coaching) | `events/` | `features/events/` |

## Tech

| Layer | Stack |
|---|---|
| Front end | React + Vite (JavaScript), React Router, plain CSS |
| Back end | Spring Boot, Java 17, Maven |
| Database | MySQL-compatible (TiDB Cloud) |

## Running it on your laptop

You need [Node.js 22](https://nodejs.org/), [Git](https://git-scm.com/) and, for the back end, [Java 17](https://adoptium.net/temurin/releases/?version=17).

**1. Repo tools (once, in the main folder).** This turns on the commit-message check:

```
npm install
```

**2. Front end:**

```
cd frontend
npm install
npm run dev
```

Then open http://localhost:5173.

The back end setup will be added here once it exists.

## How a feature plugs into the front end

The app finds every `frontend/src/features/<name>/index.jsx` by itself, so a new feature needs no edits outside its own folder. Each `index.jsx` exports its pages:

```jsx
export default {
  id: 'booking',
  menuGroup: 'Bookings',      // heading in the staff side menu
  publicPages: [{ path: 'book', label: 'Book a Court', element: <BookCourtPage /> }],
  staffPages: [{ path: 'deposits', label: 'Verify Deposits', element: <VerifyDepositsPage /> }],
}
```

- Public pages open at `/<path>`.
- Staff pages open at `/staff/<path>` and appear in the staff side menu under `menuGroup`.

## Commits

Every commit message must follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). After `npm install` in the main folder, git refuses messages that don't.

```
<type>(<scope>): <short description>
```

- **Types:** `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `build`, `chore`, `ci`, `perf`, `revert`
- **Scopes:** `core`, `booking`, `sales`, `events`. Leave the scope out for changes to the whole repo.
- **Example:** `feat(sales): add the cart to the record a sale page`

## Workflow

1. Work on your own branch, for example `feat/sales-record-page`.
2. Open a pull request into `main`.
3. Pull requests are merged with **Rebase and merge**, so every commit keeps its author and no merge commits are added.
