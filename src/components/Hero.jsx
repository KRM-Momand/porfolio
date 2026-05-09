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
            <span><a href='https://www.facebook.com/3dforlife' target='_blank'><i className='bi bi-facebook'> </i></a></span>
            <span><a href='https://www.instagram.com/krm_momand' target='_blank'> <i className='bi bi-instagram'> </i> </a></span>
            <span> <i className='bi bi-tiktok'> </i></span>
            <span> <i className='bi bi-youtube'> </i></span>
          </div>

        </div>
        <div id='carousel' className='side-hero carousel slide' data-bs-ride='carousel'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img className='d-block w-100' src='./slide01.jpg' alt='first slide' />

            </div>
            <div className='carousel-item '>
              <img className='d-block w-100' src='./slide02.jpg' alt='second slide' />

            </div>
            <div className='carousel-item '>
              <img className='d-block w-100' src='./slide03.jpg' alt='third slide' />

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Hero
