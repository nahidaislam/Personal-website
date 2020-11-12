// CSS
import "../Projects.css"

import React from "react"
import { Col, Row } from "react-bootstrap"

//Components
import Button from "../../Elements/Button/Button"
import Subhead from "../../Elements/Subhead/Subhead"
import Tool from "../../Elements/Tool/Tool"
import Video from "../../Elements/Video/Video"

//Image query
import ToolImage from "../../toolImage"

const Djtable = () => {
  const { figma } = ToolImage()

  return (
    <div className="djtable-template content-container">
      <Row md={12}>
        <Col md={6} className="pr-5">
          <h4>Graphics</h4>
          <p>
            DJTable is an abstract themed experience. The graphics are consist
            of two parts: a) Each physical object on the table has its visual
            effects. A dial circle is shown that represents four different
            tracks of an instrument. At a specific distance between two or
            several objects, an exploding effect is shown which represents the
            fifth track. b) A standalone space-themed visual experience is
            presented for the audience. The visual integrates with the music and
            creates pleasing visual experience.
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4>Interaction</h4>
          <p>
            The interaction with the tabletop is done through physical objects,
            i.e. fiducials. Each of the fiducials represents a specific
            instrument. A trackable tag is attached underneath.
          </p>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={6} className="pr-5">
          <h4>3D Models</h4>
          <p>
            To create a representation of each instrument, 3D physical objects
            are printed. The final shape of these physical objects was decided
            according to the result of a survey that was posted on the course
            Facebook group.
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4> My role </h4>
          <p>
            I had my focus on modeling the 3D physical objects using Blender. I
            was also engaged in creating particle systems in Unity and
            implementing distance-based effects. Additionally, I developed a
            project website and was the project manager.
          </p>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={12} className="pr-5">
          <h4>The prototyping tool</h4>
          <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
            Figma
          </Tool>
        </Col>
      </Row>
      <Subhead subtitle="Demo of Djtable" />

      <div className="demo-video ">
        <Video
          title="Djtable"
          src="https://player.vimeo.com/video/384009251?title=0&byline=0&portrait=0"
        />
      </div>

      <p className="py-5 text-center">
        Special thanks to the project members: Arturs Kurzemnieks, Augustin
        Bariant, Miguel Alvarez Bordils, Nahida Islam(me) and Tingyi Li.
      </p>

      <Row>
        <Button href="https://kth.diva-portal.org/smash/record.jsf?dswid=-2112&pid=diva2%3A1459712&c=1&searchType=SIMPLE&language=sv&query=nahida+islam&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all">
          Thesis report
        </Button>
      </Row>
    </div>
  )
}

export default Djtable
