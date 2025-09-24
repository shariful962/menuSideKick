import { Search } from "lucide-react";
import React, { useState } from "react";

const Subscription = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: "01",
      name: "Robert Fox",
      email: "fox@email",
      status: "Paid",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=1", // placeholder avatar
      plan: "Monthly"
    },
    {
      id: "02",
      name: "Mark Henry",
      email: "markhenry@email",
      status: "Paid",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=2",
      plan: "Monthly"
    },
    {
      id: "03",
      name: "Shifat",
      email: "shifat@email",
      status: "Paid",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=3",
      plan: "6 Months"
    },
    {
      id: "04",
      name: "John Doe",
      email: "john doe@email",
      status: "Paid",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=4",
      plan: "6 Months"
    },
    {
      id: "05",
      name: "Robert Fox",
      email: "fox@email",
      status: "Expired",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=5",
      plan: "Yearly"
    },
    {
      id: "06",
      name: "Mark Henry",
      email: "markhenry@email",
      status: "Expired",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=6",
      plan: "Yearly"
    },
  ];

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.plan.toLowerCase().includes(search.toLowerCase()) ||
      user.status.toLowerCase().includes(search.toLowerCase())

  );

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)]">
        {/* header section  */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h2 className="title text-white">Subscriptions</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2  gap-x-8">
              {/* search button  */}
              <div className="flex items-center w-full md:w-[300px] h-[42px] px-3 py-2 bg-white border border-Primary  rounded-sm">
                <Search className=" w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search User"
                  className="w-full outline-none text-sm text-gray-700"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* manage button  */}
              <div>
                <button className="h-[42px] px-6 w-max py-2 bg-white text-Secondary rounded cursor-pointer font-bold">
                  Manages Fees
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* users section  */}
        <div className="mt-7.5">
          <div className="overflow-x-auto px-4">
            <table className="w-full bg-white text-left">
              <thead className="border-b border-[#154452]">
                <tr>
                  <th className="px-4 py-3">S.lD</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="hidden md:table-cell px-4 py-3">Plans</th>
                  <th className="hidden md:table-cell px-4 py-3">
                    Expiration Date
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white text-[#154452]">
                {filterUsers.length > 0 ? (
                  filterUsers.map((user) => (
                    <tr key={user.id} className="border-b border-[#E8E8F5]">
                      <td className="px-4 py-3">{user.id}</td>
                      <td className="px-4 py-3 flex items-center gap-x-2">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                        {user.name}
                      </td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className= {`px-4 py-3 ${user.status === 'Paid' ? "text-[#10B981]" : "text-[#EF4444]"}`}>{user.status}</td>
                      <td className="hidden md:table-cell px-4 py-3">
                        {user.plan}
                      </td>
                      <td className="hidden md:table-cell px-4 py-3">
                        {user.date}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;





