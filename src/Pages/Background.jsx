import React, { useState } from 'react'
import Animation from '../Animat/Animation.jsx'
import Hero from '../Animat/Hero.jsx'

const Background = () => {
  const heroData = [
    {text1: "New Car", text2: "BMW 1"},
    {text1: "New Texi", text2: "preius"},
    {text1: "New Vain", text2: "Caltus"}
  ]
  const [playStatus, setPlayStatus] = useState(false)
  const [heroCount, setHeroCount] = useState(0)
  return (
    <div className='mt-20'>
      <Animation playStatus = {playStatus} heroCount = {heroCount}/>
      <Hero playStatus = {playStatus} heroCount = {heroCount} heroData = {heroData[heroCount]} setPlayStatus = {setPlayStatus} setHeroCount = {setHeroCount} />
    </div>
  )
}

export default Background