"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdDashboard,
  MdOutlineMailOutline,
  MdOutlineLock,
  MdArrowForward,
  MdInfoOutline,
  MdVisibility,
  MdVisibilityOff,
  MdErrorOutline,
} from "react-icons/md";

const TEST_PASSWORD = "admin123";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) { setError("Email is required."); return; }
    if (!password)     { setError("Password is required."); return; }

    if (password !== TEST_PASSWORD) {
      setError("Incorrect password. Use the test credentials below.");
      return;
    }

    setLoading(true);

    /* Derive display name from email (part before @) */
    const displayName = email.includes("@")
      ? email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : email;

    localStorage.setItem(
      "dashboardUser",
      JSON.stringify({ name: displayName, email: email.trim() })
    );

    /* Auth cookie — readable by middleware (server side) */
    document.cookie = "dashboard_auth=1; path=/; max-age=86400; SameSite=Lax";

    /* Small delay so the button animation is visible */
    await new Promise((r) => setTimeout(r, 400));
    router.push("/dashboard");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div className="w-full max-w-md flex flex-col gap-5 animate-fade-up" style={{ animationFillMode: "both" }}>

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-2">
          <div
            className="w-14 h-14 rounded-2xl neu-flat flex items-center justify-center animate-float"
            style={{ color: "var(--color-primary)" }}
          >
            <MdDashboard size={28} />
          </div>
          <div className="text-center">
            <h1 className="font-black text-2xl tracking-tight">AdminKit</h1>
            <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
              Sign in to your dashboard
            </p>
          </div>
        </div>

        {/* Test credentials notice */}
        <div
          className="neu-inset rounded-2xl p-4 flex items-start gap-3"
          style={{ borderLeft: "3px solid var(--color-primary)" }}
        >
          <MdInfoOutline size={18} className="shrink-0 mt-0.5" style={{ color: "var(--color-primary)" }} />
          <div>
            <p className="text-xs font-bold mb-1" style={{ color: "var(--color-primary)" }}>
              Test Credentials
            </p>
            <p className="text-xs" style={{ color: "var(--text-soft)" }}>
              Email: <span className="font-semibold">anything you like</span>
            </p>
            <p className="text-xs" style={{ color: "var(--text-soft)" }}>
              Password:{" "}
              <span
                className="font-mono font-bold px-1.5 py-0.5 rounded-md"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontSize: 11,
                }}
              >
                {TEST_PASSWORD}
              </span>
            </p>
          </div>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="neu-flat rounded-3xl p-7 flex flex-col gap-5"
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold" style={{ color: "var(--text-soft)" }}>
              Email address
            </label>
            <div className="neu-inset rounded-xl flex items-center gap-3 px-4 py-3">
              <MdOutlineMailOutline size={18} style={{ color: "var(--text-muted)" }} />
              <input
                type="text"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="you@example.com"
                autoComplete="email"
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "var(--text)" }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold" style={{ color: "var(--text-soft)" }}>
              Password
            </label>
            <div className="neu-inset rounded-xl flex items-center gap-3 px-4 py-3">
              <MdOutlineLock size={18} style={{ color: "var(--text-muted)" }} />
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="••••••••"
                autoComplete="current-password"
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "var(--text)" }}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="shrink-0 transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                {showPw ? <MdVisibilityOff size={16} /> : <MdVisibility size={16} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium animate-fade-in"
              style={{ background: "#ef444415", color: "var(--color-danger)" }}
            >
              <MdErrorOutline size={15} />
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:scale-100"
            style={{ background: "var(--color-primary)" }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Signing in…
              </>
            ) : (
              <>
                Sign In <MdArrowForward size={16} />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
          This is a portfolio demo — no real data is stored.
        </p>
      </div>
    </div>
  );
}
