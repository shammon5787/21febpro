import React from 'react'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div className='mt-24 mx-5'>
        <CategoryMenu/>
        <FoodItem />
        <Card />
    </div>
  )
}

export default Home