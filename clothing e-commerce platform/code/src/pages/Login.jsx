import React, { useState } from 'react'

const Login = () => {
  const [currentSate, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }
  return (
    <div  className="bg-[#EFE8C2]">

      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-emerald-800'  >
        <div className='inline-flex items-center gap-2 mt-10 mb-2'>
          <p className='prata-regular text-3xl '>{currentSate}</p>
          <hr className='border-none h-[1.5px] w-8 bg-emerald-800'/>

        </div>
        {currentSate==='Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required /> }
        <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
        <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />
        <div className='w-fulll flex justify-between gap-36  text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Your Password?</p>
          {
            currentSate === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here </p>
          }

        </div>
        <button className='bg-transparent border-emerald-800 border-2 hover:text-white font-light px-8 py-2 mt-4 hover:bg-emerald-700'>{currentSate=== 'Login' ? 'Sign In':'Sign Up'}</button>
      </form>
    </div>
  )
}

export default Login
