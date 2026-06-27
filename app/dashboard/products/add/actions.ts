"use server";

import { productMock } from "@/mock/products";
import { ProductsInterface } from "@/types/products/productsTypes";
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

export async function addProduct(
  _: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
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

  const newProduct: ProductsInterface = {
    id: String(Date.now()),
    title,
    description,
    price: price.startsWith("$") ? price : `$${price}`,
    stock,
    image,
    createdAt: new Date().toISOString().split("T")[0],
  };

  productMock.push(newProduct);
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
