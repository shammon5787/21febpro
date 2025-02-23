import React from 'react'
import img from '../assets/Food/3.avif'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";



const CardItem = () => {
  return (
    <div className='bg-slate-600 rounded-md p-1.5 flex gap-5 mt-0.5'>
        <MdDelete className='absolute right-6 cursor-pointer ' />
        <img className='w-[55px] h-[55px] rounded-full' src= {img} alt="" />
        <div className='flex items-center justify-between'>
            <div className='leading-5 mt-2 font-semibold'>
                <h1>PIXXA</h1>
                <h1>$: 90</h1>
            </div>
            <div className='flex items-center gap-6 font-semibold text-xl absolute right-6 mt-7'>
                <FaPlus className='cursor-pointer' />
                <span>1</span>
                <FaMinus className='cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default CardItem