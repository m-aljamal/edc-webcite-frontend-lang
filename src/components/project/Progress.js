import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
const Progress = ({ data, reverse, reverseColor, flexEnd }) => {
  return (
    <ProgressStyle reverseColor={reverseColor} flexEnd={flexEnd}>
      <div className={reverse ? `reverseStyle` : "t"}>
        {/* <div className={`content ${reverse ? `reverseStyle` : ""}`}>
          <div className="dateHoldre">
            <p className="date">{data.date}</p>
            <div className="circle"></div>
          </div>
          <Img fluid={data.image.asset.fluid} className="image" />
          <div>
            <div className="text">
              <h3 className="title">{data.title}</h3>
              <p className="desc">{data.description}</p>
            </div>
          </div>
        </div> */}
      </div>
    </ProgressStyle>
  )
}

export default Progress

const ProgressStyle = styled.div`
  .image {
    background: ${props =>
      props.reverseColor ? "var(--darkGray)" : "var(--blue)"};
    width: 8rem;
    border-radius: 50%;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 50%;
    margin-left: auto;
  }
  .reverseStyle {
    flex-direction: row-reverse;
    .text {
      margin-right: 1rem;
    }
    .dateHoldre {
      flex-direction: row-reverse;
      margin-left: 2rem;
      margin-right: 0;
    }
    .content {
      margin-right: auto !important;
      margin-left: 0 !important;
    }
    .date {
      padding: 0 13px;
    }
  }
  .date {
    font-size: 1.5rem;
    border-bottom: 1px solid var(--darkGray);
    padding: 0 8px;
    text-align: center;
  }
  .text {
    width: 28rem;
    margin-left: 1rem;
  }
  .desc {
    font-size: 1.5rem;
    text-align: justify;
    text-align-last: end;
    color: var(--darkGray);
  }
  .title {
    font-size: 1.7rem;
    text-align: end;
    color: var(--blue);
    font-weight: bold;
  }
  .circle {
    background: ${props =>
      props.reverseColor ? "var(--darkGray)" : "var(--blue)"};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin-bottom: -5px;
  }
  .dateHoldre {
    display: flex;
    align-items: flex-end;
    margin-right: 2rem;
  }
  @media (max-width: 1120px) {
    .date {
      font-size: 1.2rem;
    }
    .image {
      width: 6rem;
    }
  }
  @media (max-width: 1065px) {
    .content {
      transform: translateY(-65px);
    }
  }
  @media (max-width: 1000px) {
    .content {
      transform: translateY(-0px);
      width: fit-content;
      /* flex-direction: row-reverse; */
    }
    .reverseStyle {
      /* flex-direction: row; */
      .dateHoldre {
        flex-direction: initial;
      }
    }
    .dateHoldre {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: 600px) {
    .content {
      padding: 35px 0;
    }
  }
  @media (max-width: 500px) {
    .text {
      .title {
        font-size: 1.4rem;
      }
      .desc {
        font-size: 1.2rem;
      }
    }
    .image {
      width: 4rem;
    }
    .dateHoldre {
      margin: 0;
    }
    .reverseStyle {
      .dateHoldre {
        margin: 0;
      }
    }
  }
  @media (max-width: 450px) {
    .image {
      display: none;
    }
  }
  @media (max-width: 420px) {
    .dateHoldre {
      display: none;
    }
    .reverseStyle {
      .dateHoldre {
        display: none;
      }
    }
  }
`
