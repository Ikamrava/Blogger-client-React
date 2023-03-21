import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='flex flex-col  gap-5 bg-lime-100 w-[100%] h-[100vh] items-center justify-center '>
    <h1 className=' text-center bg-yellow-500 p-2 rounded-lg font-bold'>Input Your Information</h1>
    <form action="" className='flex flex-col  max-w-sm bg-white p-20 shadow-lg items-center'  >
      <input className=' border-b-2 border-black p-1 mb-5' required type="text" placeholder='Username' />
      <input className=' border-b-2 border-black p-1 mb-5'required type="email" placeholder='Email' />
      <input className=' border-b-2 border-black p-1 mb-8' required type="password" placeholder='Password' />
      <button className=' bg-slate-700 text-white p-2 rounded-lg font-bold w-[90%] mb-5'>Register</button>
      <p>Do you have an account ?</p>
      <Link to="/login" className=' text-slate-800 underline'>Login</Link>
    </form>
  </div>
  )
}

export default Register