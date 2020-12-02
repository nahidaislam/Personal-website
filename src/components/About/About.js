//CSS
import "./About.css"

import React, { useEffect, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Power3, TimelineLite, TweenMax } from "gsap"
import Img from "gatsby-image"

//Image Query
import Images from "../image"
import ToolImage from "../toolImage"

//Component
import PageTitle from "../Elements/PageTitle/PageTitle"
import Subhead from "../Elements/Subhead/Subhead"
import Tool from "../Elements/Tool/Tool"
import Button from "../Elements/Button/Button"
import CV from "./Nahida-Islam-CV.pdf"

const About = () => {
  const { propic } = Images()
  const { figma } = ToolImage()
  const { xd } = ToolImage()
  const { sketch } = ToolImage()
  const { html } = ToolImage()
  const { css } = ToolImage()
  const { js } = ToolImage()
  const { react } = ToolImage()
  const { windows } = ToolImage()
  const { kubuntu } = ToolImage()
  const { unity } = ToolImage()
  const { blender } = ToolImage()

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

    tl.from(profile, 1, { ease: Power3.easeOut }, "start").from(
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
              I am Nahida Islam. A highly motivated IT professional with
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
              time at KTH, I have had worked with several different project
              areas, for instance, research-oriented projects, web development,
              and software development projects.
            </p>
            <p>
              Thank you for visiting my portfolio, feel free to check out my
              work and do not hesitate to contact me if you want to collaborate
              or ask a question.
            </p>
            <footer className="blockquote-footer float-right">
              <cite className="signature" title="Nahida Islam">
                Nahida Islam
              </cite>
            </footer>
          </Col>
        </Row>
        <Subhead subtitle="Skills & competencies" />
        <Row className="skills pb-3 content">
          <Col md={6} className="text-center">
            <h4>Web development</h4>
            <Row className=" m-0 p-2 justify-content-center tools">
              <Tool alt="html" imgsrc={html.childImageSharp.fixed}>
                HTML
              </Tool>
              <Tool alt="css" imgsrc={css.childImageSharp.fixed}>
                CSS
              </Tool>
              <Tool alt="Javascript" imgsrc={js.childImageSharp.fixed}>
                Javascript
              </Tool>
              <Tool alt="react" imgsrc={react.childImageSharp.fixed}>
                React.js
              </Tool>
            </Row>
          </Col>
          <Col md={6} className="text-center">
            <h4>Prototyping tools</h4>
            <Row className=" m-0 p-2 justify-content-center tools">
              <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
                Figma
              </Tool>
              <Tool alt="xd" imgsrc={xd.childImageSharp.fixed}>
                Adobe XD
              </Tool>
              <Tool alt="sketch" imgsrc={sketch.childImageSharp.fixed}>
                Sketch
              </Tool>
            </Row>
          </Col>
        </Row>
        <Row md={12} className="content">
          <Col md={6} className="text-center">
            <h4>Other competencies</h4>
            <Row className=" m-0  p-2 justify-content-center tools">
              <Tool alt="unity" imgsrc={unity.childImageSharp.fixed}>
                Unity 3D
              </Tool>
              <Tool alt="blender" imgsrc={blender.childImageSharp.fixed}>
                Blender
              </Tool>
            </Row>
          </Col>
          <Col md={6} className="text-center">
            <h4>Operative systems</h4>
            <Row className=" m-0 p-2 justify-content-center tools">
              <Tool alt="windows" imgsrc={windows.childImageSharp.fixed}>
                Windows
              </Tool>
              <Tool alt="kubuntu" imgsrc={kubuntu.childImageSharp.fixed}>
                Kubuntu
              </Tool>
            </Row>
          </Col>
        </Row>
        <Row className=" m-0 pt-5 justify-content-center">
          <Button href={CV}>Resumé</Button>
        </Row>
      </Container>
    </section>
  )
}

export default About
