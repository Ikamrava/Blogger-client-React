
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCotext } from '../contect/authContext'

function Login() {
  const {login} = useContext(AuthCotext)
  
  const [userName,setUsername] =useState("")
  const [password,setPassword] =useState("")

  const [err,setErr] = useState(null)
  const navigate = useNavigate()


  async function registerHandler(e){
   e.preventDefault()
   try{
    if (userName && password){
      setErr(null)
      await login(userName,password)
      navigate("/")
     }else{
      alert("Please fill out all fields")
     }
   }catch(e){
    setErr(e.response.data)
   }
   
  }

  return (
    <div className='flex flex-col  gap-5 bg-lime-100 w-[100%] h-[100vh] items-center justify-center '>
    <h1 className=' text-center bg-yellow-500 p-2 rounded-lg font-bold'>Log in to your account</h1>
    <form action="" className='flex flex-col  max-w-sm bg-white p-20 shadow-lg items-center'  >
      <input className=' border-b-2 border-black p-1 mb-5' required type="text" placeholder='Username'  value={userName} onChange={(e)=>setUsername(e.target.value)}/>
      <input className=' border-b-2 border-black p-1 mb-8' required type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className=' bg-slate-700 text-white p-2 rounded-lg font-bold w-[90%] mb-5' onClick={registerHandler}>Login</button>
      {err && <p className=' text-red-600'>{err}</p>}
      
      <p>Do you have an account ?</p>
      
      <Link to="/login" className=' text-slate-800 underline'>Login</Link>
    </form>
  </div>
  )
}

export default Login