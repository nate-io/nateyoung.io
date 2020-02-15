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
        <nav defaultActiveKey='/' className='NavMenu'>
          <Link to='/' activeStyle={{ color: 'red' }}>ABOUT</Link>
          <Link to='/skills' activeStyle={{ color: 'green' }}>SKILLS</Link>
          <Link to='/projects' activeStyle={{ color: 'blue' }}>PROJECTS</Link>
        </nav>
      </Col>
    </Row>
  </Container>
)

export default NavMenu