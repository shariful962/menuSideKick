// // Users.jsx
// import { Search } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { FaBan, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { LuEye } from "react-icons/lu";
// import UserModal from "./UserModal";
// import ConfirmBlockModal from "./ConfirmBlockModal";
// import { users } from "./data";

// const Users = () => {
//   const [search, setSearch] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Centralized block state
//   const [blockModalOpen, setBlockModalOpen] = useState(false);
//   const [userToBlock, setUserToBlock] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const perUsersPage = 3;


//   useEffect(()=>{
//     setCurrentPage(1)
//   },[search]);

//   const filterUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase()) ||
//       user.phone.includes(search.toLowerCase())
//   );

//   const handleRequestBlock = (user) => {
//     setUserToBlock(user);
//     setBlockModalOpen(true);
//   };

//   const handleConfirmBlock = () => {
//     console.log("Blocked user:", userToBlock);
//     setBlockModalOpen(false);
//     setUserToBlock(null);
//     setSelectedUser(null); // Optional: close UserModal if open
//   };

//   const handleCancelBlock = () => {
//     setBlockModalOpen(false);
//     setUserToBlock(null);
//   };

//   // pagination
//   const totalPages = Math.ceil(filterUsers.length / perUsersPage);
//   const startIndex = (currentPage - 1) * perUsersPage;
//   const endIndex = startIndex + perUsersPage
//   const currentUsers = filterUsers.slice(startIndex, endIndex);

//   //page change
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };
//   return (
//     <div className="p-4 bg-Primary h-[calc(100vh-100px)]">
//       {/* Table Section */}
//       <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
//         <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
//             <h2 className="title text-white">User List</h2>
//             <div className="flex flex-col md:flex-row gap-y-2 gap-x-8">
//               <div className="flex items-center w-full md:w-[300px] h-[42px] px-3 py-2 bg-white border border-Primary rounded-sm">
//                 <Search className="w-5 h-5 mr-2" />
//                 <input
//                   type="text"
//                   placeholder="Search User"
//                   className="w-full outline-none text-sm text-gray-700"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//               <button className="h-[42px] px-6 w-max py-2 bg-white text-Secondary rounded font-bold">
//                 Blocked Users
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="mt-7.5 overflow-x-auto px-4">
//           <table className="w-full text-left">
//             <thead className="border-b border-[#154452]">
//               <tr>
//                 <th className="px-4 py-3">S.lD</th>
//                 <th className="px-4 py-3">Full Name</th>
//                 <th className="px-4 py-3">Email</th>
//                 <th className="hidden md:table-cell px-4 py-3">Phone No</th>
//                 <th className="hidden md:table-cell px-4 py-3">Joined Date</th>
//                 <th className="px-4 py-3">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-[#154452]">
//               {currentUsers.length > 0 ? (
//                 currentUsers.map((user) => (
//                   <tr key={user.id} className="border-b border-[#E8E8F5]">
//                     <td className="px-4 py-3">{user.id}</td>
//                     <td className="px-4 py-3 flex items-center gap-x-2">
//                       <img
//                         src={user.avatar}
//                         alt={user.name}
//                         className="w-8 h-8 rounded-full"
//                       />
//                       {user.name}
//                     </td>
//                     <td className="px-4 py-3">{user.email}</td>
//                     <td className="hidden md:table-cell px-4 py-3">
//                       {user.phone}
//                     </td>
//                     <td className="hidden md:table-cell px-4 py-3">
//                       {user.date}
//                     </td>
//                     <td className="px-4 py-3 flex items-center gap-x-3">
//                       <FaBan
//                         size={20}
//                         className="text-Secondary cursor-pointer"
//                         onClick={() => handleRequestBlock(user)}
//                       />
//                       <LuEye
//                         size={20}
//                         className="text-[#154452] cursor-pointer"
//                         onClick={() => setSelectedUser(user)}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-6 text-gray-500">
//                     No users found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         {/* pagination */}
//         {totalPages > 1 && (
//           <div className="mt-4 flex items-center justify-end gap-1 px-4">
//             {/* prev button */}
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-3 py-1  rounded flex gap-1 items-center ${
//                 currentPage === 1
//                   ? " text-[#727272] cursor-not-allowed"
//                   : "bg-white text-[#727272] "
//               }`}
//             >
//               <FaChevronLeft />
//             </button>

//             {/* dynamic page numbers */}
//             <div className="flex items-center gap-2">
//               {currentPage > 1 && (
//                 <div
//                   onClick={() => handlePageChange(1)}
//                   className="px-2   rounded cursor-pointer"
//                 >
//                   1
//                 </div>
//               )}
              

//               {currentPage > 2 && <div>...</div>}

//               <div className="px-2   rounded bg-Secondary text-white">
//                 {currentPage}
//               </div>

//               {currentPage < totalPages - 1 && <div>...</div>}

//               {currentPage < totalPages && (
//                 <div
//                   onClick={() => handlePageChange(totalPages)}
//                   className="px-2   rounded cursor-pointer "
//                 >
//                   {totalPages}
//                 </div>
//               )}
//             </div>

//             {/* next button */}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={` rounded flex gap-1 items-center ${
//                 currentPage === totalPages
//                   ? " text-[#727272] cursor-not-allowed"
//                   : "bg-white text-[#727272] "
//               }`}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Modals */}
//       <UserModal
//         user={selectedUser}
//         onClose={() => setSelectedUser(null)}
//         onBlock={handleRequestBlock} // use centralized block
//       />

//       <ConfirmBlockModal
//         open={blockModalOpen}
//         user={userToBlock} // optional, to show user name
//         onConfirm={handleConfirmBlock}
//         onCancel={handleCancelBlock}
//       />
//     </div>
//   );
// };

// export default Users;


// Users.jsx
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaBan, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import UserModal from "./UserModal";
import ConfirmBlockModal from "./ConfirmBlockModal";
import { users } from "./data";


import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Users = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Centralized block state
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [userToBlock, setUserToBlock] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;


  useEffect(()=>{
    setCurrentPage(1)
  },[search]);

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search.toLowerCase())
  );

  const handleRequestBlock = (user) => {
    setUserToBlock(user);
    setBlockModalOpen(true);
  };

  const handleConfirmBlock = () => {
    console.log("Blocked user:", userToBlock);
    setBlockModalOpen(false);
    setUserToBlock(null);
    setSelectedUser(null); // Optional: close UserModal if open
  };

  const handleCancelBlock = () => {
    setBlockModalOpen(false);
    setUserToBlock(null);
  };

  // pagination
  const totalPages = Math.ceil(filterUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = filterUsers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <div className="p-4 bg-Primary h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h2 className="title text-white">User List</h2>
            <div className="flex flex-col md:flex-row gap-y-2 gap-x-8">
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
              <button className="h-[42px] px-6 w-max py-2 bg-white text-Secondary rounded font-bold">
                Blocked Users
              </button>
            </div>
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
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
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
                        onClick={() => handleRequestBlock(user)}
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
         {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between px-4">
            {/* Left: showing X–Y of Z */}
            <div className="text-lg text-Secondary">
             SHOWING {startIndex + 1}–{Math.min(endIndex, filterUsers.length)} OF {" "}
              {filterUsers.length}
            </div>

            {/* Right: MUI Pagination */}
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                siblingCount={0}
                boundaryCount={1}
              />
            </Stack>
          </div>
        )}
      </div>
      
      {/* Modals */}
      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onBlock={handleRequestBlock} // use centralized block
      />

      <ConfirmBlockModal
        open={blockModalOpen}
        user={userToBlock} // optional, to show user name
        onConfirm={handleConfirmBlock}
        onCancel={handleCancelBlock}
      />
    </div>
  );
};

export default Users;







