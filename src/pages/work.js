import React from "react"
import WorkComponent from "../components/Work/Work"
import { useStaticQuery, graphql } from 'gatsby'

const Work = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allDataJson {
        nodes {
          current {
            name
            timePeriod
            description
            techStack
          }
          past {
            name
            timePeriod
            description
            techStack
          }
        }
      }
    }
  `)

  const targetData = data.allDataJson.nodes[0]

  return (
    <WorkComponent projects={targetData}/>
  )
}

export default Work
