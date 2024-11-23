import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";



const Login = () => {

    const [showPassowrd, setShowPassword] = useState(false)

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <h1 className='text-secondary text-xl md:text-2xl lg:text-3xl font-bold text-center'>Get Started From Now</h1>
        <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate consequuntur eos consectetur dolores neque.</p>


        <div className='mx-auto max-w-lg mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
            <form
            onSubmit=""
            className='space-y-4'>
            <p className='text-center text-secondary text-lg font-medium'>Sing In To Your Account</p>

            {/* Email */}
            <div>
            <label htmlFor="email" className='sr-only'>Email</label>
            <div className='relative'>
            <input type="email" name="email" placeholder='Enter Email' className='w-full border outline-none rounded-lg border-gray-200 p-4  text-sm shadow-sm' />
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
            <MdOutlineAlternateEmail className="h-4 w-4 text-gray-400" />
            </span>
            </div>
            </div>


             {/* Password */}
             <div>
            <label htmlFor="password" className='sr-only'>Password</label>
            <div className='relative'>
            <input type={showPassowrd ? 'text' : 'password'} name="password" placeholder='Enter Password' className='w-full border outline-none rounded-lg border-gray-200 p-4  text-sm shadow-sm' />
            <span
            onClick={()=>setShowPassword(!showPassowrd)}
            className='absolute inset-y-0 end-0 grid place-content-center px-4'>
            <FaRegEyeSlash

            className="h-4 w-4 text-gray-400" />
            </span>
            </div>
            </div>

            {/* Sing Button */}
            <div>
                <button type='submit' className='block w-full bg-secondary text-white rounded-lg px-5 py-3 font-medium text-sm'
                >Sing In</button>
            </div>

            </form>
        </div>


    </div>
  )
}

export default Login
