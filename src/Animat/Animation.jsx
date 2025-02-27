import React from 'react'
import video from '../assets/video.mp4'

const Animation = ({playStatus, heroCount}) => {
  if(playStatus){
    return(
      <video className='w-full h-full top-0 right-0 left-0 bottom-0' loop muted autoPlay>
        <source src= {video} />
      </video>
    )
  }
}

export default Animation