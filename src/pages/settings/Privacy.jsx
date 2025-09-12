import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const Privacy = () => {
  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[83vh] w-full">
        <div className="w-full h-[80px] text-white bg-Secondary flex items-center justify-start px-4 rounded-tl-[10px] rounded-tr-[10px]">
          <h1 className="title text-white">Change Password</h1>
        </div>
        
      </div>
    </div>
  );
};

export default Privacy;