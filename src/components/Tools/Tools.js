import React from "react"

import PageContentWrapper from "../PageContentWrapper/PageContentWrapper"
import Aws from "../../icons/Aws"
import Electron from "../../icons/Electron"
import Jest from "../../icons/Jest"
import Js from "../../icons/Js"
import Python from "../../icons/Python"
import MongoDb from "../../icons/MongoDb"
import MySql from "../../icons/MySql"
import Node from "../../icons/Node"
import PostGres from "../../icons/PostGres"
import ReactLogo from "../../icons/React"
import SqlServer from "../../icons/SqlServer"
import Github from "../../icons/Github"
import GCP from "../../icons/Gcp"
import TS from "../../icons/TS"
import Golang from "../../icons/golang"

import "./Tools.scss"
import K8S from "../../icons/K8S"

const logoRows = [
  [Js, TS, Python, Golang],
  [Node, ReactLogo, Electron, Jest],
  [Github, Aws, GCP, K8S],
  [MongoDb, SqlServer, PostGres, MySql],
]

const LogoRow = ({ logos, rowNumber }) => {
  const animation = rowNumber % 2 === 0 ? "slideInLeft" : "slideInRight"

  return (
    <div className={`Logos__LogoRow animated ${animation}`}>
      {logos.map((Logo, i) => (
        <div style={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Logo key={i} />
        </div>
      ))}
    </div>
  )
}

const Tools = () => (
  <PageContentWrapper>
    <h3 className='accented'>tools</h3>
    <p>
      my main focus is the <span className='accented'>node ecosystem</span> but
      I have worked across <span className='accented'>multiple stacks </span>{" "}
      including .net, rails, and system z (i'm willing to do whatever it takes
      to get the job done). to broaden my skillset i've recently begun exploring
      <span className='accented'> golang</span>
    </p>

    <div className='Tools__Logos'>
      {logoRows.map((logoRow, i) => (
        <LogoRow logos={logoRow} key={i} rowNumber={i} />
      ))}
    </div>
  </PageContentWrapper>
)

export default Tools
