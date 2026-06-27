"use server";

import { productMock } from "@/mock/products";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ProductFormState = {
  errors?: {
    title?: string;
    description?: string;
    price?: string;
    stock?: string;
  };
};

export async function deleteProduct(id: string) {
  const idx = productMock.findIndex((p) => p.id === id);
  if (idx !== -1) productMock.splice(idx, 1);
  revalidatePath("/dashboard/products");
}

export async function updateProduct(
  _: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  const id = formData.get("id") as string;
  const title = (formData.get("title") as string)?.trim();
  const description = (formData.get("description") as string)?.trim();
  const price = (formData.get("price") as string)?.trim();
  const stockRaw = formData.get("stock") as string;
  const stock = parseInt(stockRaw, 10);
  const image = formData.get("image") as string;

  const errors: ProductFormState["errors"] = {};
  if (!title) errors.title = "Title is required";
  if (!description) errors.description = "Description is required";
  if (!price) errors.price = "Price is required";
  if (!stockRaw || isNaN(stock) || stock < 0)
    errors.stock = "Stock must be a non-negative number";
  if (Object.keys(errors).length > 0) return { errors };

  const idx = productMock.findIndex((p) => p.id === id);
  if (idx === -1) return { errors: { title: "Product not found" } };
  productMock[idx] = { ...productMock[idx], title, description, price, stock, image };

  redirect("/dashboard/products");
}
