//CSS
import "./Home.css"

import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Col, Container, Row } from "react-bootstrap"
import { Power3, TimelineLite, TweenMax } from "gsap"

//Image Query
import Images from "../image"
// import illustration from "../../images/ProfilePicture/illustration.png"

const Home = () => {
  const { illustration } = Images()

  let home = useRef(null)
  let content = useRef(null)
  let images = useRef(null)
  let tl = new TimelineLite({ delay: 1 })

  useEffect(() => {
    //images vars
    const illImage = images.firstElementChild

    //content vars
    const headline = content.children[0].children[0]
    const subtext = headline.nextSibling
    const contentP = subtext.nextSibling.children[0]
    const viewButton = content.children[1].children[0]

    tl.from(illImage, 1, { y: 900, ease: Power3.easeOut }, "start").from(
      illImage.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.03
    )

    tl.staggerFrom(
      [headline, subtext, contentP, viewButton],
      1,
      {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.15,
      "start"
    )

    //Remove initial flash
    TweenMax.to(home, 0, { css: { visibility: "visible" } })
  }, [tl])

  return (
    <section className="home" ref={el => (home = el)}>
      <Container className="d-flex align-items-center juntify-content-center">
        <Row md={12}>
          <Col lg={8} md={12} sm={12} ref={el => (content = el)}>
            <div className="welcome pt-lg-5">
              <h1>Hi, my name is Nahida Islam</h1>
              <h6>Web developer | UX/UI Designer </h6>
              <div className="description">
                <p>
                  I am a Stockholm based creative coder. I am interested in
                  creating user-friendly products using User Research, tests and
                  wireframes and also giving them life through coding. I am now
                  up for the start of my career and new challenges.
                </p>
              </div>
            </div>
            <div className="primary-button">
              <button type="button" className="btn button mr-4">
                <Link to="/projects"> View Projects</Link>
              </button>
            </div>
          </Col>
          <Col lg={4} ref={el => (images = el)}>
            <div className="illustration ">
              <Img
                fluid={illustration.childImageSharp.fluid}
                alt="Illustration"
              />
              <p className="text-center credit">
                Illustration by Miryam Sophie Ahlström
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
