import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword0, setShowPassword0] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [accountType,setAccountType]=useState("")
  const [formHandler, setFormHandler] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const passwordVisible0 = () => {
    setShowPassword0((prev) => !prev);
  };
  const passwordVisible1 = () => {
    setShowPassword1((prev) => !prev);
  };
  const changeFormHandler = (e) => {
    setFormHandler((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (formHandler.password !== formHandler.confirmPassword) {
      toast.error("Password should be same");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  };
  
  return (
    <div>
      <div className="flex my-5 bg-[#161D29] text-white gap-x-3 p-1 rounded-full max-w-max items-center">
        <button className={`${accountType == "student" ? " bg-[#000814] text-[#F1F2FF] ": "bg-transparent text-[#999DAA]"} py-2 px-5  transition-all duration-200 cursor-pointer  rounded-full ` } onClick={()=> setAccountType("student")}>Student</button>
        <button className={`${accountType == "instructor" ? " bg-[#000814] text-[#F1F2FF] ": "bg-transparent text-[#999DAA]"} py-2 px-5 transition-all duration-200 cursor-pointer rounded-full` } onClick={()=> setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitForm} className="flex flex-col mt-4 gap-y-4 w-full">
        <div className="flex gap-6">
          <label>
            <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-300">*</sup>
            </p>
            <input
              className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF]"
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="Enter your first name"
              value={formHandler.fname}
              onChange={changeFormHandler}
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              Last Name <sup className="text-red-300">*</sup>
            </p>
            <input
              className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF]"
              type="text"
              name="lname"
              id="lname"
              required
              placeholder="Enter your last name"
              value={formHandler.lname}
              onChange={changeFormHandler}
            />
          </label>
        </div >
        <label>
          <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-300">*</sup>
          </p>
          <input
            className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF]"
            type="email"
            name="email"
            id="email"
            value={formHandler.email}
            required
            placeholder="Enter your email Id"
            onChange={changeFormHandler}
          />
        </label>
        <div className="flex flex-col gap-3">
          <label>
            <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              Password <sup className="text-red-300">*</sup>
            </p>
            <input
              className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF]"
              type={showPassword0 ? "text" : "password"}
              name="password"
              id="password"
              value={formHandler.password}
              required
              placeholder="Enter your password"
              onChange={changeFormHandler}
            />
            <span onClick={passwordVisible0} className="absolute left-105 transform -translate-y-1/2 cursor-pointer top-[102.6%]">
              {!showPassword0 ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>
          <label>
            <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-red-300">*</sup>
            </p>
            <input
              className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF]"
              type={showPassword1 ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formHandler.confirmPassword}
              required
              placeholder="Enter your password again"
              onChange={changeFormHandler}
            />
            <span onClick={passwordVisible1} className="absolute left-105 transform -translate-y-1/2 cursor-pointer top-[117.3%]">
              {!showPassword1 ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>
        </div>
        <button className="cursor-pointer border rounded-md py-2 bg-yellow-300 text-black items-center text-xl border-white mt-2" >Create Account</button>
      </form>
    </div>
  );
};
