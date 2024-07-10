import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/navigation/Navigation'
import Home from './pages/Home_Before_Login'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
