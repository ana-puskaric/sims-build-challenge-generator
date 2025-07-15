import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challenge from './challenge'

function App() {
  
  return (
    <>
    <div>
      <h1>Sims Build Challenge Generator</h1>
      <p>description</p>
    </div>
    <Challenge></Challenge>
    <div>
      <button>Generate New Build Challenge</button>
    </div>
    </>
  )
}

export default App
