import React from 'react'
import './community_hub.css'
import Image2 from './../../assets/Rectangle 19.png';
import Image1 from './../../assets/Rectangle 20.png';
import Vector from './../../assets/Vector 13.png';

const community_hub = () => {
  return (
    <div className='community_hub'>
      <div className='community_hub_left'>
        <div className='heading1'>COMMUNITY HUB DISCUSSION FORUM</div>
        <div className='heading2'>Discussion Forum for Sharing, Learning, and Helping</div>
        <div className='content_community_hub'>"Dive into our dynamic Community Hub – a central space for rich discussions, shared experiences, and mutual support. Connect with a diverse community of learners, where knowledge knows no bounds. Join us in the journey of collaborative learning and growth! 🌐🚀 </div>
        <div>
          <button className='basic poppins-semibold'>Get Started</button>
        </div>
      </div>

      <div className='community_hub_right'>
        <div className='Images_right_side'>
          <img className='Image2' src={Image2} alt="Image2" />
          <img className='Image1' src={Image1} alt="Image1" />
          <img className='Vector' src={Vector} alt="Vector" />
        </div>
      </div>
    </div>
  )
}
export default community_hub
