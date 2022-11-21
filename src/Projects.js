import React from 'react'
import ProjectData from './ProjectData'
import data from './ProjectList'


function Projects() {
    return (
        <>
            <ProjectData projects={data } />
        </>
    )
}

export default Projects
