import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthCotext } from '../contect/authContext';
import logo from "../Logo.png"



export default function Header() {
  const {currentUser} = useContext(AuthCotext)
  console.log(currentUser)
  return (
    <div className=' w-[100%] mt-5'>
      <div className=' flex items-center justify-between w-[100%] px-5'>
        <div className=' h-10'><img src={logo} alt="" className=' h-[100%] w-30'/></div>
        <div className='hidden md:block md:flex sm:gap-3 md:items-center md:justify-center'>
          <Link className=' text-gray-700' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className=' text-gray-700' to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className=' text-gray-700'to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className=' text-gray-700'to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className=' text-gray-700'to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className=' text-gray-700' to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span><a href="/register">Register</a></span>
          <span className=' capitalize'>{currentUser?.username}</span>
          <span className='underline bg-slate-700 w-[50px] h-[50px] text-white rounded-full cursor-pointer text-center flex items-center justify-center hover:scale-105 '><a href="/write">Post</a></span>
        </div>
        <div className='sm:hidden'><GiHamburgerMenu/></div>
      </div>
    </div>
  )
}
