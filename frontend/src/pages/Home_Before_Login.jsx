import React from 'react'
import Navbar from '../components/shared/navigation/Navigation'
import Hero from '../components/home/hero'
import News from '../components/home/news'
const home_before_login = () => {
  return (
    <div>
      <Hero/>
      <News/>
    </div>
  )
}

export default home_before_login
