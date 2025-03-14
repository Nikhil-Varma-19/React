import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router";
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const LoginForm = ({setIsLoggedIn}) => {

	const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [fromValue, setFromValue] = useState({
    email: "",
    password: "",
  });

  const changeFormHandler = (e) => {
    setFromValue((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordVisible = () => {
    setShowPassword((prev) => !prev);
  };
	const submitFormHandler=(e)=>{
		e.preventDefault()
		setIsLoggedIn(true)
		toast.success("Login Sucessfully")
		navigate("/dashboard")
	}

  return (
    <form onSubmit={submitFormHandler}
    className="flex flex-col mt-4 gap-y-4 w-full"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
          Email Address <sup className="text-red-300">*</sup>
        </p>
        <input
        className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF]"
          type="email"
          name="email"
          id="email"
          value={fromValue.email}
          required
          placeholder="Enter your email Id"
          onChange={changeFormHandler}
        />
      </label>
      <label className="w-full">
      <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
          Password <sup className="text-red-300">*</sup>
        </p>
        <input
          className="bg-[#161D29] w-full rounded-[0.5rem] p-[12px] text-[#F1F2FF] pr-[36px]"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={fromValue.password}
          required
          placeholder="Enter your password"
          onChange={changeFormHandler}
        />
        <span
        className="absolute left-104 top-[62.1%] transform -translate-y-1/2 z-[10] cursor-pointer"
        onClick={passwordVisible}>
          {showPassword ? <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
        </span>
        <Link to="#">
          <p
          className="text-xs pt-3 text-blue-100 max-w-max ml-auto "
          >Forgot Password</p>
        </Link>
      </label>

      <button className="cursor-pointer border rounded-md py-2 bg-yellow-300 text-black items-center text-xl border-white">Sign In</button>
    </form>
  );
};
