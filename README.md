# AdminKit

> A full-featured admin dashboard built with Next.js 16 App Router, featuring a neumorphic design system, dark mode, route protection, and real CRUD flows backed by persistent mock data.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)

**Live demo:** [dashboard-with-next-js-eta.vercel.app](https://dashboard-with-next-js-eta.vercel.app/)

---

## Overview

AdminKit is a production-style admin panel that demonstrates modern Next.js patterns: App Router layouts, Server Actions, middleware-based auth, skeleton loading states, and debounced search via URL params. The UI is built on a hand-rolled neumorphic design system defined entirely in CSS variables — no external component library required.

---

## Features

- **Authentication** — Cookie-based login protected by `middleware.ts`; FOUC-free dark mode persisted in `localStorage`
- **Dashboard home** — Stat cards, scatter chart (Recharts), recent transactions, activity feed
- **Users module** — Paginated table, debounced live search, add / edit / delete via Server Actions
- **Products module** — Paginated table, debounced live search, add / edit / delete via Server Actions
- **Revenue page** — Bar chart analytics
- **Reports page** — Pie chart and stock bar chart
- **Teams page** — Department grid and member roster
- **Settings** — Profile, Appearance (dark/light mode toggle), Notifications, Account sections
- **Help & Support** — FAQ accordion
- **Skeleton loaders** — Every route has a `loading.tsx` skeleton
- **Page transitions** — Animated route changes via `PageTransition` component
- **Neumorphic design system** — `neu-flat`, `neu-inset`, `neu-button`, `neu-pressed` utility classes
- **Dark mode** — CSS variable swap on `[data-theme="dark"]`, inline-script FOUC prevention
- **Mock data persistence** — `globalThis` singleton keeps in-memory data stable across HMR reloads

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 (tokens in `globals.css`) |
| Charts | Recharts 3 |
| Icons | React Icons 5 |
| Auth | Middleware + cookie (`dashboard_auth`) |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
git clone https://github.com/zaqurbanov/adminkit.git
cd adminkit
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login credentials

The login page accepts any email address with the password below.

```
Email:    any@email.com
Password: admin123
```

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing / home page |
| `/login` | Login page |
| `/dashboard` | Main dashboard — stat cards, chart, transactions |
| `/dashboard/users` | Paginated users table with search |
| `/dashboard/users/add` | Add user form |
| `/dashboard/users/[id]/edit` | Edit user form |
| `/dashboard/users/settings` | Profile, appearance, notifications, account |
| `/dashboard/users/help` | Help & FAQ |
| `/dashboard/products` | Paginated products table with search |
| `/dashboard/products/add` | Add product form |
| `/dashboard/products/[id]/edit` | Edit product form |
| `/dashboard/revenue` | Revenue bar chart |
| `/dashboard/reports` | Pie chart and stock bar chart |
| `/dashboard/teams` | Teams, departments, member grid |

All `/dashboard/*` routes are protected by `middleware.ts`. Unauthenticated requests redirect to `/login`.

---

## Architecture

### Component directories

Two separate trees are intentional:

- `app/_components/` — Shell-level components: `Sidebar`, `Navbar`, `Footer`, `PageTransition`, and shared sub-components (`PageTitle`, `ActionButtons`, `UserInfo`).
- `components/` — Feature components consumed by page files: `CardContainer`, `Chart`, `Transaction`, `RightBar`, `ProductTableBody`, `UserTableBody`, `MenuTop`, `GenerateTableHeader`, `Pagination`, `StatusBadge`.

### Data flow

There is no external database. All data lives in memory using a `globalThis` singleton pattern that survives Hot Module Replacement.

```
mock/*.ts           →  raw static arrays (source of truth on cold start)
services/*.ts       →  async functions that read/write globalThis data, simulate pagination
app/**/page.tsx     →  Server Components call services, pass results down
Server Actions      →  mutate globalThis data, revalidate paths
```

### Neumorphic design system

All design tokens, keyframes, and utility classes are defined in `app/globals.css` — there is no `tailwind.config.js`.

**Surface classes:**

| Class | Description |
|---|---|
| `neu-flat` | Elevated card surface; hovers into inset |
| `neu-inset` | Recessed inner surface; hovers into flat |
| `neu-button` | Interactive button variant |
| `neu-pressed` | Active/pressed state |

**Brand CSS variables:**

```css
--color-primary:      #7878ec
--color-primary-dark: #3737dd
--color-success:      #22c55e
--color-danger:       #ef4444
--color-warning:      #f59e0b
```

**Animation utility classes** (use `animationDelay` + `animationFillMode: 'both'` inline styles for stagger effects):

`animate-fade-in` · `animate-fade-up` · `animate-fade-down` · `animate-slide-in-right` · `animate-slide-in-left` · `animate-scale-in` · `animate-shimmer` · `animate-float` · `animate-glow-pulse`

### Dark mode

Dark mode is applied via a `data-theme="dark"` attribute on `<html>`. An inline `<script>` in `app/layout.tsx` reads `localStorage` before React hydrates, preventing flash of unstyled content (FOUC). The toggle lives in `app/_components/navbar/ThemeToggle.tsx`.

### Route protection

`middleware.ts` matches `/dashboard/:path*` and redirects to `/login` if the `dashboard_auth` cookie is absent. The login Server Action sets this cookie on success.

### Key types

- `StatusType` (`types/statusBadge.ts`) — `"pending" | "done" | "cancelled" | "default"`. Used by `StatusBadge` and `colorSchema()`.
- `Menu` / `MenuItem` (`constants/constants.tsx`) — sidebar navigation structure.

---

## Project Structure

```
.
├── app/
│   ├── _components/          # Shell-level layout components
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── sharedComponents/
│   │   └── PageTransition.tsx
│   ├── dashboard/
│   │   ├── layout.tsx        # Shared dashboard shell (Sidebar + Navbar + Footer)
│   │   ├── loading.tsx       # Skeleton for main dashboard
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── reports/
│   │   ├── revenue/
│   │   ├── teams/
│   │   └── users/
│   ├── login/
│   ├── globals.css           # All design tokens, neumorphic utilities, keyframes
│   ├── layout.tsx            # Root layout (dark mode inline script lives here)
│   └── page.tsx
├── components/               # Feature components
├── constants/                # Sidebar nav, table headers
├── helpers/                  # Shared utility functions
├── mock/                     # Static seed data
├── services/                 # Data access layer (reads/writes globalThis mock store)
├── types/                    # Shared TypeScript types
├── middleware.ts             # Auth guard for /dashboard routes
├── next.config.ts
└── package.json
```

---

## Adding a New Dashboard Page

1. Create `app/dashboard/<page-name>/page.tsx` (Server Component).
2. Create `app/dashboard/<page-name>/loading.tsx` with a skeleton.
3. Add mock data to `mock/` and a service function to `services/`.
4. Add the sidebar link in `constants/constants.tsx` under the `Menu` array.

---

## Author

**Zaur Qurbanov**

- GitHub: [@zaqurbanov](https://github.com/zaqurbanov)
- LinkedIn: [zaurqurbanov](https://www.linkedin.com/in/zaurqurbanov)
- Portfolio: [portfolio-frontend-yta9.vercel.app](https://portfolio-frontend-yta9.vercel.app/)

---

## License

This project is open source and available under the [MIT License](LICENSE).
