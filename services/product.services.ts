import { productMock } from "@/mock/products";

export const getProducts = async (page: number, limit: number) => {
  const start = (Number(page) - 1) * Number(limit);
  const end = start + Number(limit);

  const result = await productMock.slice(start, end);
  return {
    products: result,
    total: productMock.length,
  };
};
