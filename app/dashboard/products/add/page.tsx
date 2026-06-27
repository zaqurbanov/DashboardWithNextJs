import AddProductForm from "./AddProductForm";

export const metadata = {
  title: "Add Product",
  description: "Add a new product to the catalog",
};

export default function ProductAddPage() {
  return (
    <div className="mt-2">
      <div className="mb-6">
        <h1 className="font-black text-2xl">Add New Product</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Fill in the details below to add a product to the catalog.
        </p>
      </div>
      <AddProductForm />
    </div>
  );
}
