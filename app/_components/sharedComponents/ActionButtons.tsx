"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { MdEdit, MdDelete, MdCheck, MdClose } from "react-icons/md";
import { deleteUser } from "@/app/dashboard/users/actions";
import { deleteProduct } from "@/app/dashboard/products/actions";

interface Props {
  id: string;
  type: "user" | "product";
}

export default function ActionButtons({ id, type }: Props) {
  const [confirming, setConfirming] = useState(false);
  const [isPending, startTransition] = useTransition();

  const editHref =
    type === "user"
      ? `/dashboard/users/${id}/edit`
      : `/dashboard/products/${id}/edit`;

  function handleDelete() {
    startTransition(async () => {
      if (type === "user") await deleteUser(id);
      else await deleteProduct(id);
    });
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2 animate-scale-in">
        <span className="text-xs font-medium" style={{ color: "#666" }}>
          Delete?
        </span>
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="flex items-center justify-center w-7 h-7 rounded-lg neu-button transition-all duration-150 active:scale-90 disabled:opacity-50"
          style={{ color: "var(--color-danger)" }}
          title="Confirm delete"
        >
          {isPending ? (
            <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <MdCheck size={15} />
          )}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="flex items-center justify-center w-7 h-7 rounded-lg neu-button transition-all duration-150 active:scale-90"
          style={{ color: "#888" }}
          title="Cancel"
        >
          <MdClose size={15} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={editHref}
        className="flex items-center justify-center w-8 h-8 rounded-lg neu-button transition-all duration-150 hover:scale-105 active:scale-90"
        style={{ color: "var(--color-primary)" }}
        title="Edit"
      >
        <MdEdit size={16} />
      </Link>
      <button
        onClick={() => setConfirming(true)}
        className="flex items-center justify-center w-8 h-8 rounded-lg neu-button transition-all duration-150 hover:scale-105 active:scale-90"
        style={{ color: "var(--color-danger)" }}
        title="Delete"
      >
        <MdDelete size={16} />
      </button>
    </div>
  );
}
