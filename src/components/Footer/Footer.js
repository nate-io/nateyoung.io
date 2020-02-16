import React from "react"

import { FaExclamation, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

import "./Footer.scss"

const links = {
  mailTo: "mailto:nyoung125@gmail.com?Subject=Let's Chat",
  linkedin: "www.linkedin.com/in/nate-io",
  github: "https://github.com/nate-io",
}

const Footer = () => (
  <ul className="Footer__Links">
    <li className="Links__link">
      <a href={links.github}>
        <GoMarkGithub />
      </a>
    </li>
    <li className="Links__link">
      <a href={links.linkedin}>
        <FaLinkedinIn />
      </a>
    </li>
    <li className="Links__link">
      <a href={links.mailTo}>
        <FaRegEnvelope />
      </a>
    </li>
    <li className="Links__link">
      <FaExclamation onClick={() => alert("Build modal!")} />
    </li>
  </ul>
)

export default Footer
