import React from 'react'
import './hero.css'
import Image2 from './../../assets/Rectangle 10.png';
import Image1 from './../../assets/Rectangle 12.png';
import Image4 from './../../assets/Rectangle 13.png';
import Image3 from './../../assets/Rectangle 14.png';
import Play_Button from './../../assets/Polygon 1.png';
const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero_left'>
          <div className='topHeading'>Best Personalized and Adaptive Recommendation Platform</div>
          <div className='Find_Perfect_Path'>Find Your Perfect Path</div>
          <div className='content'>We tailor study plan based on individual Strengths and weaknesses. You will get recommendations to enhance Learning.</div>
          <div className='learn'>
            <button className='basic poppins-semibold'>Get Started</button>
            <div className='Learn_More poppins-semibold'>
              Learn More
              <button class='navigate play'><img className='play_button' src={Play_Button} alt="play_button" /></button>
            </div>
          </div>
        </div>
        <div className='hero_right'>
          <div className='upperimage'>
            <img src={Image1} alt="image1" />
            <img src={Image2} alt="image2" />
          </div>
          <div className='lowerimage'>
            <img src={Image3} alt="image3" />
            <img src={Image4} alt="image4" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
