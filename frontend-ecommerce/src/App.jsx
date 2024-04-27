import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home';
import Hero from './components/hero/hero'
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'

import {BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/bestcollections' element={<ShopCategory category="Best Collections"/>}/>
      <Route path='/foundation' element={<ShopCategory category="Foundation"/>}/>
      <Route path='/facepowder' element={<ShopCategory category="Face Poweder"/>}/>
      <Route path='/eyemascara' element={<ShopCategory category="Eye Mascara"/>}/>
      <Route path='/eyeliner' element={<ShopCategory category="Eye Liner"/>}/>
      <Route path='/blushan' element={<ShopCategory category="Blushan"/>}/>
      <Route path='/highlighters' element={<ShopCategory category="Highlighters"/>}/>
      <Route path='/lipsticks' element={<ShopCategory category="Lipsticks"/>}/>
      <Route path='/lipgloss' element={<ShopCategory category="Lipgloss"/>}/>
      <Route path='/hairproducts' element={<ShopCategory category="Hair Products"/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
