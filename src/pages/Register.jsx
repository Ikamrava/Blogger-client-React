import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function Register() {
  const [userName,setUsername] =useState("")
  const [password,setPassword] =useState("")
  const [email,setEmail] =useState("")

  async function registerHandler(e){
   e.preventDefault()
   
    axios.post('https://evening-plains-24398.herokuapp.com/register',{userName,email,password}
    ).then(function (response) {
      console.log(response);
 
    })
  }

  return (
    <div className='flex flex-col  gap-5 bg-lime-100 w-[100%] h-[100vh] items-center justify-center '>
    <h1 className=' text-center bg-yellow-500 p-2 rounded-lg font-bold'>Input Your Information</h1>
    <form action="" className='flex flex-col  max-w-sm bg-white p-20 shadow-lg items-center'  >
      <input className=' border-b-2 border-black p-1 mb-5' required type="text" placeholder='Username'  value={userName} onChange={(e)=>setUsername(e.target.value)}/>
      <input className=' border-b-2 border-black p-1 mb-5'required type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className=' border-b-2 border-black p-1 mb-8' required type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className=' bg-slate-700 text-white p-2 rounded-lg font-bold w-[90%] mb-5' onClick={registerHandler}>Register</button>
      <p>Do you have an account ?</p>
      <Link to="/login" className=' text-slate-800 underline'>Login</Link>
    </form>
  </div>
  )
}

export default Register