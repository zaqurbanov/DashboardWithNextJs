import {
  MdCode,
  MdFavorite,
  MdOutlineOpenInNew,
} from "react-icons/md";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
} from "react-icons/si";

const STACK = [
  { icon: SiNextdotjs,    label: "Next.js 16"       },
  { icon: SiReact,        label: "React 19"         },
  { icon: SiTypescript,   label: "TypeScript"       },
  { icon: SiTailwindcss,  label: "Tailwind CSS v4"  },
];

const LINKS = [
  { label: "GitHub",    href: "https://github.com/zaqurbanov"                    },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/zaurqurbanov"         },
  { label: "Portfolio", href: "https://portfolio-frontend-yta9.vercel.app/"      },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="neu-flat rounded-2xl p-6 flex flex-col gap-5">

      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl neu-inset flex items-center justify-center"
            style={{ color: "var(--color-primary)" }}
          >
            <MdCode size={18} />
          </div>
          <div>
            <p className="font-black text-sm leading-tight">Zaur Qurbanov</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium neu-button transition-all hover:scale-105 active:scale-95"
              style={{ color: "var(--text-soft)" }}
            >
              {link.label}
              <MdOutlineOpenInNew size={11} />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px rounded-full" style={{ background: "var(--border)" }} />

      {/* Stack + copyright */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

        {/* Tech stack */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Built with</span>
          {STACK.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg neu-inset text-xs font-medium"
              style={{ color: "var(--text-soft)" }}
            >
              <tech.icon size={12} style={{ color: "var(--color-primary)" }} />
              {tech.label}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs flex items-center gap-1 shrink-0"
          style={{ color: "var(--text-muted)" }}
        >
          © {year} · Made with
          <MdFavorite size={12} style={{ color: "var(--color-danger)" }} />
          by Zaur Qurbanov
        </p>
      </div>
    </footer>
  );
};

export default Footer;
