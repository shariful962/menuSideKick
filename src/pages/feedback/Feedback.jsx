// import React from 'react'

// const Feedback = () => {
//   return (
//     <div>
//       Feedback section 
//     </div>
//   )
// }

// export default Feedback

import React, { useMemo, useState } from "react";
import { FaEye, FaBan } from "react-icons/fa";

// ---- Helper to make mock users (250 rows) ----
const baseUser = {
  sid: "01",
  name: "Robert Fox",
  email: "fox@email",
  phone: "+123124",
  joined: "02-24-2024",
  avatar: "https://i.pravatar.cc/40?img=3",
};
const makeUsers = (n = 250) =>
  Array.from({ length: n }, (_, i) => ({
    ...baseUser,
    id: i + 1,
    name: `Robert Fox ${i + 1}`,
    email: `fox${i + 1}@email.com`,
  }));

export default function UserList() {
  const [users] = useState(makeUsers());
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hiddenMap, setHiddenMap] = useState({}); // { [userId]: true }
  const [blockedMap, setBlockedMap] = useState({}); // { [userId]: true }

  const pageSize = 8;

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.toLowerCase().includes(q)
    );
  }, [users, query]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  const toggleHide = (id) =>
    setHiddenMap((m) => ({ ...m, [id]: !m[id] }));

  const toggleBlocked = (id) =>
    setBlockedMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <div className="p-4 bg-[#FFFDE7] min-h-screen">
      {/* Header */}
      <div className="bg-[#E87A41] rounded-t-lg px-6 py-4 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:justify-between">
        <h1 className="text-white font-bold text-2xl">User List</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search User"
            className="px-3 py-2 rounded-md w-72 outline-none"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Blocked Users
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-b-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-2 text-left">S.ID</th>
                <th className="p-2 text-left">Full Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Phone No</th>
                <th className="p-2 text-left">Joined Date</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((u) => {
                const isHidden = !!hiddenMap[u.id];
                const isBlocked = !!blockedMap[u.id];
                return (
                  <tr key={u.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{u.sid}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={u.avatar}
                          alt="avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className={isHidden ? "opacity-40" : ""}>
                          {isHidden ? "Hidden" : u.name}
                          {isBlocked && (
                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                              blocked
                            </span>
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="p-2">{isHidden ? "••••••" : u.email}</td>
                    <td className="p-2">{isHidden ? "••••" : u.phone}</td>
                    <td className="p-2">{isHidden ? "— — —" : u.joined}</td>
                    <td className="p-2">
                      <div className="flex gap-3 items-center">
                        <button
                          title={isBlocked ? "Unblock" : "Block"}
                          onClick={() => toggleBlocked(u.id)}
                          className={isBlocked ? "text-red-700" : "text-red-500"}
                        >
                          <FaBan />
                        </button>
                        <button
                          title={isHidden ? "Show details" : "Hide details"}
                          onClick={() => toggleHide(u.id)}
                          className="text-blue-500"
                        >
                          <FaEye />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {pageRows.length === 0 && (
                <tr>
                  <td className="p-4 text-center text-gray-500" colSpan={6}>
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-4 text-sm text-gray-600">
          <span>
            SHOWING {total === 0 ? 0 : start + 1}–{Math.min(start + pageSize, total)} OF {total}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-2 py-1"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }).slice(0, 6).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded ${
                    p === currentPage ? "bg-orange-400 text-white" : ""
                  }`}
                >
                  {p}
                </button>
              );
            })}
            {totalPages > 6 && <span className="px-2">…</span>}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-2 py-1"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

