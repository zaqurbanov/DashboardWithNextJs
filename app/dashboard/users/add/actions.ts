"use server";

import { usersMock } from "@/mock/user";
import { RoleType } from "@/types/user/roleType";
import { UserInterface } from "@/types/user/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type AddUserState = {
  errors?: {
    name?: string;
    email?: string;
    role?: string;
  };
};

export async function addUser(
  _: AddUserState,
  formData: FormData
): Promise<AddUserState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const role = formData.get("role") as RoleType;
  const status = (formData.get("status") as string) || "active";
  const image = formData.get("image") as string;

  const errors: AddUserState["errors"] = {};

  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  } else if (usersMock.some((u) => u.email === email)) {
    errors.email = "A user with this email already exists";
  }
  if (!role) errors.role = "Role is required";

  if (Object.keys(errors).length > 0) return { errors };

  const newUser: UserInterface = {
    id: String(Date.now()),
    name,
    email,
    role,
    status,
    image,
    createdAt: new Date()
      .toLocaleDateString("en-GB")
      .replace(/\//g, "."),
  };

  usersMock.push(newUser);
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
