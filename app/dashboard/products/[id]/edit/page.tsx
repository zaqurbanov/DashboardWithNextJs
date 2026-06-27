import { getProductById } from "@/services/product.services";
import { notFound } from "next/navigation";
import EditProductForm from "./EditProductForm";

export const metadata = { title: "Edit Product" };

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <div className="mt-2">
      <div className="mb-6">
        <h1 className="font-black text-2xl">Edit Product</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Update the details for <span className="font-semibold">{product.title}</span>.
        </p>
      </div>
      <EditProductForm product={product} />
    </div>
  );
}
