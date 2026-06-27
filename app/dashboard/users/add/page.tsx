import AddUserForm from "./AddUserForm";

export const metadata = {
  title: "Add User",
  description: "Add a new user to the dashboard",
};

export default function UserAddPage() {
  return (
    <div className="mt-2">
      <div className="mb-6">
        <h1 className="font-black text-2xl">Add New User</h1>
        <p className="text-sm mt-1" style={{ color: "#999" }}>
          Fill in the details below to create a new user account.
        </p>
      </div>
      <AddUserForm />
    </div>
  );
}
