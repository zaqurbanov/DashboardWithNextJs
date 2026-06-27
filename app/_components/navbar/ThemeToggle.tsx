"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setDark(!dark);
  }

  /* Avoid hydration mismatch — render placeholder until mounted */
  if (!mounted) {
    return <span className="w-8 h-8 rounded-xl neu-button inline-block" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-8 h-8 rounded-xl neu-button flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90"
      style={{ color: "var(--color-primary)" }}
    >
      {dark ? (
        <MdLightMode size={17} className="animate-scale-in" />
      ) : (
        <MdDarkMode size={17} className="animate-scale-in" />
      )}
    </button>
  );
}
