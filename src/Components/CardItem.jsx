import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementCard, incrementCard, removeCard } from '../Store/CardSlice';



const CardItem = ({ id, name, price, image, qty }) => {
  const dispatch = useDispatch()
  return (
    <div className='bg-slate-600 rounded-md p-1.5 flex gap-5 mt-0.5'>
      <MdDelete onClick={() => dispatch(removeCard({ id }))} className='absolute right-6 cursor-pointer ' />
      <img className='w-[55px] h-[55px] rounded-full' src={image} alt="" />
      <div className='flex items-center justify-between'>
        <div className='leading-5 mt-2 font-semibold'>
          <h1>{name}</h1>
          <h1>$: {price}</h1>
        </div>
        <div className='flex items-center gap-6 font-semibold text-xl absolute right-6 mt-7'>
          <FaMinus onClick={()=>qty > 1 ? dispatch(decrementCard({id})) : qty = 1} className='cursor-pointer' />
          <span>{qty}</span>
          <FaPlus onClick={() => dispatch(incrementCard({id}))} className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default CardItem