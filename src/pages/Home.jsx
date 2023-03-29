import axios from "axios";
import React, { useEffect, useState } from 'react'
import ReactQuill from "react-quill";
import { Link, useLocation } from 'react-router-dom'
import 'react-quill/dist/quill.bubble.css';


function Home() {

  const [posts,setPosts] = useState([])
  const cat = useLocation().search

  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8020/posts/${cat}`)
        setPosts(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[cat])


  return (
    
    <div className=' max-w-6xl  flex flex-col md:[&>*:nth-child(even)]:flex-row-reverse gap-10 mt-10 mb-10'>
      {posts.length>0 ? posts.map(item =>(
      
      <div className='max-w-6xl flex flex-col md:flex-row  md:justify-between md:gap-20' key={item.id}>
     
      <div className=' max-w-2xl flex-1'>
        <Link to={`/post/${item.id}`} ><img className=' w-[100%] shadow-2xl object-fill' src={item.imageurl} alt="" /></Link>
      </div>

      <div className='flex-1 mt-5'>
        <Link className=' text-center font-bold capitalize  ' to={`/post/${item.id}`}>{item.title}</Link>
        <ReactQuill className="max-w-lg max-h-36 overflow-hidden mb-4 text-lg" value={item.description}
          readOnly={true}
          theme={"bubble"}
          
          
          />
        {/* <p className='mt-2 capitalize text-clip max-w-lg max-h-36 overflow-hidden'>{getText(item.description)}</p> */}
        <Link className=' text-centr shadow-lg p-1 mt-4 px-2 cursor-pointer bg-orange-400 rounded-md'  to={`/post/${item.id}`}>Read More</Link>
      </div>
   </div>
      
    
      )) :
      
      <>
      Loading ...
      </> }
    </div>
  )
}

export default Home