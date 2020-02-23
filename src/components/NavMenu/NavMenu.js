import React, { useState } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaBars } from 'react-icons/fa'

import profileImage from "../../images/profile.png"

import "./NavMenu.scss"

const activeStyleProp = {
  color: "#66fcf1",
}

const NavMenu = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <Container className='NavMenu__container'>
      <Row>
        <Col>
          <nav className="NavMenu">
            <header className='NavMenu__ImageContainer'>
              {/* large screen header */}
              <h1>
                <a href='/' title='nateyoung.io'>
                  <img src={profileImage} alt='Profile of the author' />
                </a>
              </h1>
            </header>

            {/* small screen header */}
            <div className="NavMenu__small">
              <h1 id='NavMenu__smallHeader'>nateyoung.io</h1>
              <span id='NavMenu__icon'>
                <FaBars onClick={toggleMenu}/>
              </span>
            </div>
            {/* link list */}
            <ul className={`NavMenu__links ${isMenuOpen ? 'isOpen' : ''}`}>
              <li>
                <Link to='/' activeStyle={activeStyleProp} onClick={toggleMenu}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='/tools' activeStyle={activeStyleProp} onClick={toggleMenu}>
                  TOOLS
                </Link>
              </li>
              <li>
                <Link to='/work' activeStyle={activeStyleProp} onClick={toggleMenu}>
                  WORK
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  )
}

export default NavMenu
