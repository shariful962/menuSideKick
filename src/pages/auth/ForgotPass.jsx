import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icons } from "../../lib/images";

const ForgotPass = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if (!formData.email) {
      setErrorMessage("Email is Required");
    }  else {
      setErrorMessage(""); // clear error
      
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-[691px] mx-auto">
        <div className="text-center space-y-8 mb-4">
          <img
            src={Icons.SigninLogo}
            alt="sign_in logo"
            className="w-[150px] inline-block"
          />
          <h1 className="text-[32px] md:[48px] lg:[64px] font-EBGaramond font-bold text-textClr tracking-widest">
            Menu Sidekick
          </h1>
        </div>
        <h1 className="font-bold font-EBGaramond text-textClr text-2xl md:text-[28px] lg:text-[2rem]" >Forget password</h1>
        <p className="text-textClr mt-3 mb-8">Enter your email address to ger a verification code for resetting your password.</p>
        <form onSubmit={handleSubmit}>
          {/* email  */}
          <div className="mb-6">
            <label className="label-control">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="abc@gmail.com"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          {/* Submit */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full h-[50px]  bg-Secondary text-white py-2 text-xl font-bold rounded-md hover:bg-[#c45e38] transition cursor-pointer"
            >
             Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;