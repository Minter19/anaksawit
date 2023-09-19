import React from 'react'
import { Skranji } from 'next/font/google'
import { InformationCircleIcon, KeyIcon } from '@heroicons/react/24/outline'

const skranji = Skranji({ subsets: ['latin'], weight: ['400','700'] })
export default function Login() {
  return (
    <div className='bg-slate-200 w-screen h-screen flex items-center justify-center bg-[url(/assets/img/loginbg.jpg)]'>
        <div className='w-1/4 border bg-white shadow-xl'>
            <h1 className='text-center my-5 text-4xl italic font-semibold text-amber-500'><span className={skranji.className}>AnakSawit</span></h1>
            
            <form className='p-5' action={''} method={'get'}>
                <div>
                    <label className='block text-slate-500 text-sm my-3' htmlFor={'email'}>Email Address</label>
                    <input className='w-full p-2 border-2 border-green-300 outline-green-300' type='email' placeholder='Enter your email' id='email' required />
                </div>
                
                <div>
                    <label className='block text-slate-500 text-sm my-3' htmlFor={'password'}>Password</label>
                    <input className='w-full p-2 border-2 border-green-300 outline-green-300' type='password' placeholder='*********' id='password' required />
                </div>
                
                <div className='flex items-center gap-1 my-3 text-slate-500'>
                    <input type='checkbox' id='rememberOpt' required /> <span className='text-xs'><label htmlFor='rememberOpt'>Remember this device !</label></span>
                </div>

                <p className='my-2'>
                    <a href='#' className='text-xs italic text-slate-500 underline transition-all duration-300 hover:text-blue-500' >Forgot password?</a>
                </p>
                
                

                <button className='w-full bg-green-500 p-2 text-white shadow-lg my-3 transition-all duration-300 hover:bg-green-600 active:scale-95' type='submit'><KeyIcon className='w-4 h-5 inline-block' /> Sign In</button>

                <div className='w-full flex items-center gap-2'>
                    <div className='w-1/3 border h-0'></div>
                    <div className=''>or sign in with</div>
                    <div className='w-1/3 border h-0'></div>
                </div>
                
                <button type='button' className='w-full bg-red-400 p-2 text-white shadow-lg my-2 transition-all duration-300 hover:bg-red-500 active:scale-95'>Google</button>
                <button type='button' className='w-full bg-slate-400 p-2 text-white shadow-lg my-2 transition-all duration-300 hover:bg-slate-500 active:scale-95'>Github</button>
                <button type='button' className='w-full bg-blue-400 p-2 text-white shadow-lg my-2 transition-all duration-300 hover:bg-blue-500 active:scale-95'>Facebook</button>

                <p className='text-xs my-3 text-slate-500'>Need help ? <a className='underline transition-all duration-300 hover:text-blue-500' href='#' >visit our help center</a></p>

            </form>

            <p className='p-5 text-center text-xs text-slate-500'>Dont have an account? <a className='underline transition-all duration-300 hover:text-blue-500' href='#' >register here!</a></p>

        </div>
    </div>
  )
}
