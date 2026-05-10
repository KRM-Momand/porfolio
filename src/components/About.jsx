import React from 'react'

import '../styles/about.scss'; 

function About() {
  return (
    <section className='about ' id='about'>
      <hr></hr>
      <div className='about-info'>
        <h3> Hey there, </h3>
        <p>
          As a creative professional with background in TV commercials, branding, 3D visualization, 
          motion graphic and digital design, I have always been passionate creating visual experiences. over 
          years, I worked on creative projects  that strenghten my skills  in design thinking and user focused creativity.

        </p>
        <p>
          While working in the design industry, I became increasingly interested in the technical side of building digital products. That curiosity inspired me to transition into web development and application programming, where I can combine creativity with problem-solving to create interactive and meaningful experiences.

          Currently pursuing my Master of Computer Applications (MCA), I’m focused on expanding my skills in full-stack development, UI/UX, and modern web technologies. My background in design gives me a unique advantage as a developer — allowing me to build applications that are not only functional, but also visually engaging and user-friendly.

          I enjoy turning ideas into real-world digital experiences and continuously exploring new technologies, creative workflows, and innovative ways to bridge design with development.
        </p>
      </div>
      <div className='accordion' id='accordion-about'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button fw-bold text-primary' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'> Web Development </button>
          </h2>
          <div className='accordion-collapse collapse show' data-bs-parent='#accordion-about' id='collapseOne'>
            <ul className='accordion-body list-group list-group-flush'>
              <li className='list-group-item'>C</li>
              <li className='list-group-item'>C++</li>
              <li className='list-group-item'> HTML /CSS /SCSS /Bootstrap </li>
              <li className='list-group-item'> Javascript </li>
              <li className='list-group-item'> React.js </li>
              <li className='list-group-item'> Redux toolkit / Redux </li>
              <li className='list-group-item'> Node.js </li>
              <li className='list-group-item'> Express.js  </li>
              <li className='list-group-item'> Socket.IO  </li>

            </ul>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button fw-bold text-primary' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='true' aria-controls='collapseTwo'> Design and 3D  </button>
          </h2>
          <div className='accordion-collapse collapse show' data-bs-parent='#accordion-about' id='collapseTwo'>
            <ul className='accordion-body list-group list-group-flush'>
              <li className='list-group-item'>Photoshop</li>
              <li className='list-group-item'>Illustrator</li>
              <li className='list-group-item'>After Effect</li>
              <li className='list-group-item'>Autodesk Maya</li>
              <li className='list-group-item'>Autodesk Mudbox</li>
            </ul>
          </div>
        </div>

      </div>
      <hr className='pb-5'></hr>
    </section>
  )
}

export default About
