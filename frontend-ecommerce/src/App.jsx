import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/navbar/navbar'
import Home from './pages/home/home'


function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
