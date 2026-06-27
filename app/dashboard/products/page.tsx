import MenuTop from "@/components/dashboard/menuTop/MenuTop";
import ProductTableBody from "@/components/dashboard/products/ProductTableBody";
import GenerateTableHeader from "@/components/shared/GenerateTableHeader";
import Pagination from "@/components/shared/Pagination";
import { productTableHeader } from "@/constants/productHeader";
import { getProducts } from "@/services/product.services";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const metadata = { title: "Products", description: "Products" };

interface ProductsPageProps {
  searchParams?: { page?: string; search?: string };
}

const ProductPage = async ({ searchParams }: ProductsPageProps) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const search = params?.search ?? "";
  const limit = 5;
  const { products, total } = await getProducts(page, limit, search);

  return (
    <div>
      <MenuTop placeholder="Search for Product" link="/dashboard/products/add" />

      <div className="mt-8 p-5 neu-inset rounded-xl">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
            <MdOutlineProductionQuantityLimits size={48} style={{ color: "#ccc" }} />
            <p className="font-semibold text-sm" style={{ color: "#999" }}>
              {search ? `No products found for "${search}"` : "No products yet"}
            </p>
          </div>
        ) : (
          <>
            <table className="min-w-full">
              <thead>
                <tr className="neu-inset p-3 rounded-md">
                  <GenerateTableHeader headers={productTableHeader} />
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id} className="neu-inset p-2 rounded-xl">
                    <ProductTableBody item={item} />
                  </tr>
                ))}
              </tbody>
            </table>
            {!search && (
              <div className="mt-3">
                <Pagination page={page} total={total} limit={limit} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
