// import React from "react";
// import { FaChevronRight } from "react-icons/fa";
// import { FiArrowLeft } from "react-icons/fi";
// import { Link } from "react-router";

// const Privacy = () => {
//   return (
//     <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
//       <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[83vh] w-full">
//         <div className="w-full h-[80px] text-white bg-Secondary flex items-center justify-start px-4 rounded-tl-[10px] rounded-tr-[10px]">
//           <h1 className="title text-white">Change Password</h1>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Privacy;


// import React, { useState } from "react";

// function PrivacyPolicy() {
//   const [file, setFile] = useState(null);
//   const [privacyText, setPrivacyText] = useState(
//     `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   );

//   const [alignment, setAlignment] = useState("left");

//   const handleFileUpload = (event) => {
//     const uploadedFile = event.target.files[0];
//     if (uploadedFile) {
//       setFile(URL.createObjectURL(uploadedFile));
//     }
//   };

//   const handleSave = () => {
//     // Logic to save the privacy policy (e.g., sending to the server)
//     alert("Privacy Policy Saved!");
//   };

//   const handleAlignmentChange = (align) => {
//     setAlignment(align);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       {/* Header */}
//       <div className="bg-orange-500 p-4 rounded-t-lg flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-white">Privacy Policy</h1>
//         <button
//           onClick={handleSave}
//           className="px-6 py-2 bg-white text-orange-500 rounded-lg hover:bg-gray-100 focus:outline-none"
//         >
//           Save
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="p-6">
//         <textarea
//           value={privacyText}
//           onChange={(e) => setPrivacyText(e.target.value)}
//           rows="10"
//           className={`w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 ${alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left"}`}
//         ></textarea>
//       </div>

//       {/* Bottom Content */}
//       <div className="flex justify-between p-4">
//         {/* Image Upload (Left) */}
//         <div className="w-1/2 mr-4">
//           <p className="text-sm text-gray-700 mb-2">Upload your image:</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileUpload}
//             className="block w-full text-sm text-gray-500 border border-gray-300 p-2 mb-4 rounded-lg"
//           />
//           {file && (
//             <div className="mt-4">
//               <img src={file} alt="Uploaded" className="w-32 h-32 object-cover rounded-lg" />
//             </div>
//           )}
//         </div>

//         {/* Text Alignment Options (Right) */}
//         <div className="w-1/2 flex justify-end items-center space-x-4">
//           <p className="text-sm text-gray-700">Text Alignment:</p>
//           <button
//             onClick={() => handleAlignmentChange("left")}
//             className={`px-4 py-2 rounded-lg ${alignment === "left" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
//           >
//             Left
//           </button>
//           <button
//             onClick={() => handleAlignmentChange("center")}
//             className={`px-4 py-2 rounded-lg ${alignment === "center" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
//           >
//             Center
//           </button>
//           <button
//             onClick={() => handleAlignmentChange("right")}
//             className={`px-4 py-2 rounded-lg ${alignment === "right" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
//           >
//             Right
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PrivacyPolicy;



import React, { useState } from "react";

function PrivacyPolicy() {
  const [file, setFile] = useState(null);
  const [privacyText, setPrivacyText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  // text controls
  const [alignment, setAlignment] = useState("left"); // 'left' | 'center' | 'right'
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontSize, setFontSize] = useState(16); // px

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) setFile(URL.createObjectURL(uploadedFile));
  };

  const handleSave = () => {
    alert("Privacy Policy Saved!");
  };

  // classes for textarea from state
  const alignClass =
    alignment === "center"
      ? "text-center"
      : alignment === "right"
      ? "text-right"
      : "text-left";

  const weightClass = isBold ? "font-semibold" : "font-normal";
  const italicClass = isItalic ? "italic" : "not-italic";
  const underlineClass = isUnderline ? "underline" : "no-underline";

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Header */}
      <div className="bg-orange-500 p-4 rounded-t-lg flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Privacy Policy</h1>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-white text-orange-500 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          Save
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <textarea
          value={privacyText}
          onChange={(e) => setPrivacyText(e.target.value)}
          rows={10}
          className={`w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 ${alignClass} ${weightClass} ${italicClass} ${underlineClass}`}
          style={{ fontSize: `${fontSize}px`, lineHeight: "1.6" }}
        />
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col md:flex-row justify-between p-4 gap-6">
        {/* Image Upload (Left) */}
        <div className="md:w-1/2">
          <p className="text-sm text-gray-700 mb-2">Upload your image:</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-600 border border-gray-300 p-2 rounded-lg"
          />
          {file && (
            <div className="mt-4">
              <img
                src={file}
                alt="Uploaded"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Text Tools (Right) */}
        <div className="md:w-1/2">
          <p className="text-sm text-gray-700 mb-2">Text Tools</p>

          <div className="flex flex-wrap items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg p-2">
            {/* Alignment group */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md p-1">
              {/* Left */}
              <button
                onClick={() => setAlignment("left")}
                className={`p-2 rounded-md ${
                  alignment === "left"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Align left"
              >
                {/* icon: align-left */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="5" width="14" height="2" />
                  <rect x="3" y="10" width="18" height="2" />
                  <rect x="3" y="15" width="12" height="2" />
                  <rect x="3" y="20" width="18" height="2" />
                </svg>
              </button>
              {/* Center */}
              <button
                onClick={() => setAlignment("center")}
                className={`p-2 rounded-md ${
                  alignment === "center"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Align center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="5" y="5" width="14" height="2" />
                  <rect x="3" y="10" width="18" height="2" />
                  <rect x="6" y="15" width="12" height="2" />
                  <rect x="3" y="20" width="18" height="2" />
                </svg>
              </button>
              {/* Right */}
              <button
                onClick={() => setAlignment("right")}
                className={`p-2 rounded-md ${
                  alignment === "right"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Align right"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="7" y="5" width="14" height="2" />
                  <rect x="3" y="10" width="18" height="2" />
                  <rect x="9" y="15" width="12" height="2" />
                  <rect x="3" y="20" width="18" height="2" />
                </svg>
              </button>
            </div>

            {/* Style group: bold / italic / underline */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md p-1">
              <button
                onClick={() => setIsBold((v) => !v)}
                className={`px-2 py-1 rounded-md text-sm font-semibold ${
                  isBold
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Bold"
              >
                B
              </button>
              <button
                onClick={() => setIsItalic((v) => !v)}
                className={`px-2 py-1 rounded-md text-sm italic ${
                  isItalic
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Italic"
              >
                I
              </button>
              <button
                onClick={() => setIsUnderline((v) => !v)}
                className={`px-2 py-1 rounded-md text-sm ${
                  isUnderline
                    ? "bg-orange-500 text-white underline"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Underline"
              >
                U
              </button>
            </div>

            {/* Font size */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-2 py-1">
              <span className="text-xs text-gray-500">Size</span>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="bg-transparent text-gray-800 text-sm focus:outline-none"
                title="Font size"
              >
                {[12, 14, 16, 18, 20, 24, 28, 32].map((s) => (
                  <option key={s} value={s}>
                    {s}px
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Helper line (optional) */}
          <p className="text-xs text-gray-500 mt-2">
            Use the toolbar to match the text alignment, style, and size like the reference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

