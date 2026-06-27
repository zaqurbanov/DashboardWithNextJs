"use client";

import { useEffect, useState } from "react";

const DEFAULT = { name: "Zaur Qurbanov", email: "admin@adminkit.io" };

export default function UserInfo() {
  const [user, setUser] = useState(DEFAULT);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dashboardUser");
      if (stored) setUser(JSON.parse(stored));
    } catch {}
  }, []);

  return (
    <div className="flex flex-col">
      <span className="font-bold text-base text-blue-600 leading-tight truncate max-w-[140px]">
        {user.name}
      </span>
      <span className="text-xs text-blue-300 truncate max-w-[140px]">
        {user.email}
      </span>
    </div>
  );
}
