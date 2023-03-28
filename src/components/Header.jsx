import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthCotext } from '../contect/authContext';
import logo from "../Logo.png"



export default function Header() {
  const {currentUser ,logout} = useContext(AuthCotext)
  console.log(currentUser)
  return (
    <div className=' w-[100%] mt-5'>
      <div className=' flex items-center justify-between w-[100%] px-5'>
        <div className=' h-10'><Link to="/"><img src={logo} alt="" className=' h-[100%] w-30'/></Link></div>
        <div className='hidden md:block md:flex sm:gap-3 md:items-center md:justify-center'>
          <Link className=' text-gray-700' to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className=' text-gray-700' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className=' text-gray-700'to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className=' text-gray-700'to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className=' text-gray-700'to="/?cat=learning">
            <h6>LEARNING</h6>
          </Link>
         
          <span className='underline bg-slate-700 w-[50px] h-[50px] text-white rounded-full cursor-pointer text-center flex items-center justify-center hover:scale-105 '><a href="/write">Post</a></span>
          { currentUser ? <span onClick={logout} className=" cursor-pointer">Logout</span> : <span><a href="/login">Login</a></span>}
          {currentUser && 
            <div className=' flex flex-col items-center bg-yellow-500 rounded-full w-20 h-20 pt-3 '>
              <span>Hi</span>
              <span className=' capitalize'>{currentUser?.username}</span>
            </div>
          }
          
          
          
        </div>
        <div className='sm:hidden'><GiHamburgerMenu/></div>
      </div>
    </div>
  )
}
