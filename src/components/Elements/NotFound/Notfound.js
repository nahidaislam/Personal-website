//CSS
import "./NotFound.css"

import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import { TimelineLite, TweenMax } from "gsap"

//Component
import Illustration from "./404Illustration"
import Button from "../Button/Button"

const NotFound = () => {
  let notFoundPage = useRef(null)
  let tl = new TimelineLite({ delay: 0.3 })

  useEffect(() => {
    //Remove initial flash
    TweenMax.to(notFoundPage, 0, { css: { visibility: "visible" } })
  }, [tl])

  return (
    <section className="notFound-page" ref={el => (notFoundPage = el)}>
      <Container className="content-container">
        <Row className="pt-5">
          <Illustration />
        </Row>
        <Row className=" m-0 pt-5 justify-content-center">
          <Button href="/">
            Homepage
            {/* <Link to="/">Homepage</Link> */}
          </Button>
        </Row>
      </Container>
    </section>
  )
}

export default NotFound
