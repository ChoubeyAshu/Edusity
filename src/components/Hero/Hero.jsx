import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto, fugit ipsam corporis quos odio quas maxime quia quam delectus</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" />
            </button>
        </div>
        
    </div>
  )
}

export default Hero