import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaBars } from 'react-icons/fa'

import profileImage from "../../images/profile.png"

import "./NavMenu.scss"

const activeStyleProp = {
  color: "#66fcf1",
}

{/* <header className='NavMenu__ImageContainer'>
<h1>
  <a href='/' title='nateyoung.io'>
    <img src={profileImage} alt='Profile of the author' />
  </a>
</h1>
</header> */}

const NavMenu = () => (
  <Container className='NavMenu__container'>
    <Row>
      <Col>
        <Navbar
          collapseOnSelect 
          expand="lg" 
          bg='slate'
          variant='dark'
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FaBars className='NavMenu__bars'/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className='dropdown-button-drop-down'>
            <Nav className="mr-auto">                       
              <Link to='/' activeStyle={activeStyleProp}>
                ABOUT
              </Link>            
              <Link to='/tools' activeStyle={activeStyleProp}>
                TOOLS
              </Link>
              <Link to='/work' activeStyle={activeStyleProp}>
                WORK
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
            <Navbar.Text>nateyoung.io</Navbar.Text>
          </Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  </Container>
)

export default NavMenu
