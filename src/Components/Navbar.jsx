import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-900 opacity-70 p-3'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between p-2'>
            <h1 className='font-bold text-3xl uppercase'>{new Date().toUTCString().slice(0,16)}</h1>
            <div className='flex flex-row items-center gap-10'>
                <Link className='text-2xl font-semibold' to= "/">HOME</Link>
                <Link className='text-2xl font-semibold' to= "/background">BACKGROUND</Link>
                <Link className='text-2xl font-semibold' to= "/slide">SLIDER</Link>
            </div>
            <div>
                <input className='bg-amber-100 outline-none p-2 w-full lg:w-[23vw] rounded-md text-black font-semibold text-xl' type="text" placeholder='serach here' />
            </div>
        </div>
    </div>
  )
}

export default Navbar