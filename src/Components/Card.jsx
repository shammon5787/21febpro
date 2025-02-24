import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';



const Card = () => {
    const [activecard, setActivecard] = useState(false)
    const selectCard = useSelector((state) => state.card.card)
    const totalItem = selectCard.reduce((totalItem, item)=>totalItem + item.qty,0)
    const totalPrice = selectCard.reduce((totalPrice, item)=>totalPrice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-slate-900 fixed w-full lg:w-[25vw] h-full top-0 right-0 opacity-95 p-4 ${activecard ? "translate-x-full" : "translate-x-0 z-50 transition-all duration-500"} `}>
                <div className='flex flex-row items-center justify-between font-semibold text-xl'>
                    <h1>Your Orders</h1>
                    <IoClose onClick={() => setActivecard(!activecard)} className='text-4xl cursor-pointer' />
                </div>

                {
                    selectCard.map((item) => {
                        return (
                            <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty}  />
                        )
                    })
                }

                <div className='fixed bottom-5'>
                    <h1>Total Items: {totalItem}</h1>
                    <h1>Total Price: $: {totalPrice}</h1>
                    <hr />
                    <button className='bg-blue-950 cursor-pointer px-2 rounded-sm font-semibold hover:bg-green-950 transition-all duration-500 hover:text-black w-[90vw] lg:w-[23vw] mt-2'>All</button>
                </div>
            </div>
            <FaShoppingCart onClick={() => setActivecard(false)} className={`text-4xl bg-white text-black rounded-full w-[55px] h-[55px] p-3 cursor-pointer fixed right-10 bottom-10 ${selectCard.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card