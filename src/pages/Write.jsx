import { upload } from '@testing-library/user-event/dist/upload';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import { AuthCotext } from '../contect/authContext';

function Write() {
  const state = useLocation().state
  console.log(state)
  
  const [title,setTitle] =useState(state?.title ||"")
  const [desc,setDesc] =useState(state?.description ||"")
  const [file,setFile] =useState(null)
  const [cat,setCat] =useState(state?.cat ||"")
  const {currentUser} = useContext(AuthCotext)


  async function uploadImage(){
     try {
      const formData = new FormData()
      formData.append("file",file)
      axios.defaults.withCredentials = true;
      const res = await axios.post(`http://localhost:8020/uploads`,formData)
      console.log(res)

      
     } catch (error) {
      console.log(error)
     }
  }

  async function publishHandler(e){
    e.preventDefault()
    uploadImage()
    // try {
    //   axios.defaults.withCredentials = true;
    //   await axios.post(`http://localhost:8020/posts`,{
    //     title: title,
    //     description:desc,
    //     category:cat,
    //     uid:currentUser.id
    //   })
      
    // } catch (error) {
    //   console.log(error)
    // }
  
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
          
        </div>
        <div>
          <h1>Category</h1>
          <div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "laptops"} name="cat" value="laptops" id="laptops"  onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="laptops">Laptop</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "mobile"} name="cat" value="mobile" id="mobile" onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="mobile">Mobile</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "tablet"} name="cat" value="tablet" id="tablet" onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="tablet">Tablet</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "smartwatch"} name="cat" value="smartwatch" id="smartwatch" onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="smartwatch">Smart Watch</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" checked = {cat === "earphone"} name="cat" value="earphone" id="earphone"  onChange={(e)=>setCat(e.target.value)}/>
              <label htmlFor="earphone">Earphone</label>
            </div>
            
          </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default Write