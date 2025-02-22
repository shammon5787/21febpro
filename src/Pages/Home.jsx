import React from 'react'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div className='m-6'>
        <CategoryMenu/>
        <FoodItem />
        <Card />
    </div>
  )
}

export default Home