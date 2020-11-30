//CSS
import "./Footer.css"

import React from "react"
import { Container, Row } from "react-bootstrap"
import {
  FaBehance,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="justify-content-center">
          <div>
            <ul className="footer-socials">
              <li>
                <a href="https://github.com/nahidaislam">
                  <FaGithub className="social-media-fill" size="20px" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nahida-islam/">
                  <FaLinkedinIn className="social-media-fill" size="20px" />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/itsnahida ">
                  <FaBehance className="social-media-fill" size="20px" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/its.nahida/">
                  <FaInstagram className="social-media-fill" size="20px" />
                </a>
              </li>
              <li>
                <a href="mailto:nahida_1994@hotmail.com">
                  <FaEnvelope className="social-media-fill" size="20px" />
                </a>
              </li>
            </ul>
          </div>
        </Row>
        <Row className="justify-content-center pt-2">
          <p className="copyright-text">Copyright &copy; Nahida Islam 2020</p>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
