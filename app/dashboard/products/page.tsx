import MenuTop from '@/components/dashboard/menuTop/MenuTop';
import ProductTableBody from '@/components/dashboard/products/ProductTableBody';
import GenerateTableHeader from '@/components/shared/GenerateTableHeader';
import Pagination from '@/components/shared/Pagination';
import { productTableHeader } from '@/constants/productHeader';
import { getProducts } from '@/services/product.services';
import React from 'react'
export const metadata = {
  title: "Products",
  description: "Products",
};

interface ProductsPageProps {
  searchParam?:{
    page?:string
  }
}
const ProductPage = async({searchParam}:ProductsPageProps) => {

  const params = await searchParam
  const page = Number(params?.page) || 1
  const limit  = 5
  const {products,total} = await getProducts(page,limit)
  return (
    <div>
          <MenuTop
      placeholder="Search for Product"
      link="/dashboard/products/add"
      />

      <div className="mt-8 p-5 neu-inset rounded-xl">
        <table className="min-w-full">
          <thead>
            <tr className="neu-inset p-3 rounded-md">
            <GenerateTableHeader headers={productTableHeader} />

            </tr>
          </thead>

          <tbody>
            {products.map((item) => {
              return (
                <tr key={item.id} className="neu-inset p-2 rounded-xl">
                    
                  <ProductTableBody item={item} />
                </tr>
              );
            })}
          </tbody>

        </table>
        <div>
          <Pagination page={page} total={total} limit={limit} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage