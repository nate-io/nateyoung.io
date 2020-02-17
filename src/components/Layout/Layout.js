import React, { useState } from "react"
import PropTypes from "prop-types"

import SEO from "../seo"
import ThanksModal from './ThanksModal/ThanksModal'
import Nav from "../NavMenu/NavMenu"
import Footer from "../Footer/Footer"

import "normalize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Layout.scss"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)

  const handleHide = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (
    <>
      <SEO />
      <ThanksModal isModalOpen={show} handleClose={handleHide}/>
      <div className='SiteGrid'>
        <div className='SiteNav'>
          <Nav />
        </div>
        <div className='SiteContent'>{children}</div>
        <div className='SiteFooter'>
          <Footer 
            isModalOpen={show}
            showModal={handleShow}
          />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
