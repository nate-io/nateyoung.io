import React from "react"
import PropTypes from "prop-types"

import Nav from '../NavMenu/NavMenu'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="SiteGrid">
      <div className="SiteNav">
        <Nav />
      </div>
      <div className="SiteContent">
        { children }
      </div>
      <div className="SiteFooter">
        Footer
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
