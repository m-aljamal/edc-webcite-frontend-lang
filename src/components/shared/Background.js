import React from "react"
import BackgroundImage from "gatsby-background-image"

const Background = ({ children, image, className }) => {
  return (
    <>
      <BackgroundImage
        Tag="div"
        fluid={image}
        className={className}
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </>
  )
}

export default Background
