import MenuTop from '@/components/dashboard/menuTop/MenuTop';
import React from 'react'
export const metadata = {
  title: "Products",
  description: "Products",
};
const ProductPage = () => {
  return (
    <div>
          <MenuTop
      placeholder="Search for Product"
      link="/dashboard/products/add"
      />
    </div>
  )
}

export default ProductPage