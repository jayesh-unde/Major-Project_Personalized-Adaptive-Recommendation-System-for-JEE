import React from 'react'
import Navbar from '../components/shared/navigation/Navigation'
import Hero from '../components/home/hero'
import News from '../components/home/news'
import Community from '../components/home/community_hub'
const home_before_login = () => {
  return (
    <div>
      <Hero/>
      <News/>
      <Community/>
    </div>
  )
}

export default home_before_login
