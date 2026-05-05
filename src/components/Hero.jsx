import React from 'react'

import '../styles/hero.scss'

function Hero() {
  return (
    <div className='hero' id='home'>
        <div className='main-hero'>
          <div className='picText'>

            <img src='./myPic.jpeg' /> 
            <div>

              <h1> Khalil Rahman M Momand</h1>
              <p >Graphic Designer, 3D Artist and Web Developer </p>
            </div>
          </div>
          <div className='hero-social'>
            <span> <i className='bi bi-github'> </i></span>
            <span> <i className='bi bi-facebook'> </i></span>
            <span> <i className='bi bi-instagram'> </i></span>
            <span> <i className='bi bi-tiktok'> </i></span>
            <span> <i className='bi bi-youtube'> </i></span>
          </div>

        </div>
        <div className='side-hero'>

        </div>
      
    </div>
  )
}

export default Hero
