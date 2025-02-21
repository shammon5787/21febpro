import React from 'react'
import img from '../assets/Food/4.avif'
import { FaStar } from "react-icons/fa";


const FoodCard = ({id, name, image, price, desc, rating}) => {
    return (
        <div className='bg-slate-800 w-full lg:w-[23vw] rounded-md flex flex-col items-center'>
            <div className='bg-slate-800 p-3 rounded-md hover:bg-white w-full flex items-center flex-col transition-all duration-500 opacity-70'>
                <img className='w-[200px] h-[100px] rounded-md hover:scale-110 transition-all duration-500 cursor-grab' src={image} alt="" />
            </div>
            <div className='bg-green-900 w-full rounded-b-md  p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p className='leading-5'>{desc}</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-3'>
                        <FaStar className='text-yellow-400' />
                        <h1>{rating}</h1>
                    </span>
                    
                    <button  className='bg-blue-950 cursor-pointer px-2 rounded-sm font-semibold  hover:bg-green-950 transition-all duration-500 hover:text-black my-2'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard