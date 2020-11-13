//CSS
import "./Styles/Layout.css"
import "bootstrap/dist/css/bootstrap.css"

import React from "react"
import PropTypes from "prop-types"

//Components
import Contact from "./Elements/Contact/Contact"
import Header from "./Elements/Header/Header"
import Socials from "./Elements/Socials/Socials"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Socials />
        <main>{children}</main>
        <Contact />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
