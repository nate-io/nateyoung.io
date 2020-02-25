import React from 'react'
import PropTypes from 'prop-types'

import './ProjectCard.scss'

function ProjectCard({ project }) {
  return (
    <div className="ProjectCard">
      <p className='ProjectCard__time'>{project.timePeriod}</p>
      <h4 className='ProjectCard__title'>{project.name}</h4>
      <p className='ProjectCard__desc'>{project.description}</p>
      <p className='ProjectCard__tech'>{project.techStack}</p>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    timePeriod: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired
  })
}

export default ProjectCard