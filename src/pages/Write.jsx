import { upload } from '@testing-library/user-event/dist/upload';
import axios from 'axios';
import moment from 'moment';
import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import { AuthCotext } from '../contect/authContext';

function Write() {
  const state = useLocation().state
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  console.log(state)
 
  
  const [title,setTitle] =useState(state?.title ||"")
  const [desc,setDesc] =useState(state?.description ||"")
  const [file,setFile] =useState(null)
  const [cat,setCat] =useState(state?.cat ||"")
  const {currentUser} = useContext(AuthCotext)
  const [result,setResult] = useState(null)


  async function uploadImage(){
     try {
      const formData = new FormData()
      formData.append("file",file)
      axios.defaults.withCredentials = true;
      const res = await axios.post(`http://localhost:8020/uploads`,formData)
      
      return res.data

     } catch (e) {
      setResult(e.response.data)
     }
  }

  async function publishHandler(e){
    e.preventDefault()

    if(currentUser){
      const imgUrl = await uploadImage()
      try {
        if (state){
          axios.defaults.withCredentials = true
          await axios.put(`http://localhost:8020/posts/${state.id}`, {
          title: title,
          description:desc,
          category:cat,
          uid:currentUser.id,
          image:file ? imgUrl : "",
          date : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        })
        setResult("Post has been edited")
        setTitle("")
        setDesc("")
        setFile(null)
  
        }else{
          axios.defaults.withCredentials = true
          await axios.post(`http://localhost:8020/posts`, {
          title: title,
          description:desc,
          category:cat,
          uid:currentUser.id,
          image:file?imgUrl: "",
          date : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        })
        setResult("Post has been sent")
        setTitle("")
        setDesc("")
        setFile(null)
        }
        
      } catch (error) {
        console.log(error)
      }
    }else{
      setResult("Please login first")
    }
    
  
  }


  return (
    <div className=' mt-10 flex flex-col md:flex-row  gap-5'>
      <div className=' flex flex-col gap-5'>
        <input className=' border-2 border-blue-300 p-2' type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <ReactQuill className=' h-[100%]' theme="snow" value={desc} onChange={setDesc} />
      </div>
      <div className=' flex flex-col gap-5'>
        <div className=' flex flex-col gap-5'>
          <h1 className=' font-bold'>Publish</h1>
          <span><b>Status: </b>Draft</span>
          <span><b>Visibility: </b>Public</span>
          
          <input type="file" id="file"  onChange={(e)=>setFile(e.target.files[0])}/>
          <div className='flex gap-10 '>
            <button className=' border-2  font-bold rounded-lg p-1 border-slate-800'>Save as a draft</button>
            <button className=' border-2  font-bold rounded-lg p-1 border-slate-800' onClick={publishHandler}>Publish</button>
            
          </div>
          {result && <p className=' text-red-600'>{result}</p>}
        </div>
        <div>
          <h1>Category</h1>
          <div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "technology"} name="cat" value="technology" id="technology"  onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "art"} name="cat" value="art" id="art" onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="art">Art</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "food"} name="cat" value="food" id="food" onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="food">Food</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "learning"} name="cat" value="learning" id="learning"  onChange={(e)=>setCat(e.target.value)}/>
              <label htmlFor="learning">Learning</label>
            </div>
            
          </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default Write