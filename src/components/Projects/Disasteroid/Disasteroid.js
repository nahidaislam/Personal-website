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

const Disasteroid = () => {
  const { figma } = ToolImage()

  return (
    <div className="disasteroid-template content-container">
      <Row md={12} className="py-3">
        <Col md={6} className="pr-5">
          <h4>Interaction</h4>
          <p>
            Disasteroid is supported on Android 7.0 'Nougat' (API Level 24) or
            higher. The game is meant to be played by multiple people working as
            a team. An image based marker as a single source of truth for all
            players was used to avoid any pre-mapping of the playing environment
            before every game session. Using Photon networking package for Unity
            with smart compensation for any lag in the network, smooth and
            synchronized asteroid motion, impacts and player interactions are
            achieved, allowing for a truly immersive real-time multiplayer
            experience in AR on a whole room scale.
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4>3D Models</h4>
          <p>
            A satellite with a gun on top of it was 3D printed to represent the
            special weapon. A image was attached to it in order to be able to
            track the satellite on the AR scene.
          </p>
        </Col>
      </Row>
      <Row md={12} className="py-3">
        <Col md={6} className="pr-5">
          <h4>Graphics</h4>
          <p>
            It is an earth-based game. It involves low poly earth. The earth is
            painted according to a vegetation map to give the player information
            about the population density. The player can then try to deflect the
            asteroids in a less dense area.
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4> My role </h4>
          <p>
            I was the graphics lead for the project. My role included designing
            the low poly earth, missile, and the satellite using Blender. I was
            responsible for the 3D printing and decorating the special weapon,
            i.e. the satellite. I was also the project leader and was
            responsible for building the project website.
          </p>
        </Col>
      </Row>
      <Row md={12} className="py-3">
        <Col md={12} className="pr-5">
          <h4>The prototyping tool</h4>
          <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
            Figma
          </Tool>
        </Col>
      </Row>
      <Subhead subtitle="Demo of Disasteroid" />

      <div className="demo-video ">
        <Video
          title="Disasteroid"
          src="https://player.vimeo.com/video/382895194?title=0&byline=0&portrait=0"
        />
      </div>

      <p className="py-5 text-center">
        Special thanks to the project members: Arturs Kurzemnieks, Augustin
        Bariant, Chantal Hundscheid, Miguel Alvarez Bordils, Nahida Islam(me)
        and Tingyi Li.
      </p>

      <Row>
        <Button href="https://kth.diva-portal.org/smash/record.jsf?dswid=-2112&pid=diva2%3A1459712&c=1&searchType=SIMPLE&language=sv&query=nahida+islam&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all">
          Thesis report
        </Button>
      </Row>
    </div>
  )
}

export default Disasteroid
