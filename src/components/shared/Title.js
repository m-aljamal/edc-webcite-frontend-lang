import React from "react"
import styled from "styled-components"
const Title = ({ text, secoundStyle }) => {
  return (
    <Wraper secoundStyle={secoundStyle}>
      <h3 className=" newsTitle">{text}</h3>
    </Wraper>
  )
}

export default Title
const Wraper = styled.div`
  margin-left: ${props => props.secoundStyle && "auto"};
  background: var(--blue);
  width: 55%;
  text-align: ${props => (props.secoundStyle ? "start" : "end")};
  h3 {
    color: white;
    font-size: 3rem;
    padding: 5px 2px 5px 0px;
  }
  @media (max-width: 750px) {
    h3 {
      font-size: 2rem;
    }
  }
`
