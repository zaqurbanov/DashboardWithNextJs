import { productMock } from "@/mock/products";

export const getProducts = async (page: number, limit: number, search = "") => {
  const q = search.toLowerCase().trim();
  const filtered = q
    ? productMock.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : productMock;

  const start = (page - 1) * limit;
  const end = start + limit;
  return { products: filtered.slice(start, end), total: filtered.length };
};

export const getProductById = async (id: string) => {
  return productMock.find((p) => p.id === id) ?? null;
};
