import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import profileImage from '../../images/profile.png'

import "./NavMenu.scss"

const activeStyleProp = { 
  color: '#66fcf1'
}

const NavMenu = () => (
  <Container>
    <Row>
      <Col>
        <nav className="NavMenu">
          <div className="NavMenu__ImageContainer">
            <img
              src={profileImage}
              alt="Profile of the author"
            />
          </div>
          <div className="NavMenu__LinkContainer">
            <Link to="/" activeStyle={activeStyleProp}>
              ABOUT
            </Link>
            <Link to="/skills" activeStyle={activeStyleProp}>
              SKILLS
            </Link>
            <Link to="/projects" activeStyle={activeStyleProp}>
              PROJECTS
            </Link>
          </div>
        </nav>
      </Col>
    </Row>
  </Container>
)

export default NavMenu
