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

const Saveme = () => {
  const { figma } = ToolImage()

  return (
    <div className="djtable-template content-container">
      <div className="py-4">
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>The project goal</h4>
            <p>
              To access the game the user needs to create an account and login
              into the system. The user can then choose the level of the game
              (easy, medium, and hard). The level decides how many animals will
              be shown on the screen. The user is supposed to order the species
              according to their threatening level based on the player's
              previous knowledge. After submitting the game, the user will get
              to know their result. ​ There are several features in this game.
              There is a scoreboard where the scores from other users are
              displayed. The About page shows a little description of the idea
              behind the game.
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4>The prototyping tool</h4>
            <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
              Figma
            </Tool>
          </Col>
        </Row>
      </div>

      <Subhead subtitle="Demo of Save Me!" />
      <div className="demo-video ">
        <Video
          title="Save Me!"
          src="https://player.vimeo.com/video/335842245"
        />
      </div>
      <div className="members">
        <p className="py-5 text-center">
          Special thanks to the project members: Camille Fournier, Haozhou
          Zhang, Nahida Islam(me) & Ziling Li.
        </p>
      </div>

      <Row className=" m-0 p-0 justify-content-center">
        <Button href="https://gits-15.sys.kth.se/camillef/DH2642-save-me">
          Github
        </Button>
      </Row>
    </div>
  )
}

export default Saveme
