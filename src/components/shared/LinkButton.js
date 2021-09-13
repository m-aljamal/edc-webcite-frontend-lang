import React from "react"
import { Link } from "gatsby"
const LinkButton = ({ text, className,link }) => {
  return <Link className={className} to={link}>{text}</Link>
}

export default LinkButton
