// import React from 'react'
// import FoodData from '../assets/Data/FoodData.js'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import './SliderShow.css'

// const SliderShow = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     };

//     return (
//         <div className='m-auto gap-5 items-center justify-center w-[90vw] '>
//             <Slider {...settings}>
//                 {
//                     FoodData.map((food) => {
//                         return (
//                             <div className='bg-amber-100 rounded-lg flex flex-col items-center justify-center mt-10'>
//                                 <div key={food.id} className='m-auto text-black  flex flex-col items-center justify-center rounded-md t'>
//                                     <div className='bg-slate-900 w-full flex flex-col items-center p-4 rounded-t-md'>
//                                         <img className='w-[100px] h-[100px] rounded-full' src={food.image} alt="" />
//                                     </div>
//                                     <div className='bg-amber-50 flex flex-col items-center'>
//                                     <h1 className='font-bold text-4xl'>{food.name}</h1>
//                                     <p className='text-3xl uppercase'>{food.desc}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </Slider>
//         </div>
//     )
// }

// export default SliderShow



import React from 'react'
import { useState } from 'react'

const SliderShow = () => {
  const [count, setcount] = useState(0)
  const [text, settext] = useState(false)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setcount(count + 1)
        settext(!text)
      }} className='bg-blue-950 px-2 py-0.5 rounded-md cursor-pointer'>INC/ADD</button>
      {
        text && <h1>show text</h1>
      }
    </div>
  )
}

export default SliderShow