import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Iphone from './components/Iphone'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelView from './components/ModelView'
import Features from './components/Features'
import HowitWorks from './components/HowitWorks'
import Footer from './components/Footer'


function App() {
  const [modelLoaded, setModelLoaded] = useState(false);



  return (
    <>
  <Navbar/>
  <Hero/>
  <Highlights/>
   <Model />
   <Features/>
   <HowitWorks/>
   <Footer/>
  
  
    </>
  )
}

export default App
