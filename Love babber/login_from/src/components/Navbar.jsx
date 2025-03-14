import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import toast from 'react-hot-toast';

export default function Navbar({isLoggedIn,setIsLoggedIn}) {
	const logOutUser=()=>{
    setIsLoggedIn(false)
		toast.success("Log Out Successfully")
	}
	return (
		<div className='flex justify-between item-centre w-11/12 max-w-[1160px] py-4 mx-auto'>
			<Link to="/">
				<img src={logo} alt="Company Log" width={160} height={32} loading='lazy' />
			</Link>
			<nav>
				<ul className='flex gap-x-6 text-white'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="#">About</Link></li>
					<li><Link to="#">Contact</Link></li>
				</ul>
			</nav>

			<div className='flex gap-x-4 text-[#AFB2BF] items-center'>
				{
					!isLoggedIn && <Link to="/login"><button className='bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F] '>Log In</button></Link>
				}
				{
					!isLoggedIn &&<Link to="/signup"><button className='bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F] '>Sign Up</button></Link>
				}
				{
					isLoggedIn && <Link to="/"><button className='bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F] ' onClick={logOutUser}>Log Out</button></Link>
				}
				{
					isLoggedIn && <Link to="/dashboard"><button className='bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F] ' >DashBoard</button></Link>
				}
			</div>
		</div>
	)
}
