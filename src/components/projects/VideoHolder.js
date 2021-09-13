import React from "react"
import poster from "../../assist/images/poster.webp"
const VideoHolder = ({ src,className }) => {
  return (
 
      <video controls poster={poster} className={`video ${className}`}>
        <source src={src} type="video/mp4" />
      </video>

  )
}

export default VideoHolder
