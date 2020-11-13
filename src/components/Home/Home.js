//CSS
import "./Home.css"

import React, { useEffect, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import { Power3, TimelineLite, TweenMax } from "gsap"

//Images
import illustration from "../../images/ProfilePicture/illustration.png"
import ring from "../../images/ring.png"

const Home = () => {
  let home = useRef(null)
  let content = useRef(null)
  let images = useRef(null)
  let tl = new TimelineLite({ delay: 1 })

  useEffect(() => {
    //images vars
    const illImage = images.children[0].firstElementChild

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
      <Container className="intro">
        <Row>
          <Col md={8} ref={el => (content = el)}>
            <div className="welcome">
              <h1>Hi, my name is Nahida Islam</h1>
              <h6>Web developer | UX/UI Designer </h6>
              <div className="description">
                <p>
                  Based in Stockholm. I define myself as a creative coder. I am
                  interested in creating user-friendly products using User
                  Research, tests and wireframes and also giving them life
                  through coding. I am now up for the start of my career and new
                  challenges.
                </p>
              </div>
            </div>
            <div className="primary-button">
              <button type="button" className="btn button mr-4">
                <Link to="/projects"> View Projects</Link>
              </button>
            </div>
          </Col>
          <Col md={4} ref={el => (images = el)}>
            <div className="loader">
              <div className="illustration ">
                <img src={illustration} alt="" />
                <p className="text-center credit">
                  {" "}
                  Illustration by Miryam Sophie Ahlström
                </p>
              </div>
              <div className="ringOne ring">
                <img src={ring} alt="ring" />
              </div>
              <div className="ringTwo ring">
                <img src={ring} alt="ring" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
