import { Search } from "lucide-react";
import React, { useState } from "react";
import { FaBan } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { NavLink } from "react-router";

const Category = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Diet');

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

  const buttonLists = [
    { id: 1, name: "Diet" },
    { id: 2, name: "Allergies" },
    { id: 3, name: "Medical" },
    { id: 4, name: "Ingredients" },
    { id: 5, name: "Avatar" },
  ];

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        {/* Header */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px] flex flex-col md:flex-row justify-between items-center gap-2">
          <h2 className="title text-white">User List</h2>
          <div className="flex gap-x-4">
            <button className="h-[42px] px-6 py-2 bg-white text-Secondary rounded font-bold">
              +Add Categories
            </button>
          </div>
        </div>

        {/* button area  */}
       <div className="px-6 mt-7.5 flex flex-col md:flex-row gap-5">
  {buttonLists.map((btn) => (
    <button
      key={btn.id}
      onClick={() => setActiveCategory(btn.name)}
      className={`px-3 py-2 rounded text-xl w-[130px] ${
        activeCategory === btn.name
          ? "bg-Secondary text-white"
          : "border border-Secondary text-Secondary"
      }`}
    >
      {btn.name}
    </button>
  ))}
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
              {users.length > 0 ? (
                users.map((user) => (
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
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.phone}
                    </td>
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.date}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-x-3">
                      <FaBan
                        size={20}
                        className="text-Secondary cursor-pointer"
                      />
                      <LuEye
                        size={20}
                        className="text-[#154452] cursor-pointer"
                        onClick={() => setSelectedUser(user)}
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
    </div>
  );
};

export default Category;
