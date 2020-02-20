import React from "react"

import PageContentWrapper from "../PageContentWrapper/PageContentWrapper"
import Aws from "../../icons/Aws"
import Css from "../../icons/Css"
import Electron from "../../icons/Electron"
import Heroku from "../../icons/Heroku"
import Html from "../../icons/Html"
import Jest from "../../icons/Jest"
import Js from "../../icons/Js"
import Python from "../../icons/Python"
import MongoDb from "../../icons/MongoDb"
import MySql from "../../icons/MySql"
import Node from "../../icons/Node"
import PostGres from "../../icons/PostGres"
import ReactLogo from "../../icons/React"
import SqlServer from "../../icons/SqlServer"
import Travis from "../../icons/Travis"
import Github from "../../icons/Github"

import "./Tools.scss"

const logoRows = [
  [Html, Css, Js, Python],
  [Node, ReactLogo, Electron, Jest],
  [MongoDb, SqlServer, PostGres, MySql],
  [Github, Aws, Heroku, Travis],
]

const LogoRow = ({ logos, rowNumber }) => {
  const animation = rowNumber % 2 === 0 ? "slideInLeft" : "slideInRight"

  return (
    <div className={`Logos__LogoRow animated ${animation}`}>
      {logos.map((Logo, i) => (
        <Logo key={i} />
      ))}
    </div>
  )
}

const Tools = () => (
  <PageContentWrapper>
    <h3>tools</h3>
    <p>
      my main focus is the <span className='accented'>node ecosystem</span> but
      I have worked across <span className='accented'>multiple stacks </span>{" "}
      including .net, rails, and system z (i'm willing to do whatever it takes
      to get the job done). to broaden my skillset i've recently begun exploring
      <span className='accented'> python</span>
    </p>

    <div className='Tools__Logos'>
      {logoRows.map((logoRow, i) => (
        <LogoRow logos={logoRow} key={i} rowNumber={i} />
      ))}
    </div>
  </PageContentWrapper>
)

export default Tools
