import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import logo from "../Logo.png"



export default function Header() {
  return (
    <div className=' w-[100%] mt-5'>
      <div className=' flex items-center justify-between w-[100%] px-5'>
        <div className=' h-10'><img src={logo} alt="" className=' h-[100%]'/></div>
        <div className='hidden sm:block'>
          <Link to="/?cat=art">
            <h6>ART</h6>
          </Link>
        </div>
        <div className='sm:hidden'><GiHamburgerMenu/></div>
      </div>
    </div>
  )
}
