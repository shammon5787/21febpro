import React from 'react'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'

const Home = () => {
  return (
    <div className='m-6'>
        <CategoryMenu/>
        <FoodItem />
    </div>
  )
}

export default Home