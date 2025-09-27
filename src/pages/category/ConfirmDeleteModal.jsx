import React from "react";

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[350px] p-6 text-center shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          Do you want to Remove this Category?
        </h2>
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="px-4 py-2 rounded border border-Secondary text-Secondary cursor-pointer transition-all hover:bg-Secondary hover:text-white duration-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-[#EF4444] text-white cursor-pointer"
            onClick={onConfirm}
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
