//CSS
import "./Video.css"

import React from "react"

const Video = ({ title, src }) => {
  return (
    <div className="video-container text-center">
      <iframe
        title={title}
        className="video-iframe"
        src={src}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      />
    </div>
  )
}
export default Video
