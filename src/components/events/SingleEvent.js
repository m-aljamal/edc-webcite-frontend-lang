import React from "react"
import HeroBackground from "../shared/HeroBackground"
import styled from "styled-components"
import calenderIcon from "../../assist/icons/events/calendar.svg"
import projectIcon from "../../assist/icons/events/project.svg"
import PortableText from "../shared/PortableText"
import Img from "gatsby-image"
import VideoContainer from "../shared/VideoContainer"
const SingleEvent = ({ data }) => {
  return (
    <EventStyle>
      <HeroBackground image={data.panner.asset.fluid} className="background">
        <div className="heroText">
          <h2>{data.title}</h2>
        </div>
      </HeroBackground>
      <div className="infoContainer container">
        <div className="dateContainer">
          <div className="date">
            <img src={projectIcon} className="icon" alt={data.title} />
            <p>{data.location}</p>
          </div>
          <div className="date">
            <img src={calenderIcon} className="icon" alt={data.title} />
            <p>{data.date}</p>
          </div>
        </div>
        <div className="text1">
          {data._rawDescription1 && (
            <PortableText blocks={data._rawDescription1} />
          )}
        </div>
        <div className="textImages">
          {data.imageOfText?.map(img => (
            <Img fluid={img.asset.fluid} className="image" alt={data.title} />
          ))}
        </div>
        <div className="video">
          {data.video && (
            <VideoContainer
              src={data.video}
              videoPoster={data?.videoPoster?.asset?.url}
              width="50%"
            />
          )}
        </div>
        <div className="text1">
          {data._rawDescription1 && (
            <PortableText blocks={data._rawDescription2} />
          )}
        </div>
      </div>
    </EventStyle>
  )
}

export default SingleEvent

const EventStyle = styled.div`
  .background {
    background-color: rgba(71 108 134, 0.6);
    background-image: linear-gradient(rgba(0, 0, 2, 0.3), rgba(0, 0, 50, 0.5));
  }
  .heroText {
    width: 80vw;
    text-align: center;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 2.8rem;
  }
  .dateContainer {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--lightGray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }
  .date {
    display: flex;
    align-items: center;
    margin-top: 8px;
    p {
      margin-right: 10px;
      color: var(--darkGray);
    }
  }
  .icon {
    width: 25px;
  }
  .infoContainer {
    margin-bottom: 50px;
  }
  strong {
    color: var(--blue);
  }
  .text1 {
    margin-top: 20px;
    text-align: justify;
  }
  .textImages {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  ul {
    list-style-type: disc;
  }
  @media (max-width: 380px) {
    .dateContainer {
      display: block;
    }
  }
  @media (max-width: 750px) {
    .infoContainer {
      font-size: 1.7rem;
      max-width: 90%;
    }
    .textImages {
      grid-template-columns: 1fr;
    }
  }
`
