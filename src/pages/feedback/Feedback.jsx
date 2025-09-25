import { Search } from "lucide-react";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import FeedbackModal from "./FeedbackModal";

const Feedback = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: "01",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=1",
      msg: `Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.`
    },
    {
      id: "02",
      name: "Mark Henry",
      email: "markhenry@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=2",
      msg: `Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.`
    },
    {
      id: "03",
      name: "Shifat",
      email: "shifat@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=3",
      msg: `Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.`
    },
    {
      id: "04",
      name: "John Doe",
      email: "john@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=4",
      msg: `Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.`
    },
      {
      id: "05",
      name: "Farabi Hasan",
      email: "farabihasan@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=5",
      msg: `Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.`
    },
      {
      id: "06",
      name: "John Doe",
      email: "john@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=6",
      msg: `Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.`
    },
  ];



  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        {/* Header */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px] flex flex-col md:flex-row justify-between items-center gap-2">
          <h2 className="title text-white">Report Management</h2>
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

      {/* Modal Component */}
      <FeedbackModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        
      />
    </div>
  );
};

export default Feedback;
