import React, { useContext, useEffect, useState } from 'react'
import image from "../2.jpg"
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from "moment"
import { AuthCotext } from '../contect/authContext';


function Single() {

  const [post,setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthCotext)
  console.log(currentUser)
 

  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8020/posts/${postId}`)
        
        setPost(res.data)


      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[postId])


  return (
    <div className=' mt-10 flex flex-col md:flex-row  mx-auto gap-8 '>
      
      <div className='flex flex-col items-start gap-5 flex-[1.5]'>
        <img className='  shadow-lg text-center object-cover w-[100%]' src={post[0]?.image} alt="" />
        <div className='  flex mt-2 gap-5 items-center   '>
          <img className=' w-12 h-12 rounded-full ' src={image} alt="" />
          <div className=' flex flex-col'>
            <span className=' capitalize'>{post[0]?.username}</span>
            <p className=' capitalize'>Postsed {moment(post[0]?.date).fromNow()}</p>
          </div>
          {currentUser != null && currentUser.username ===  post[0]?.username &&
          <div className=' flex gap-2'>
            <Link to ="/write"><AiFillEdit size={20} color="green"/></Link>
            <Link><AiFillDelete size={20} color="red"/></Link>
          </div>
          }
          
        </div>
        <div className=''>
        <h1 className=' font-bold'>{post[0]?.title}</h1>
        <p className=' text-justify'>{post[0]?.description}</p>
      </div>
      </div>
      <div className='flex-[.5]'>
        <Menu/>
      </div>
      
    </div>
  )
}

export default Single