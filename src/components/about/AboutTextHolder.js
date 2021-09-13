import React from "react"
import styled from "styled-components"
import ReadMoreReact from "read-more-react"
import Title from "../shared/Title"

const AboutTextHolder = ({ text, titleText, icon, secoundStyle }) => {
  return (
    <Wraper secoundStyle={secoundStyle}>
      <div className="titleHeader">
        <Title text={titleText}   />
        <img
          src={icon}
          alt="about icon"
          className={`iconImgStyle ${secoundStyle && "secoundStyle"}`}
        />
      </div>

      <ReadMoreReact
        text={text}
        min={200}
        ideal={395}
        max={395}
        readMoreText="متابعة القراءة "
      />
    </Wraper>
  )
}

export default AboutTextHolder
const Wraper = styled.section`
  .titleHeader {
    position: relative;

    .secoundStyle {
      left: 10%;
    }
    .iconImgStyle {
      width: 60px;
      position: absolute;
      top: -20px;
      left: 10%;
    }
  }
  .display-text-group {
    background: var(--lightGray);
    margin-top: -2%;
    padding: 30px 30px 0 30px;
    text-align: justify;
    
  }
  .displayed-text {
    color: var(--darkGray);
    font-size: 2rem;
  }
  .read-more-button {
    background: var(--blue);
    color: white;
    text-align-last: center;
    font-size: 1.75rem;
    width: 150px;
    margin: 15px auto 0 auto;
  }
  @media (max-width: 600px) {
    .displayed-text {
      font-size: 1.6rem;
    }
  }
`
