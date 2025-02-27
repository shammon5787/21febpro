import React, { useState } from 'react'
import Animation from '../Animat/Animation.jsx'

const Background = () => {
  const heroData = [
    {text1: "New Car", text2: "BMW 1"},
    {text1: "New Texi", text2: "preius"},
    {text3: "New Vain", text2: "Caltus"}
  ]
  const [playStatus, setPlayStatus] = useState(true)
  const [heroCount, setHeroCount] = useState(0)
  return (
    <div>
      <Animation playStatus = {playStatus} heroCount = {heroCount}/>
    </div>
  )
}

export default Background