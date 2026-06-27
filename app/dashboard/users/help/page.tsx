import {
  MdHelp,
  MdOutlineSearch,
  MdOutlineBook,
  MdOutlineVideoLibrary,
  MdOutlineHeadsetMic,
  MdOutlineMailOutline,
  MdOutlineChat,
  MdExpandMore,
  MdChevronRight,
} from "react-icons/md";

export const metadata = { title: "Help & Support" };

const FAQS = [
  {
    q: "How do I add a new user?",
    a: 'Navigate to Users → click the "+ Add User" button in the top right. Fill in the required fields and submit.',
  },
  {
    q: "How do I edit or delete a product?",
    a: "Go to the Products page, find the product in the table, and use the action buttons (pencil icon to edit, trash icon to delete) on the right side of each row.",
  },
  {
    q: "How does on-the-fly search work?",
    a: "Type in the search bar at the top of the Users or Products page. Results filter automatically with a 300ms debounce — no need to press Enter.",
  },
  {
    q: "How can I switch between dark and light mode?",
    a: 'Click the moon/sun icon in the top navbar, or go to Settings → Appearance and choose your preferred theme. Your choice is saved across sessions.',
  },
  {
    q: "Where can I view revenue data?",
    a: "The Revenue page (Analytics section in the sidebar) shows monthly revenue charts, currency breakdowns, and full transaction history.",
  },
  {
    q: "Is this data persistent?",
    a: "Data uses an in-memory mock store (globalThis singleton) that persists across hot reloads during development, but resets on a full server restart.",
  },
];

const RESOURCES = [
  { icon: MdOutlineBook,        label: "Documentation",   desc: "Full API & component reference",     color: "var(--color-primary)" },
  { icon: MdOutlineVideoLibrary, label: "Video Tutorials", desc: "Step-by-step walkthroughs",          color: "#22c55e"              },
  { icon: MdOutlineHeadsetMic,  label: "Live Support",    desc: "Chat with a support agent",          color: "#f59e0b"              },
  { icon: MdOutlineChat,        label: "Community",       desc: "Ask questions & share feedback",     color: "#ef4444"              },
];

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-6 animate-fade-up" style={{ animationFillMode: "both" }}>

      {/* Header */}
      <div>
        <h1 className="font-black text-2xl">Help &amp; Support</h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Find answers, tutorials, and contact options.
        </p>
      </div>

      {/* Search hero */}
      <div
        className="neu-flat rounded-2xl p-8 flex flex-col items-center gap-4"
        style={{
          background: "linear-gradient(135deg, var(--neu-bg) 0%, var(--neu-bg) 100%)",
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center animate-float"
          style={{ color: "var(--color-primary)" }}
        >
          <MdHelp size={28} />
        </div>
        <div className="text-center">
          <p className="font-black text-xl">How can we help you?</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            Search the knowledge base or browse the FAQ below.
          </p>
        </div>
        <div className="w-full max-w-md neu-inset rounded-xl flex items-center gap-3 px-4 py-3">
          <MdOutlineSearch size={18} style={{ color: "var(--text-muted)" }} />
          <input
            type="text"
            placeholder="Search help articles…"
            className="bg-transparent outline-none flex-1 text-sm"
            style={{ color: "var(--text)" }}
            readOnly
          />
        </div>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {RESOURCES.map((r, i) => (
          <button
            key={r.label}
            className="neu-flat rounded-2xl p-5 flex flex-col gap-3 text-left animate-fade-up hover:scale-[1.02] transition-transform"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            <div
              className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center"
              style={{ color: r.color }}
            >
              <r.icon size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">{r.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{r.desc}</p>
            </div>
            <MdChevronRight size={16} style={{ color: "var(--text-muted)", marginTop: "auto" }} />
          </button>
        ))}
      </div>

      {/* FAQ */}
      <div className="neu-flat rounded-2xl p-6">
        <p className="font-bold text-sm mb-5">Frequently Asked Questions</p>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="neu-inset rounded-xl overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none font-semibold text-sm gap-3">
                {faq.q}
                <MdExpandMore
                  size={20}
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  style={{ color: "var(--color-primary)" }}
                />
              </summary>
              <div
                className="px-5 pb-4 text-sm leading-relaxed"
                style={{ color: "var(--text-soft)" }}
              >
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="neu-flat rounded-2xl p-6 flex-1 flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl neu-inset flex items-center justify-center shrink-0"
            style={{ color: "var(--color-primary)" }}
          >
            <MdOutlineMailOutline size={22} />
          </div>
          <div>
            <p className="font-bold text-sm">Email Support</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              qurbanovzaur078@gmail.com
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              Response within 24 hours
            </p>
          </div>
        </div>

        <div className="neu-flat rounded-2xl p-6 flex-1 flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl neu-inset flex items-center justify-center shrink-0"
            style={{ color: "#22c55e" }}
          >
            <MdOutlineChat size={22} />
          </div>
          <div>
            <p className="font-bold text-sm">Live Chat</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              Available Mon–Fri, 09:00–18:00
            </p>
            <p className="text-xs mt-1 font-semibold" style={{ color: "#22c55e" }}>
              ● Online now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
