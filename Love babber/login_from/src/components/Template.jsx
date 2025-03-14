import React from 'react'
import FrameImg from "../assets/frame.png"
import {LoginForm} from "./LoginForm"
import { SignUpForm } from './SignUpForm'
import { FcGoogle } from "react-icons/fc";
export const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
	return (
		<div className='flex w-11/12 max-w-[1160px] mx-auto justify-between py-[1.66rem]  '>
			<div className='w-11/12 max-w-[400px]'>
				<h1 className='text-[#F1F2FF] font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

				<p className='text-[1.1.25rem] leading-[1.625rem] mt-4 flex flex-col'>
					<span className='text-[#AFB2BF]'>{desc1}</span>
					<span className='text-blue-100 italic'>{desc2}</span>	
				</p>

				{
					formType === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
				}
				
				<div className='flex w-full items-center my-4 gap-x-2'>
					<div className='h-[1px] w-full bg-white'></div>
					<p className='uppercase font-medium text-[#2C333F] leading-[1.375rem]'>OR</p>
					<div className='h-[1px] w-full bg-white'></div>
				</div>

				<button className='flex w-full justify-center items-center gap-x-5 border border-[#2C333F] text-[#757c89] font-medium rounded-md p-3 mx-auto cursor-pointer'>
				<FcGoogle /><p>Sign Up with Google</p>
				</button>

			</div>

			<div className='relative w-11/12 max-w-[450px] pt-5'>
				<img src={FrameImg} alt=""  width={558} height={504} loading='lazy'/>
				<img src={image} alt=""  width={558} height={490} loading='lazy' className='absolute top-3 right-2'/>
			</div>
		</div>
	)
}
