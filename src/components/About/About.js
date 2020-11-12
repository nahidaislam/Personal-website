import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import { TimelineLite, TweenMax, Power3 } from "gsap"

import { Container, Col, Row } from "react-bootstrap"

//Components
import PageTitle from "../Elements/PageTitle/PageTitle"
import Images from "../image"

//CSS
import "./About.css"

const About = () => {
  const { propic } = Images()
  let aboutPage = useRef(null)
  let images = useRef(null)
  let title = useRef(null)
  let aboutContent = useRef(null)
  let tl = new TimelineLite({ delay: 0.3 })

  useEffect(() => {
    const profile = images
    const pageTitle = title.children[0].children[0].children[0]
    const welcome = aboutContent.children[0]
    const firstPara = welcome.nextSibling
    const secondPara = firstPara.nextSibling
    const thirdPara = secondPara.nextSibling
    const fourthPara = thirdPara.nextSibling

    tl.from(profile, 1, { y: 1280, ease: Power3.easeOut }, "start").from(
      profile.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    )

    tl.staggerFrom(
      [pageTitle, welcome, firstPara, secondPara, thirdPara, fourthPara],
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
    TweenMax.to(aboutPage, 0, { css: { visibility: "visible" } })
  }, [tl])

  return (
    <section className="about-page" ref={el => (aboutPage = el)}>
      <Container className="content-container" ref={el => (title = el)}>
        <PageTitle title="About" />
        <Row className="about-content">
          <Col md={6} className=" about-img " ref={el => (images = el)}>
            <Img fluid={propic.childImageSharp.fluid} alt="Profile picture" />
          </Col>
          <Col
            md={6}
            className="about-text my-auto"
            ref={el => (aboutContent = el)}
          >
            <h2>
              Hey there!
              <span className="wave" role="img" aria-label="waving-hand">
                🖐️
              </span>
            </h2>
            <p>
              My name is Nahida Islam. A highly motivated IT professional with
              experience working on several programming projects and
              applications, during a 5-year IT education with a master's degree
              in Interactive Media Technology at the Royal Institute of
              Technology (KTH) in Stockholm, Sweden. I have a passion for visual
              media and web development and spend a lot of time learning these
              topics not just in school, but also in my spare time. I am a
              creative person who likes to express my creative side through
              photography, art and makeup.
            </p>
            <p>
              I possess a wide range of skills related to media technology,
              human-computer interaction and user experience (UX). During my
              time at KTH, I have had worked with several different projects,
              for instance, research-oriented projects, web development, and
              software development projects.
            </p>
            <p>
              Thank you for visiting my portfolio, feel free to check out my
              work and do not hesitate to contact me if you want to collaborate
              or ask a question.
            </p>
            <p className="signature"> Nahida Islam</p>
          </Col>
        </Row>
        {/* <Row className="about-content">

        </Row> */}
      </Container>
    </section>
  )
}

export default About
