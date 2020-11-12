import React from "react"

const Video = props => {
  return (
    <div className="col-md-8 mx-auto py-2">
      <div className="video-container">
        <iframe
          title={props.title}
          className="video-iframe"
          src={props.src}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  )
}
export default Video
