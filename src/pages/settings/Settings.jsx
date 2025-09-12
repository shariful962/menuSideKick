import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const Settings = () => {
  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)] w-full">
        <div className="w-full h-[80px] text-white bg-Secondary flex items-center justify-start px-4 rounded-tl-[10px] rounded-tr-[10px]">
          <h1 className="title text-white">Settings</h1>
        </div>
        <div className="px-4 lg:px-8 hover:bg-gray-100 duration-300">
          <Link to={"/settings/changepass"}>
            <div className="settings-menu ">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                Change Password
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
        <div className="px-4 lg:px-8 hover:bg-gray-100 duration-300">
          <Link to={"/settings/privacy"}>
            <div className="settings-menu">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                Privacy Policy
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
        <div className="px-4 lg:px-8 transition-all hover:bg-gray-100 duration-300">
          <Link to={"/dashboard"}>
            <div className="settings-menu">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                Terms & Conditions
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
        <div className="px-4 lg:px-8 hover:bg-gray-100 duration-300">
          <Link to={"/dashboard"}>
            <div className="settings-menu ">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                About Us
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
