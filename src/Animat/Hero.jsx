import React from 'react'
import play from '../assets/play.png'
import pause from '../assets/pause.png'


const Hero = ({playStatus, heroCount, heroData, setPlayStatus, setHeroCount}) => {
    return (
        <div>
            <div className='absolute right-40 top-40 text-4xl font-black bg-slate-800 w-[20vw] p-3 rounded-md opacity-65'>
                <h1>{heroData.text1}</h1>
                <h1>{heroData.text2}</h1>
            </div>
            <div className='items-center flex'>
                <ul className='flex items-center gap-10 bg-green-500 opacity-90 w-[15vw] h-[10vh] justify-center rounded-lg absolute bottom-20 left-10 '>
                    <li onClick={()=>setHeroCount(0)}  className='text-3xl cursor-pointer text-red-900'>⨀</li>
                    <li onClick={()=>setHeroCount(1)} className='text-3xl cursor-pointer text-red-900'>⨀</li>
                    <li onClick={()=>setHeroCount(2)} className='text-3xl cursor-pointer text-red-900'>⨀</li>
                </ul>
            </div>
            <div className='absolute right-10 bottom-10 flex flex-col items-center' >
                <img className='w-[55px] h-[55px] cursor-pointer bg-white rounded-full' onClick={()=>setPlayStatus(!playStatus)} src= {playStatus ? play : pause} alt="" />
                <h1>Play and Pause Video</h1>
            </div>
        </div>
    )
}

export default Hero