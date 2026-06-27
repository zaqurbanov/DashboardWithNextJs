"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MdPerson,
  MdPalette,
  MdNotifications,
  MdSecurity,
  MdEdit,
  MdCheck,
  MdLogout,
  MdLock,
} from "react-icons/md";

/* ── Types ── */
type Section = "profile" | "appearance" | "notifications" | "account";

interface NotifState {
  emailAlerts: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  productUpdates: boolean;
}

/* ── Main component ── */
export default function SettingsClient() {
  const [active, setActive] = useState<Section>("profile");

  return (
    <div className="mt-2 animate-fade-up" style={{ animationFillMode: "both" }}>
      <div className="mb-6">
        <h1 className="font-black text-2xl">Settings</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Manage your account preferences and configurations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {/* ── Nav ── */}
        <nav className="neu-flat rounded-2xl p-3 flex md:flex-col gap-1 md:w-52 shrink-0 h-fit">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full text-left transition-all duration-200
                ${active === item.id
                  ? "neu-pressed font-semibold"
                  : "hover:neu-inset"
                }`}
              style={{ color: active === item.id ? "var(--color-primary)" : "#666" }}
            >
              <item.icon size={18} className="shrink-0" />
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* ── Content ── */}
        <div className="flex-1 min-w-0">
          {active === "profile"    && <ProfileSection />}
          {active === "appearance" && <AppearanceSection />}
          {active === "notifications" && <NotificationsSection />}
          {active === "account"    && <AccountSection />}
        </div>
      </div>
    </div>
  );
}

/* ── Nav config ── */
const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "profile",       label: "Profile",       icon: MdPerson },
  { id: "appearance",    label: "Appearance",    icon: MdPalette },
  { id: "notifications", label: "Notifications", icon: MdNotifications },
  { id: "account",       label: "Account",       icon: MdSecurity },
];

/* ─────────────────────────────────────────
   Profile section
───────────────────────────────────────── */
function ProfileSection() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved]     = useState(false);
  const [name,  setName]      = useState("Zaur Qurbanov");
  const [email, setEmail]     = useState("qurbanovzaur078@gmail.com");

  function handleSave() {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="neu-flat rounded-2xl p-7 flex flex-col gap-7 animate-fade-in">
      <SectionHeading title="Profile" desc="Update your personal information." />

      {/* Avatar row */}
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-full neu-inset p-1.5 shrink-0">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-bold text-base">{name}</p>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full neu-inset mt-1 inline-block capitalize"
            style={{ color: "var(--color-primary)" }}
          >
            Admin
          </span>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4">
        <Field label="Full Name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!editing}
            className={fieldClass(!editing)}
          />
        </Field>
        <Field label="Email Address">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!editing}
            type="email"
            className={fieldClass(!editing)}
          />
        </Field>
        <Field label="Role">
          <input value="Admin" disabled className={fieldClass(true)} />
        </Field>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "var(--color-primary)" }}
            >
              <MdCheck size={16} /> Save Changes
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold neu-button transition-all active:scale-95"
              style={{ color: "#888" }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold neu-button transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ color: "var(--color-primary)" }}
          >
            <MdEdit size={16} /> Edit Profile
          </button>
        )}
        {saved && (
          <p className="text-xs font-medium animate-fade-in" style={{ color: "var(--color-success)" }}>
            ✓ Changes saved
          </p>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Appearance section
───────────────────────────────────────── */
function AppearanceSection() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") ?? "light";
    }
    return "light";
  });
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");

  function applyTheme(t: "light" | "dark") {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }

  return (
    <div className="neu-flat rounded-2xl p-7 flex flex-col gap-7 animate-fade-in">
      <SectionHeading title="Appearance" desc="Customize how the dashboard looks." />

      <div className="flex flex-col gap-5">
        <Field label="Theme">
          <div className="flex gap-3">
            {([
              { id: "light", label: "☀️ Light" },
              { id: "dark",  label: "🌙 Dark"  },
            ] as const).map((t) => (
              <button
                key={t.id}
                onClick={() => applyTheme(t.id)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${theme === t.id ? "neu-pressed" : "neu-inset hover:scale-105"}`}
                style={{ color: theme === t.id ? "var(--color-primary)" : "var(--text-soft)" }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Table Density">
          <div className="flex gap-3">
            {(["comfortable", "compact"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDensity(d)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium capitalize transition-all duration-200
                  ${density === d ? "neu-pressed" : "neu-inset hover:scale-105"}`}
                style={{ color: density === d ? "var(--color-primary)" : "var(--text-soft)" }}
              >
                {d}
              </button>
            ))}
          </div>
        </Field>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Notifications section
───────────────────────────────────────── */
function NotificationsSection() {
  const [notifs, setNotifs] = useState<NotifState>({
    emailAlerts:       true,
    pushNotifications: false,
    weeklyDigest:      true,
    productUpdates:    false,
  });

  const toggle = (key: keyof NotifState) =>
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="neu-flat rounded-2xl p-7 flex flex-col gap-6 animate-fade-in">
      <SectionHeading title="Notifications" desc="Choose what you want to be notified about." />

      <div className="flex flex-col gap-1">
        {notifItems.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between p-4 rounded-xl transition-all duration-150 hover:neu-inset"
          >
            <div>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "#999" }}>{item.desc}</p>
            </div>
            <Toggle
              checked={notifs[item.key as keyof NotifState]}
              onChange={() => toggle(item.key as keyof NotifState)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const notifItems = [
  { key: "emailAlerts",       label: "Email Alerts",        desc: "Receive alerts via email for critical events." },
  { key: "pushNotifications", label: "Push Notifications",  desc: "Get real-time push notifications in the browser." },
  { key: "weeklyDigest",      label: "Weekly Digest",       desc: "A weekly summary of dashboard activity." },
  { key: "productUpdates",    label: "Product Updates",     desc: "Notifications when products are added or edited." },
];

/* ─────────────────────────────────────────
   Account section
───────────────────────────────────────── */
function AccountSection() {
  const [loggingOut, setLoggingOut] = useState(false);

  return (
    <div className="neu-flat rounded-2xl p-7 flex flex-col gap-7 animate-fade-in">
      <SectionHeading title="Account" desc="Manage security and account actions." />

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#aaa" }}>
          Security
        </p>
        <button className="flex items-center justify-between p-4 rounded-xl neu-inset hover:scale-[1.01] transition-all duration-150 w-full text-left">
          <div>
            <p className="text-sm font-semibold">Change Password</p>
            <p className="text-xs mt-0.5" style={{ color: "#999" }}>
              Update your account password.
            </p>
          </div>
          <MdLock size={18} style={{ color: "var(--color-primary)" }} />
        </button>
      </div>

      {/* Danger zone */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#aaa" }}>
          Danger Zone
        </p>
        <div className="p-4 rounded-xl" style={{ border: "1px solid #ef444430", background: "#ef444408" }}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold">Sign Out</p>
              <p className="text-xs mt-0.5" style={{ color: "#999" }}>
                You will be redirected to the login page.
              </p>
            </div>
            <button
              onClick={() => setLoggingOut(true)}
              disabled={loggingOut}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-60"
              style={{ background: "var(--color-danger)" }}
            >
              {loggingOut ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <MdLogout size={16} />
              )}
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Shared helpers
───────────────────────────────────────── */
function SectionHeading({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-b pb-4" style={{ borderColor: "#d1d9e6" }}>
      <h2 className="font-black text-base" style={{ color: "var(--color-primary)" }}>{title}</h2>
      <p className="text-xs mt-0.5" style={{ color: "#999" }}>{desc}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#888" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function fieldClass(disabled: boolean) {
  return [
    "w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 bg-transparent",
    disabled ? "neu-flat text-gray-400 cursor-default" : "neu-inset focus:ring-2",
  ].join(" ");
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-checked={checked}
      role="switch"
      className="relative w-12 h-6 rounded-full transition-all duration-300 shrink-0"
      style={{
        boxShadow: checked
          ? "inset 3px 3px 6px #5a5ab0, inset -3px -3px 6px #9696ff"
          : "inset 3px 3px 6px #c8d0da, inset -3px -3px 6px #ffffff",
      }}
    >
      <span
        className="absolute top-1 w-4 h-4 rounded-full transition-all duration-300 shadow-md"
        style={{
          left: checked ? "calc(100% - 20px)" : "4px",
          background: checked ? "var(--color-primary)" : "#ccc",
        }}
      />
    </button>
  );
}
