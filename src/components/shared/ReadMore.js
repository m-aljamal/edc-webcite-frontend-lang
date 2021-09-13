import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const ReadMore = ({ linkTo }) => {
  return (
    <Link to={linkTo}>
      <LinkStyle className="readMore">متابعة المزيد</LinkStyle>
    </Link>
  )
}

export default ReadMore

const LinkStyle = styled.span`
  background-color: var(--blue);
  padding: 0 5px;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`
