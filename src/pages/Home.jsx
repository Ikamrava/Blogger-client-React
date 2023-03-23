import React from 'react'
import { Link } from 'react-router-dom'
import {data} from "../data"

function Home() {
  const post = data.map(item=>
    <div className='max-w-6xl flex flex-col md:flex-row  md:justify-between md:gap-20' key={item.id}>
     
      <div className=' max-w-lg flex-1'>
        <img className=' w-[100%] shadow-2xl' src={item.images[0]} alt="" />
      </div>

      <div className='flex-1 mt-5'>
        <Link className=' text-center font-bold ' to={`/post/${item.id}`}>{item.brand}</Link>
        <p className='mt-2'>{item.description}</p>
        <button className=' text-centr shadow-lg p-1 mt-2 px-2 cursor-pointer'>Read More</button>
      </div>
      
       
    </div>
    
    )
  return (
    <div className=' max-w-6xl  flex flex-col md:[&>*:nth-child(even)]:flex-row-reverse gap-10 mt-10'>
      {post}
    </div>
  )
}

export default Home