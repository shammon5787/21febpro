import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])

    const ListUniqueCategories = ()=>{
        const UniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setCategories(UniqueCategory)
    }
    useEffect(()=>{
        ListUniqueCategories()
    }, [])
  return (
    <div>
        <h1 className='uppercase font-bold text-3xl'>welcome! order your demand</h1>
        <div className='flex flex-row items-center gap-5 my-3 overflow-x-scroll lg:overflow-x-hidden'>
            
        <button className='bg-blue-950 cursor-pointer px-2 rounded-sm font-semibold text-xl hover:bg-green-950 transition-all duration-500 hover:text-black my-2'>All</button>
            {
                categories.map((category, i)=>{
                    return(
                        <button key={i} className='bg-blue-950 cursor-pointer px-2 rounded-sm font-semibold text-xl hover:bg-green-950 transition-all duration-500 hover:text-black my-2'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu