import React from 'react'
import { Link } from 'react-router-dom'
import {data} from "../data"

function Menu() {
    const posts = data.map(item=>
        <div className='hidden md:flex md:flex-col  md:blobk  ' key={item.id}>
          <div className=' max-w-lg flex-1'>
          <Link className=' text-center font-bold ' to={`/post/${item.id}`}>{item.brand}</Link>
            <img className=' w-[100%] shadow-2xl' src={item.images[0]} alt="" />
          </div>
    
          <div className='flex-1 mt-5'>
            <p className='mt-2'>{item.description}</p>
            <button className=' text-centr shadow-lg p-1 mt-2 px-2 cursor-pointer'>Read More</button>
          </div>
        </div>
        
        )
  return (
    <div className=' flex flex-col gap-10'>{posts}</div>
  )
}

export default Menu