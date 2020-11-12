import React from "react"

const Video = ({ title, src }) => {
  return (
    <div className="col-md-8 mx-auto py-2">
      <div className="video-container">
        <iframe
          title={title}
          className="video-iframe"
          src={src}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  )
}
export default Video
