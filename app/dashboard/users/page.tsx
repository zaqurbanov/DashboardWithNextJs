import MenuTop from "@/components/dashboard/menuTop/MenuTop";
import UserTableBody from "@/components/dashboard/user/UserTableBody";
import GenerateTableHeader from "@/components/shared/GenerateTableHeader";
import Pagination from "@/components/shared/Pagination";
import { userTableHeader } from "@/constants/userHaedar";
import { getUsers } from "@/services/user.services";
import { MdPeopleOutline } from "react-icons/md";

export const metadata = { title: "Users", description: "Users" };

interface UsersPageProps {
  searchParams?: { page?: string; search?: string };
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const search = params?.search ?? "";
  const limit = 5;
  const { users, total } = await getUsers(page, limit, search);

  return (
    <div>
      <MenuTop placeholder="Search for User" link="/dashboard/users/add" />

      <div className="mt-8 p-5 neu-inset rounded-xl">
        {users.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
            <MdPeopleOutline size={48} style={{ color: "#ccc" }} />
            <p className="font-semibold text-sm" style={{ color: "#999" }}>
              {search ? `No users found for "${search}"` : "No users yet"}
            </p>
          </div>
        ) : (
          <>
            <table className="min-w-full">
              <thead>
                <tr className="neu-inset p-3 rounded-md">
                  <GenerateTableHeader headers={userTableHeader} />
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id} className="neu-inset p-2 rounded-xl">
                    <UserTableBody item={item} />
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

export default UsersPage;
