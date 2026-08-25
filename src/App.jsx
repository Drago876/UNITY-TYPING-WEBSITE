import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './hero'
import Navebar from './navebar'
import DestinationCard from './DestinationCard'

function App() {
  

  return (
    <div>
      <Navebar/>
    <Hero/>
    <div className="destinations">
    <DestinationCard  destination=" Dubai"/>
    <DestinationCard  destination=" Paris"/>
    <DestinationCard  destination=" Tokyo"/>
    </div>
    </div>
  )
}

export default App
