import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import profileImage from "../../images/profile.png"

import "./NavMenu.scss"

const activeStyleProp = {
  color: "#66fcf1",
}

const NavMenu = () => (
  <Container>
    <Row>
      <Col>
        <nav className='NavMenu'>
          <header className='NavMenu__ImageContainer'>
            <h1>
              <a href='/' title='nateyoung.io'>
                <img src={profileImage} alt='Profile of the author' />
              </a>
            </h1>
          </header>
          <div className='NavMenu__LinkContainer'>
            <Link to='/' activeStyle={activeStyleProp}>
              ABOUT
            </Link>
            <Link to='/tools' activeStyle={activeStyleProp}>
              TOOLS
            </Link>
            <Link to='/work' activeStyle={activeStyleProp}>
              WORK
            </Link>
          </div>
        </nav>
      </Col>
    </Row>
  </Container>
)

export default NavMenu
