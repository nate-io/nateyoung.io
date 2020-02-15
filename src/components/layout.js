/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./gatsbyDefaultLayout.scss"
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="SiteGrid">
      <div className="SiteNav">
        <h1>Nav</h1>
      </div>
      <div className="SiteContent">
        <>
          <h1>Content</h1>
          { children }
        </>
      </div>
      <div className="SiteFooter">
        <h1>Footer</h1>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
