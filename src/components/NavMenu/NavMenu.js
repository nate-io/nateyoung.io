import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './NavMenu.scss'

const NavMenu = () => (
  <Container>
    <Row>
      <Col>
        <nav className='NavMenu'>
          <div className='NavMenu__ImageContainer'>
            <img src='https://via.placeholder.com/150' alt='Profile of the author'/>
          </div>
          <div className="NavMenu__LinkContainer">
            <Link to='/' activeStyle={{ color: 'red' }}>ABOUT</Link>
            <Link to='/skills' activeStyle={{ color: 'green' }}>SKILLS</Link>
            <Link to='/projects' activeStyle={{ color: 'blue' }}>PROJECTS</Link>
          </div>
        </nav>
      </Col>
    </Row>
  </Container>
)

export default NavMenu