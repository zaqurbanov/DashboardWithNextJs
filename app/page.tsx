import Link from "next/link";
import {
  MdDashboard,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  MdBarChart,
  MdArrowForward,
  MdCode,
  MdAutoGraph,
  MdSettings,
  MdSearch,
  MdOutlineGroup,
  MdReceiptLong,
  MdOutlineOpenInNew,
  MdFavorite,
} from "react-icons/md";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import ThemeToggle from "./_components/navbar/ThemeToggle";

/* ─── Data ─────────────────────────────────── */

const FEATURES = [
  {
    icon: MdDashboard,
    title: "Dashboard Overview",
    desc: "Animated stat cards, scatter chart via Recharts, live transaction feed and activity sidebar.",
    delay: 0,
  },
  {
    icon: MdPeople,
    title: "User Management",
    desc: "Paginated table with search, add/edit/delete, role badges and status indicators.",
    delay: 60,
  },
  {
    icon: MdOutlineProductionQuantityLimits,
    title: "Product Catalog",
    desc: "Full CRUD on products — paginated listing, neumorphic form and on-the-fly search.",
    delay: 120,
  },
  {
    icon: MdBarChart,
    title: "Revenue Analytics",
    desc: "Monthly revenue bar chart, currency breakdown and complete transaction history.",
    delay: 180,
  },
  {
    icon: MdAutoGraph,
    title: "Reports",
    desc: "Donut pie chart for tx status, horizontal stock bar chart and user role progress bars.",
    delay: 240,
  },
  {
    icon: MdOutlineGroup,
    title: "Teams",
    desc: "Department cards, admin/manager breakdowns and full member grid with online status.",
    delay: 300,
  },
  {
    icon: MdSearch,
    title: "Live Search",
    desc: "Debounced URL-based search — SSR-compatible, bookmarkable, no backend required.",
    delay: 360,
  },
  {
    icon: MdSettings,
    title: "Settings",
    desc: "Profile editor, dark/light theme switcher, notification preferences and account zone.",
    delay: 420,
  },
  {
    icon: MdReceiptLong,
    title: "Help & Support",
    desc: "Accordion FAQ, resource cards, email and live chat contact blocks.",
    delay: 480,
  },
];

const STACK = [
  { icon: SiNextdotjs,   label: "Next.js 16",      color: "#000" },
  { icon: SiReact,       label: "React 19",         color: "#61dafb" },
  { icon: SiTypescript,  label: "TypeScript 5",     color: "#3178c6" },
  { icon: SiTailwindcss, label: "Tailwind CSS v4",  color: "#06b6d4" },
];

const STATS = [
  { value: "9+",  label: "Pages"       },
  { value: "35+", label: "Components"  },
  { value: "4",   label: "Charts"      },
  { value: "100%", label: "TypeScript" },
];

const SOCIAL = [
  { icon: SiGithub,   label: "GitHub",    href: "https://github.com/zaqurbanov"                   },
  { icon: SiLinkedin, label: "LinkedIn",  href: "https://www.linkedin.com/in/zaurqurbanov"        },
  { icon: MdCode,     label: "Portfolio", href: "https://portfolio-frontend-yta9.vercel.app/"     },
];

/* ─── Page ─────────────────────────────────── */

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* ══ NAVBAR ══ */}
      <header className="sticky top-0 z-50 animate-fade-down" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl neu-flat flex items-center justify-center"
              style={{ color: "var(--color-primary)" }}
            >
              <MdDashboard size={18} />
            </div>
            <span className="font-black text-sm tracking-tight">AdminKit</span>
          </div>

          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-1">
            {["Features", "Stack", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-xl text-xs font-semibold neu-button transition-all hover:scale-105"
                style={{ color: "var(--text-soft)" }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "var(--color-primary)" }}
            >
              Sign In <MdArrowForward size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8 neu-inset animate-fade-in"
          style={{ color: "var(--color-primary)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
            style={{ background: "var(--color-primary)" }}
          />
          Portfolio Project · Open Source
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: "60ms", animationFillMode: "both" }}
        >
          Modern Admin{" "}
          <span
            className="relative inline-block"
            style={{ color: "var(--color-primary)" }}
          >
            Dashboard
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: "var(--text-soft)" }}>
            built with Next.js 16
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed mb-10 animate-fade-up"
          style={{
            animationDelay: "120ms",
            animationFillMode: "both",
            color: "var(--text-soft)",
          }}
        >
          A fully-featured neumorphic admin panel showcasing App Router patterns, Server Actions,
          real-time search, data visualisation and dark mode — all without a backend.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "180ms", animationFillMode: "both" }}
        >
          <Link
            href="/login"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: "var(--color-primary)" }}
          >
            Get Started <MdArrowForward size={18} />
          </Link>
          <a
            href="https://github.com/zaqurbanov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm neu-button transition-all hover:scale-105 active:scale-95"
            style={{ color: "var(--text-soft)" }}
          >
            <SiGithub size={16} /> View Source
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-28 w-full animate-fade-up"
          style={{ animationDelay: "260ms", animationFillMode: "both" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="neu-flat rounded-2xl py-5 px-4 flex flex-col items-center gap-1">
              <span className="text-3xl font-black" style={{ color: "var(--color-primary)" }}>
                {s.value}
              </span>
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3 animate-fade-up">
            What&apos;s inside
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Every section demonstrates a specific front-end capability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="neu-flat rounded-2xl p-6 flex flex-col gap-3 group animate-fade-up"
              style={{ animationDelay: `${f.delay}ms`, animationFillMode: "both" }}
            >
              <div
                className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ color: "var(--color-primary)" }}
              >
                <f.icon size={20} />
              </div>
              <h3 className="font-bold text-sm">{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-soft)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section id="stack" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="neu-flat rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-black tracking-tight mb-2">Tech Stack</h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Hand-picked tools for a modern, production-grade architecture
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {STACK.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl neu-inset text-sm font-semibold transition-all hover:scale-105"
              >
                <s.icon size={20} style={{ color: s.color }} />
                {s.label}
              </div>
            ))}
          </div>

          {/* Extra badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Recharts 3", "Server Actions", "App Router", "Mock Data Layer", "Skeleton Loaders", "Dark Mode"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-xl text-xs font-medium neu-button"
                style={{ color: "var(--text-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="neu-inset rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Avatar placeholder */}
          <div
            className="w-24 h-24 rounded-2xl neu-flat shrink-0 flex items-center justify-center text-3xl font-black animate-float"
            style={{ color: "var(--color-primary)" }}
          >
            ZQ
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black mb-1">Zaur Qurbanov</h2>
            <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Full-Stack Developer
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-soft)" }}>
              Passionate about building clean, performant web interfaces. This dashboard is a
              portfolio piece demonstrating App Router architecture, neumorphic design systems,
              TypeScript best practices and modern React patterns.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold neu-button transition-all hover:scale-105 active:scale-95"
                  style={{ color: "var(--color-primary)" }}
                >
                  <s.icon size={14} />
                  {s.label}
                  <MdOutlineOpenInNew size={11} style={{ color: "var(--text-muted)" }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
            boxShadow: "0 20px 60px rgba(120,120,236,0.35)",
          }}
        >
          <div>
            <h3 className="font-black text-2xl mb-2">Ready to explore?</h3>
            <p className="text-sm opacity-80">
              Click through every page and see each feature in action.
            </p>
          </div>
          <Link
            href="/login"
            className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white transition-all hover:scale-105 active:scale-95"
            style={{ color: "var(--color-primary)" }}
          >
            Sign In <MdArrowForward size={18} />
          </Link>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderColor: "var(--border)" }}>
        <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
          © {year} · Made with <MdFavorite size={12} style={{ color: "var(--color-danger)" }} /> by Zaur Qurbanov
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium hover:underline transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
