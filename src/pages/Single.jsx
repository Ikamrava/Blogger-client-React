import React from 'react'
import image from "../2.jpg"
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


function Single() {
  return (
    <div className=' mt-10 flex flex-col md:flex-row  mx-auto gap-8 '>
      
      <div className='flex flex-col items-start gap-5 flex-[1.5]'>
        <img className='  shadow-lg text-center object-cover w-[100%]' src={image} alt="" />
        <div className='  flex mt-2 gap-5 items-center   '>
          <img className=' w-12 h-12 rounded-full ' src={image} alt="" />
          <div className=' flex flex-col'>
            <span>John</span>
            <p>Posted 2 Days Ago</p>
          </div>
          <div className=' flex gap-2'>
            <Link to ="/write"><AiFillEdit size={20} color="green"/></Link>
            <Link><AiFillDelete size={20} color="red"/></Link>
          </div>
          
        </div>
        <div className=''>
        <h1 className=' font-bold'>Where does it come from?</h1>
        <p className=' text-justify'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </div>
      </div>
      <div className='flex-[.5]'>
        <Menu/>
      </div>
      
    </div>
  )
}

export default Single