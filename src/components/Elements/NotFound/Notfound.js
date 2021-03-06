//CSS
import "./NotFound.css"

import React, { useEffect, useRef } from "react"
import { Container, Row } from "react-bootstrap"
import { Power3, TimelineLite, TweenMax } from "gsap"

//Component
import Illustration from "./404Illustration"
import Button from "../Button/Button"

const NotFound = () => {
  let notFoundPage = useRef(null)
  let tl = new TimelineLite({ delay: 0.3 })

  useEffect(() => {
    tl.staggerFrom(
      [notFoundPage],
      1,
      {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.15
    )
    //Remove initial flash
    TweenMax.to(notFoundPage, 0, { css: { visibility: "visible" } })
  }, [tl])

  return (
    <section className="notFound-page" ref={el => (notFoundPage = el)}>
      <Container className="content-container">
        <Row className="pt-5">
          <Illustration />
        </Row>
        <Row className=" notFound-text justify-content-center pt-2">
          <p>Oops! The page can't be found</p>
        </Row>

        <Row className=" justify-content-center">
          <Button href="/">Go Back</Button>
        </Row>
      </Container>
    </section>
  )
}

export default NotFound
