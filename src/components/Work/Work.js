import React from "react"

import PageContentWrapper from "../PageContentWrapper/PageContentWrapper"
import ProjectCard from '../ProjectCard/ProjectCard'

import './Work.scss'

const Work = ({ projects }) => {
  const { current, past } = projects

  return (
    <PageContentWrapper>
      <h3 className='accented'>work</h3>
      <div id="CurrentWork">
        {current &&
          current.map((project, i) => ( <ProjectCard key={i} project={project} />))
        }
      </div>
      <div id="PastWork">
        {past &&
          past.map((project, i) => ( <ProjectCard key={i} project={project} />))
        }
      </div>
    </PageContentWrapper>
  )
}

export default Work
