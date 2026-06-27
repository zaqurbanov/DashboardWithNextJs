import { getUserById } from "@/services/user.services";
import { notFound } from "next/navigation";
import EditUserForm from "./EditUserForm";

export const metadata = { title: "Edit User" };

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) notFound();

  return (
    <div className="mt-2">
      <div className="mb-6">
        <h1 className="font-black text-2xl">Edit User</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Update the details for <span className="font-semibold">{user.name}</span>.
        </p>
      </div>
      <EditUserForm user={user} />
    </div>
  );
}
