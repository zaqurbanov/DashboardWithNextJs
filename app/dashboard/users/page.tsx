import MenuTop from "@/components/dashboard/menuTop/MenuTop";
import UserTableBody from "@/components/dashboard/user/UserTableBody";
import GenerateTableHeader from "@/components/shared/GenerateTableHeader";
import Pagination from "@/components/shared/Pagination";
import { userTableHeader } from "@/constants/userHaedar";
import { getUsers } from "@/services/user.services";
import React from "react";
export const metadata = {
  title: "Users",
  description: "Users",
};
interface UsersPageProps{
  searchParams?:{
    page?:string
  }
}
const UsersPage = async ({searchParams}:UsersPageProps) => {
  const params  = await searchParams
  const page  = Number(params?.page) ||1
  console.log(params?.page)
  const limit  = 5
  const  {users,total}= await getUsers(page,limit);

  return (
    <div>
      <MenuTop placeholder="Search for User" link="/dashboard/users/add" />

      <div className="mt-8 p-5 neu-inset rounded-xl">
        <table className="min-w-full">
          <thead>
            <tr className="neu-inset p-3 rounded-md">
            <GenerateTableHeader headers={userTableHeader} />

            </tr>
          </thead>

          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id} className="neu-inset p-2 rounded-xl">
                    
                  <UserTableBody item={item} />
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
  );
};

export default UsersPage;
