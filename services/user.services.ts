import { usersMock } from "@/mock/user";

export const getUsers = async (page: number, limit: number, search = "") => {
  const q = search.toLowerCase().trim();
  const filtered = q
    ? usersMock.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.role.toLowerCase().includes(q)
      )
    : usersMock;

  const start = (page - 1) * limit;
  const end = start + limit;
  return { users: filtered.slice(start, end), total: filtered.length };
};

export const getUserById = async (id: string) => {
  return usersMock.find((u) => u.id === id) ?? null;
};
