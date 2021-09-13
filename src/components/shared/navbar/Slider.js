import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SliderStyle = styled.div`
  background-color: var(--blue);
  width: 175px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  transition: 350ms;
  .linksContainer {
    margin-top: 20px;
  }

  .links {
    text-align: center;
    margin: 20px 0;
    a {
      color: white;
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`
const Slider = ({ lang, mainLinks }) => {
  return (
    <SliderStyle>
      <div className="linksContainer">
        {mainLinks.map(link => (
          <div key={link.id} className="links">
            <Link
              activeClassName="activeLink"
              to={lang === "ar" ? link.url : "/" + lang + link.url}
            >
              {lang === "ar"
                ? link.arabicText
                : lang === "en"
                ? link.englishText
                : link.turkText}
            </Link>
          </div>
        ))}
      </div>
    </SliderStyle>
  )
}

export default Slider
