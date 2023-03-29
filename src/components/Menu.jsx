import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Menu({cat}) {
  const [posts,setPosts] = useState([])
  console.log(cat)
  const getText = (html)=>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }

  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8020/posts/?cat=${cat}`)
        console.log(res.data)
        setPosts(res.data)


      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[cat])
  

    const postsdata = posts.map(item=>
        <div className='hidden md:flex md:flex-col  md:blobk  ' key={item.id}>
          <div className=' max-w-lg flex-1'>
          <Link className=' text-center font-bold ' to={`/post/${item.id}`}>{item.brand}</Link>
            <Link to={`/post/${item.id}`}><img className=' w-[100%] shadow-2xl' src={item.imageurl} alt="" /></Link>
          </div>
    
          <div className='flex-1 mt-5'>
            <p className='mt-2 truncate max-w-xs'>{getText(item.description) }</p>
            <Link className=' text-centr shadow-lg p-1 mt-4 px-2 cursor-pointer bg-orange-400 rounded-md'  to={`/post/${item.id}`}>Read More</Link>
          </div>
        </div>
        )
  return (
    <div className=' flex flex-col gap-10'>{postsdata}</div>
  )
}

export default Menu