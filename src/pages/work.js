import React from "react"
import WorkComponent from "../components/Work/Work"
import { useStaticQuery, graphql } from 'gatsby'

const Work = () => {
  const data = useStaticQuery(graphql`
    query allDataJson {
      allDataJson {
        edges {
          node {
            id
            current {
              name
              title
              timePeriod
              description
              techStack
              current
            }
            past {
              name
              title
              timePeriod
              description
              techStack
              current
            }
          }
        }
      }
    }
  `)

  const targetData= data.allDataJson.edges[0].node

  return (
    <WorkComponent projects={targetData}/>
  )
}

export default Work
