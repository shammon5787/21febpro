import React from 'react'
import './Animation.css'
import video from '../assets/video.mp4'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

const Animation = ({playStatus, heroCount}) => {
  if(playStatus){
    return(
      <video className='background' loop muted autoPlay>
        <source src= {video} />
      </video>
    )
  }
  else if(heroCount === 0){
    return(
      <img className='background' src= {img1} alt="" />
    )
  }
  else if(heroCount === 1){
    return(
      <img className='background' src= {img2} alt="" />
    )
  }
  else if(heroCount === 2){
    return(
      <img className='background' src= {img3} alt="" />
    )
  }
}

export default Animation