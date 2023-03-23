import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = useState('');
  return (
    <div className=' mt-10 flex flex-col md:flex-row  gap-5'>
      <div className=' flex flex-col gap-5'>
        <input className=' border-2 border-blue-300 p-2' type="text" placeholder='Title' />
        <ReactQuill className=' h-[100%]' theme="snow" value={value} onChange={setValue} />
      </div>
      <div className=' flex flex-col gap-5'>
        <div className=' flex flex-col gap-5'>
          <h1 className=' font-bold'>Publish</h1>
          <span><b>Status: </b>Draft</span>
          <span><b>Visibility: </b>Public</span>
          <input type="file" id="file"/>
          <div className='flex gap-10 '>
            <button className=' border-2  font-bold rounded-lg p-1 border-slate-800'>Save as a draft</button>
            <button className=' border-2  font-bold rounded-lg p-1 border-slate-800'>Update</button>
          </div>
          
        </div>
        <div>
          <h1>Category</h1>
          <div>
            <div className='flex gap-1'>
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" name="cat" value="science" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" name="cat" value="cinema" id="cinema" />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" name="cat" value="design" id="design" />
              <label htmlFor="design">Design</label>
            </div>
            <div className='flex gap-1'>
              <input type="radio" name="cat" value="food" id="food" />
              <label htmlFor="food">Food</label>
            </div>
            
          </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default Write