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
  const { unity } = ToolImage()
  const { fmod } = ToolImage()
  const { blender } = ToolImage()
  const { ableton } = ToolImage()

  return (
    <div className="djtable-template content-container">
      <div className="py-4">
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
              presented for the audience. The visual integrates with the music
              and creates a pleasing visual experience.
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4> My role </h4>
            <p>
              I had my focus on modeling the 3D physical objects (representative
              of each instrument) using Blender. The models were then printed
              out using Ultimaker Cura. Later on, I engaged myself in creating
              particle systems in Unity and implementing distance-based effects.
              The distance-based effects mean when two physical objects come
              close to each other, a new particle system gets triggered.
              Additionally, I developed a project website and was also the
              project manager.
            </p>
          </Col>
        </Row>
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>Interaction</h4>
            <p>
              The interaction with the tabletop is done through physical
              objects, i.e. fiducials. Each of the fiducials represents a
              specific instrument. A trackable tag is attached underneath.
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4>Technologies used in the project</h4>
            <Row className=" m-0 pt-4">
              <Tool alt="unity" imgsrc={unity.childImageSharp.fixed}>
                Unity
              </Tool>
              <Tool alt="Blender" imgsrc={blender.childImageSharp.fixed}>
                Blender
              </Tool>
              <Tool alt="fmod" imgsrc={fmod.childImageSharp.fixed}>
                Fmod
              </Tool>
              <Tool alt="ableton" imgsrc={ableton.childImageSharp.fixed}>
                Ableton
              </Tool>
            </Row>
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
        </Row>
      </div>

      <Subhead subtitle="Demo of Djtable" />

      <div className="demo-video ">
        <Video
          title="Djtable"
          src="https://player.vimeo.com/video/384009251?title=0&byline=0&portrait=0"
        />
      </div>
      <div className="members">
        <p className="py-5 text-center">
          Special thanks to the project members: Arturs Kurzemnieks, Augustin
          Bariant, Miguel Alvarez Bordils, Nahida Islam(me) & Tingyi Li.
        </p>
      </div>

      <Row className=" m-0 p-0 justify-content-around">
        <Button href="https://github.com/AugustinBariant/DJTable">
          Github
        </Button>
        <Button href="https://djtable.netlify.app/">Website</Button>
      </Row>
    </div>
  )
}

export default Djtable
