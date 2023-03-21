import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex flex-col  gap-5 bg-lime-100 w-[100%] h-[100vh] items-center justify-center '>
      <h1 className=' text-center bg-yellow-500 p-2 rounded-lg font-bold'>Input Your Username and Password</h1>
      <form action="" className='flex flex-col  max-w-sm bg-white p-20 shadow-lg items-center'  >
        <input className=' border-b-2 border-black p-1 mb-5' type="text" placeholder='Username' />
        <input className=' border-b-2 border-black p-1 mb-8' type="password" placeholder='Password' />
        <button className=' bg-slate-700 text-white p-2 rounded-lg font-bold w-[90%] mb-5'>Login</button>
        <p>Don't you have an account ?</p>
        <Link to="/register" className=' text-slate-800 underline'>Register</Link>
      </form>
    </div>
  )
}

export default Login