// CSS
import "../Projects.css"

import React from "react"
import { Col, Row } from "react-bootstrap"

//Components
import Button from "../../Elements/Button/Button"
import Subhead from "../../Elements/Subhead/Subhead"
import Tool from "../../Elements/Tool/Tool"
import Video from "../../Elements/Video/Video"
import NavigationBtn from "../../Elements/NavigationBtn/NavigationBtn"

//Image query
import ToolImage from "../../toolImage"

const Saveme = () => {
  const { queensland } = ToolImage()
  const { bing } = ToolImage()
  const { react } = ToolImage()
  const { firebase } = ToolImage()

  return (
    <div className="djtable-template content-container">
      <div className="py-4">
        <Row md={12}>
          <Col md={6}>
            <Col md={12}>
              <h4>The project goal</h4>
              <p>
                To access the game the user needs to create an account and login
                into the system. The user can then choose the level of the game
                (easy, medium, and hard). The level decides how many animals
                will be shown on the screen. The user is supposed to order the
                species according to their threatening level based on the
                player's previous knowledge. After submitting the game, the user
                will get to know their result. ​ There are several features in
                this game. There is a scoreboard where the scores from other
                users are displayed. The About page shows a little description
                of the idea behind the game.
              </p>
            </Col>
          </Col>
          <Col md={6}>
            <Col md={12}>
              <h4>Technologies used in the project</h4>
              <Row className=" m-0 pt-4 tools justify-content-between">
                <Tool
                  alt="queensland"
                  imgsrc={queensland.childImageSharp.fixed}
                >
                  <a href=" https://www.data.qld.gov.au/dataset/qld-wildlife-data-api/resource/773bef14-91d6-4ed5-9253-0146d937b2e6?fbclid=IwAR23p7vR5IiHtBPnWkmpKvixfYfvFkC9fb43PTDmcSC03I7Lmc0H_bY6C-E">
                    Queensland API
                  </a>
                </Tool>
                <Tool alt="bing" imgsrc={bing.childImageSharp.fixed}>
                  <a href=" https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/">
                    Bing Image
                  </a>
                </Tool>
                <Tool alt="react" imgsrc={react.childImageSharp.fixed}>
                  React.js
                </Tool>
                <Tool alt="firebase" imgsrc={firebase.childImageSharp.fixed}>
                  Firebase
                </Tool>
              </Row>
            </Col>
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
          Zhang, Nahida Islam (me) & Ziling Li.
        </p>
      </div>

      <Row className=" m-0 p-0 justify-content-center">
        <Button href="https://gits-15.sys.kth.se/camillef/DH2642-save-me">
          Github
        </Button>
      </Row>
      <NavigationBtn
        leftHref="/projects/sl"
        leftText="Previous project "
        rightHref="/projects"
        rightText="View all projects"
      />
    </div>
  )
}

export default Saveme
