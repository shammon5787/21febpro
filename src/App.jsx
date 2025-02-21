import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Slide from './Pages/Slide'
import Background from './Pages/Background'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/slide' element = {<Slide/>} />
      <Route path='/background' element = {<Background/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App