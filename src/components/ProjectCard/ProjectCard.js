import React from 'react'
import PropTypes from 'prop-types'

import './ProjectCard.scss'

function ProjectCard({ project }) {
  const {
    timePeriod,
    name, 
    title,
    description,
    techStack
  } = project

  return (
    <div className="ProjectCard" title={title ? title : ''}>
      <p className='ProjectCard__time'>{timePeriod}</p>
      <h4 className='ProjectCard__name'>
        {name}
      </h4>
      <p className='ProjectCard__desc'>{description}</p>
      <p className='ProjectCard__tech'>{techStack}</p>
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