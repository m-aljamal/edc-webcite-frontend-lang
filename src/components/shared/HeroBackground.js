import React from "react"
import Background from "./Background"
const HeroBackground = ({ image, children, className }) => {
  return (
    <Background image={image} className={className}>
      <div style={{ minHeight: "450px", marginTop: "30px" }}>{children}</div>
    </Background>
  )
}

export default HeroBackground
