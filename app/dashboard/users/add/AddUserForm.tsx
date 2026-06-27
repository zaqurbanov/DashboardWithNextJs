"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { MdArrowBack, MdShuffle, MdPersonAdd } from "react-icons/md";
import { addUser, AddUserState } from "./actions";

const ROLES = ["admin", "manager", "user", "guest"] as const;
const STATUSES = ["active", "inactive"] as const;

function randomAvatar() {
  const gender = Math.random() > 0.5 ? "men" : "women";
  const num = Math.floor(Math.random() * 50) + 1;
  return { gender, num, url: `https://randomuser.me/api/portraits/${gender}/${num}.jpg` };
}

export default function AddUserForm() {
  const [state, formAction, pending] = useActionState<AddUserState, FormData>(
    addUser,
    {}
  );
  const [avatar, setAvatar] = useState(randomAvatar);
  const [name, setName] = useState("");

  return (
    <form action={formAction} className="animate-fade-up" style={{ animationFillMode: "both" }}>
      {/* hidden avatar url */}
      <input type="hidden" name="image" value={avatar.url} />

      <div className="flex flex-col lg:flex-row gap-6">

        {/* ── Left: avatar card ── */}
        <div className="neu-flat rounded-2xl p-8 flex flex-col items-center gap-5 lg:w-72 shrink-0">
          <div className="relative">
            <div className="w-28 h-28 rounded-full neu-inset p-1.5">
              <Image
                src={avatar.url}
                alt="avatar preview"
                width={112}
                height={112}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <button
              type="button"
              onClick={() => setAvatar(randomAvatar())}
              title="Shuffle avatar"
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full neu-button flex items-center justify-center transition-all duration-200 active:scale-90"
              style={{ color: "var(--color-primary)" }}
            >
              <MdShuffle size={16} />
            </button>
          </div>

          <div className="text-center">
            <p className="font-bold text-base truncate max-w-[160px]">
              {name || "New User"}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#999" }}>
              Preview
            </p>
          </div>

          <p className="text-xs text-center leading-relaxed" style={{ color: "#aaa" }}>
            Click <MdShuffle className="inline" /> to shuffle the avatar. It will be auto-assigned on save.
          </p>
        </div>

        {/* ── Right: form fields ── */}
        <div className="neu-flat rounded-2xl p-8 flex flex-col gap-5 flex-1">
          <h2 className="font-black text-lg" style={{ color: "var(--color-primary)" }}>
            User details
          </h2>

          {/* Name */}
          <Field label="Full Name" error={state.errors?.name} required>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass(!!state.errors?.name)}
            />
          </Field>

          {/* Email */}
          <Field label="Email Address" error={state.errors?.email} required>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className={inputClass(!!state.errors?.email)}
            />
          </Field>

          {/* Role + Status row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Role" error={state.errors?.role} required>
              <select name="role" defaultValue="" className={inputClass(!!state.errors?.role)}>
                <option value="" disabled>Select role…</option>
                {ROLES.map((r) => (
                  <option key={r} value={r} className="capitalize">
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Status">
              <select name="status" defaultValue="active" className={inputClass(false)}>
                {STATUSES.map((s) => (
                  <option key={s} value={s} className="capitalize">
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={pending}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "var(--color-primary)" }}
            >
              {pending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  <MdPersonAdd size={16} />
                  Add User
                </>
              )}
            </button>

            <Link
              href="/dashboard/users"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold neu-button transition-all duration-200 active:scale-95"
              style={{ color: "#666" }}
            >
              <MdArrowBack size={15} />
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

/* ── helpers ── */

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#666" }}>
        {label}
        {required && <span className="ml-1" style={{ color: "var(--color-danger)" }}>*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs animate-fade-in" style={{ color: "var(--color-danger)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200",
    "bg-transparent",
    hasError
      ? "neu-pressed ring-1"
      : "neu-inset focus:ring-2",
  ].join(" ");
}
