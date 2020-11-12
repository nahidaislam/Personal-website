import React, { Component } from "react"
import { Link } from "gatsby"

import { Container, Nav, Navbar } from "react-bootstrap"

//CSS
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <header className="header-area">
        <Container fluid className="main-menu">
          <Navbar expand="md">
            <Navbar.Brand href="/" className="navbar-brand">
              Nahida Islam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav as="ul" className="ml-auto">
                <Nav.Item as="li" className="nav-item ">
                  <Link to="/" className="nav-link" activeClassName="active">
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    to="/projectsPage"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Projects
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    to="/aboutPage"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    to="/hobbiesPage"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Hobbies
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}
