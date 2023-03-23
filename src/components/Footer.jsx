import React from 'react'
import logo from "../Logo.png"

function Footer() {
  return (
    <div className=' flex  gap-10 bg-slate-500 w-[100%] justify-center p-2 '>
      <span className=' h-10'><img src={logo} alt="" className=' h-[70%] w-30 '/></span>
      <span className=' text-white pt-1'>Made with ❤️ and <b>React.js</b>.</span>
      </div>
  )
}

export default Footer