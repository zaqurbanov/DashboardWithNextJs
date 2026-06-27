"use server";

import { usersMock } from "@/mock/user";
import { RoleType } from "@/types/user/roleType";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type FormState = {
  errors?: { name?: string; email?: string; role?: string };
};

export async function deleteUser(id: string) {
  const idx = usersMock.findIndex((u) => u.id === id);
  if (idx !== -1) usersMock.splice(idx, 1);
  revalidatePath("/dashboard/users");
}

export async function updateUser(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  const id = formData.get("id") as string;
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const role = formData.get("role") as RoleType;
  const status = (formData.get("status") as string) || "active";
  const image = formData.get("image") as string;

  const errors: FormState["errors"] = {};
  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  } else {
    const dup = usersMock.find((u) => u.email === email && u.id !== id);
    if (dup) errors.email = "A user with this email already exists";
  }
  if (!role) errors.role = "Role is required";
  if (Object.keys(errors).length > 0) return { errors };

  const idx = usersMock.findIndex((u) => u.id === id);
  if (idx === -1) return { errors: { name: "User not found" } };
  usersMock[idx] = { ...usersMock[idx], name, email, role, status, image };

  redirect("/dashboard/users");
}
