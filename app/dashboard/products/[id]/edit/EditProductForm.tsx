"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { MdArrowBack, MdShuffle, MdSave } from "react-icons/md";
import { ProductsInterface } from "@/types/products/productsTypes";
import { updateProduct, ProductFormState } from "@/app/dashboard/products/actions";

function randomImage() {
  const id = Math.floor(Math.random() * 200) + 60;
  return `https://picsum.photos/id/${id}/400/300`;
}

export default function EditProductForm({ product }: { product: ProductsInterface }) {
  const [state, formAction, pending] = useActionState<ProductFormState, FormData>(
    updateProduct,
    {}
  );
  const [imgUrl, setImgUrl] = useState(product.image);
  const [title, setTitle] = useState(product.title);

  const rawPrice = product.price.replace("$", "");

  return (
    <form action={formAction} className="animate-fade-up" style={{ animationFillMode: "both" }}>
      <input type="hidden" name="id" value={product.id} />
      <input type="hidden" name="image" value={imgUrl} />

      <div className="flex flex-col lg:flex-row gap-6">

        {/* ── Left: image preview ── */}
        <div className="neu-flat rounded-2xl p-8 flex flex-col items-center gap-5 lg:w-72 shrink-0">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden neu-inset">
            <Image src={imgUrl} alt="product" fill className="object-cover" />
          </div>
          <button
            type="button"
            onClick={() => setImgUrl(randomImage())}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold neu-button transition-all duration-200 active:scale-95"
            style={{ color: "var(--color-primary)" }}
          >
            <MdShuffle size={16} /> Shuffle Image
          </button>
          <p className="font-bold text-sm text-center truncate max-w-[200px]">{title}</p>
        </div>

        {/* ── Right: form fields ── */}
        <div className="neu-flat rounded-2xl p-8 flex flex-col gap-5 flex-1">
          <h2 className="font-black text-lg" style={{ color: "var(--color-primary)" }}>
            Product details
          </h2>

          <Field label="Title" error={state.errors?.title} required>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass(!!state.errors?.title)}
            />
          </Field>

          <Field label="Description" error={state.errors?.description} required>
            <textarea
              name="description"
              rows={3}
              defaultValue={product.description}
              className={inputClass(!!state.errors?.description) + " resize-none"}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Price" error={state.errors?.price} required>
              <div className="relative">
                <span
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  $
                </span>
                <input
                  name="price"
                  type="text"
                  defaultValue={rawPrice}
                  className={inputClass(!!state.errors?.price) + " pl-8"}
                />
              </div>
            </Field>

            <Field label="Stock" error={state.errors?.stock} required>
              <input
                name="stock"
                type="number"
                min={0}
                defaultValue={product.stock}
                className={inputClass(!!state.errors?.stock)}
              />
            </Field>
          </div>

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
                  <MdSave size={16} />
                  Save Changes
                </>
              )}
            </button>

            <Link
              href="/dashboard/products"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold neu-button transition-all duration-200 active:scale-95"
              style={{ color: "#666" }}
            >
              <MdArrowBack size={15} /> Cancel
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

function Field({
  label, error, required, children,
}: {
  label: string; error?: string; required?: boolean; children: React.ReactNode;
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
    "w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 bg-transparent",
    hasError ? "neu-pressed ring-1" : "neu-inset focus:ring-2",
  ].join(" ");
}
