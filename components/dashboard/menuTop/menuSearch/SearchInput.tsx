"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";

export default function SearchInput({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") ?? "");
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim()) {
        params.set("search", value.trim());
        params.delete("page");
      } else {
        params.delete("search");
      }
      router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  return (
    <div className="flex items-center gap-2 flex-1">
      <MdSearch className="shrink-0 text-lg" style={{ color: "var(--color-primary)" }} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border-none outline-none w-full text-sm"
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className="shrink-0 opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Clear search"
        >
          <MdClose size={16} />
        </button>
      )}
    </div>
  );
}
