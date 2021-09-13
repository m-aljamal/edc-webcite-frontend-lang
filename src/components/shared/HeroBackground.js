import React from "react"
import Background from "./Background"
import styled from "styled-components"
const HeroBackground = ({ image, children, className }) => {
  return (
    <Background image={image} className={className}>
      <Wraper>{children}</Wraper>
    </Background>
  )
}

export default HeroBackground
const Wraper = styled.section`
  min-height: 450px;
  margin-top: 30px;
`
