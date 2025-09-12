import React from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'; // Add icon imports

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl text-orange-500">Settings</h1>
      <div className="mt-4">
        <div className="flex justify-between items-center py-3 cursor-pointer border-b border-gray-300">
          <span>Change Password</span>
          <FaChevronRight className="text-xl" />
        </div>

        <div className="flex justify-between items-center py-3 cursor-pointer border-b border-gray-300">
          <span>Privacy Policy</span>
          <FaChevronRight className="text-xl" />
        </div>

        <div className="flex justify-between items-center py-3 cursor-pointer border-b border-gray-300">
          <span>Terms & Conditions</span>
          <FaChevronRight className="text-xl" />
        </div>

        <div className="flex justify-between items-center py-3 cursor-pointer border-b border-gray-300">
          <span>About Us</span>
          <FaChevronRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Settings;