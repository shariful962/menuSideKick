
import { Search } from "lucide-react";
import React, { useState } from "react";
import { FaBan } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

const Users = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // For modal

  const users = [
    {
      id: "01",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: "02",
      name: "Mark Henry",
      email: "markhenry@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: "03",
      name: "Shifat",
      email: "shifat@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: "04",
      name: "John Doe",
      email: "john@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
  ];

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search)
  );

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        {/* Header */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px] flex flex-col md:flex-row justify-between items-center gap-2">
          <h2 className="title text-white">Create Admin</h2>
          <div className="flex gap-x-4">
            <div className="flex items-center w-full md:w-[300px] h-[42px] px-3 py-2 bg-white border border-Primary rounded-sm">
              <Search className="w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search User"
                className="w-full outline-none text-sm text-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="h-[42px] px-6 py-2 bg-white text-Secondary rounded font-bold">
              Blocked Users
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="mt-7.5 overflow-x-auto px-4">
          <table className="w-full text-left">
            <thead className="border-b border-[#154452]">
              <tr>
                <th className="px-4 py-3">S.lD</th>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="hidden md:table-cell px-4 py-3">Phone No</th>
                <th className="hidden md:table-cell px-4 py-3">Joined Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#154452]">
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
                    <td className="hidden md:table-cell px-4 py-3">{user.phone}</td>
                    <td className="hidden md:table-cell px-4 py-3">{user.date}</td>
                    <td className="px-4 py-3 flex items-center gap-x-3">
                      <FaBan size={20} className="text-Secondary cursor-pointer" />
                      <LuEye
                        size={20}
                        className="text-[#154452] cursor-pointer"
                        onClick={() => setSelectedUser(user)} // open modal
                      />
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

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[400px] p-6 relative">
            <h2 className="text-2xl font-bold text-center mb-2">User Details</h2>
            <p className="text-center text-gray-500 mb-4">See all details about {selectedUser.name}</p>
            <div className="flex flex-col items-center gap-2 mb-4">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-16 h-16 rounded-full"
              />
              <p className="font-bold text-lg">{selectedUser.name}</p>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Name:</span> {selectedUser.name}</p>
              <p><span className="font-semibold">Email:</span> {selectedUser.email}</p>
              <p><span className="font-semibold">Phone:</span> {selectedUser.phone}</p>
              <p><span className="font-semibold">Joining Date:</span> {selectedUser.date}</p>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 border border-orange-400 text-orange-400 rounded"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-orange-400 text-white rounded">
                Block
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

