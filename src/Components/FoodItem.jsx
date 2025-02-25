import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/Data/FoodData.js'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state) => state.category.category)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food
          } else {
            return category === food.category
          }
        }).map((food) => {
          return (
            <FoodCard key={food.id} id={food.id} name={food.name} image={food.image} price={food.price} desc={food.desc} rating={food.ratting} />
          )
        })
      }

    </div>
  )
}

export default FoodItem