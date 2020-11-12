//CSS
import "./Styles/Layout.css"
import "bootstrap/dist/css/bootstrap.css"

import React from "react"
import PropTypes from "prop-types"

//Components
import Contact from "./Contact/Contact"
import Header from "./Header/Header"
import Socials from "./Socials/Socials"

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
