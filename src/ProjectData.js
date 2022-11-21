import React from 'react'
import './Projects.css'


const ProjectData = ({projects}) => {
  return <div className='projects'>
        {projects.map((project) => {
                const { id, name, image } = project
            return <div className='grid' key={id}>
                            <img src={image} alt='' />
                            <h3>{name}</h3>
                    </div>
            })
        }
    </div>
}

export default ProjectData;