import React, { useContext, useEffect, useState } from 'react'
import image from "../2.jpg"
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from "moment"
import { AuthCotext } from '../contect/authContext';


function Single() {


  const [post,setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthCotext)
  const homenavigate = useNavigate()

  const getText = (html)=>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  

  async function handleDelete(){
    try {
      axios.defaults.withCredentials = true;
      await axios.delete(`http://localhost:8020/posts/${postId}`)
      homenavigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
 

  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        axios.defaults.withCredentials = true;
        console.log(postId)
        const res = await axios.get(`http://localhost:8020/posts/${postId}`)
        setPost(res.data)
        console.log(post)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[postId])


  return (
    <div className=' mt-10 flex flex-col md:flex-row  mx-auto gap-8 '>
      
      <div className='flex flex-col items-start gap-5 flex-[1.5]'>
        <img className='  shadow-lg text-center object-cover w-[100%]' src={post[0]?.imageurl} alt="" />
        <div className='  flex mt-2 gap-5 items-center   '>
          <img className=' w-12 h-12 rounded-full ' src={image} alt="" />
          <div className=' flex flex-col'>
            <span className=' capitalize'>{post[0]?.username}</span>
            <p className=' capitalize'>Postsed {moment(post[0]?.date).fromNow()}</p>
          </div>
          {currentUser != null && currentUser.id ===  post[0]?.uid &&
          <div className=' flex gap-2'>
            <Link to = {"/write?edit=" + postId } state={post[0]}><AiFillEdit size={20} color="green"/></Link>
            <Link><AiFillDelete size={20} color="red" onClick={handleDelete}/></Link>
          </div>
          }
          
        </div>
        <div className=''>
        <h1 className=' font-bold'>{post[0]?.title}</h1>
        <p className=' text-justify'>{getText(post[0]?.description) }</p>
      </div>
      </div>
      <div className='flex-[.5]'>
        <Menu cat = {post[0]?.cat}/>
      </div>
      
    </div>
  )
}

export default Single