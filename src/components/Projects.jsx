import React from 'react'
import '../styles/projects.scss'; 

const projectData = [
  {id: 1, title: 'Project', desc: 'I will write about it later', img: './project01.png'},
  {id: 2, title: 'Project', desc: 'I will write about it later', img: './project01.png'},
  {id: 3, title: 'Project', desc: 'I will write about it later', img: './project01.png'},
]

function Projects() {
  return (
    <section className='projects-main '  id='projects'>

        <h1 className='main-h1'> Projects </h1>
        <div className='projects container'>
            {projectData.map(project => (
              <div key={project.id} className='card'>
                <img src={project.img} alt={project.title} /> 
                <div className='card-body'>
                  <h1>{project.title}</h1>
                  <p>{project.desc}</p>

                </div>
              </div>
            ))}
          
        </div>
    </section>
  )
}

export default Projects
