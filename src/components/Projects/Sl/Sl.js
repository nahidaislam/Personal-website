// CSS
import "../Projects.css"

import React from "react"
import { Col, Row } from "react-bootstrap"

//Components
import Subhead from "../../Elements/Subhead/Subhead"
import Tool from "../../Elements/Tool/Tool"
import Video from "../../Elements/Video/Video"

//Image query
import ToolImage from "../../toolImage"

const Sl = () => {
  const { sketch } = ToolImage()

  return (
    <div className="djtable-template content-container">
      <div className="py-4">
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>The project goal</h4>
            <p>
              Subway is one of the most common transit systems in Stockholm,
              Sweden. It’s an easy medium to travel by and is available
              throughout the city. Suppose you go to a destination where you’ve
              never been to before. You get off the subway and discover two
              exits in two opposite directions. You have a hard time deciding
              which exit to take to reach your destination in the shortest
              amount of time.
              <br></br>
              The vision is to develop a mobile application that helps people
              navigate through the subway stations. It will help users switch
              between the trains, and help them find the most efficient route
              out of the stations. It will also allow the user to see this
              information in advance.
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4>The prototyping tool</h4>
            <Row className=" m-0 pt-4">
              <Tool alt="sketch" imgsrc={sketch.childImageSharp.fixed}>
                Sketch
              </Tool>
            </Row>
          </Col>
        </Row>
      </div>

      <Subhead subtitle="Demo of SL: Station map" />
      <div className="demo-video ">
        <Video title="Sl" src="https://player.vimeo.com/video/310948255" />
      </div>
      <div className="members">
        <p className="py-5 text-center">
          Special thanks to the project members: Eldar Zeynalli, Filip Bäck,
          Lukas Finnveden, Nahida Islam (me) & Oliver Lillberg.
        </p>
      </div>
    </div>
  )
}

export default Sl
