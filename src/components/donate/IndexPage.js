import React from "react"
import styled from "styled-components"
import Title from "../shared/Title"
import eurIcon from "../../assist/icons/donate/eurIcon.svg"
import usdIcon from "../../assist/icons/donate/usdIcon.svg"
import tlIcon from "../../assist/icons/donate/tlIcon.svg"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../shared/Background"
const IndexPage = () => {
  const { img } = useStaticQuery(graphql`
    {
      img: sanityOtherHeroImgs(title: { eq: "bankBackground" }) {
        title
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Title text="حساب البنك" />
      <DonateStyle>
        <div className="backgroundImage">
          <Background image={img.image.asset.fluid}>
            <h2 className="text container">
              كونوا معهم وساهموا في تعليمهم وبناء مستقبلهم
            </h2>
          </Background>
        </div>

        <div className="container  ">
          <h3>
            Bank Address:
            <span>
              İslambey, Cumhuriyet Cd. No:170, 79001 Merkez/Kilis- Turkey
            </span>
          </h3>
          <h3>
            Name of account:
            <span>EĞİTİM GELİŞTİRME DERNEĞİ</span>
          </h3>
          <h3>
            Organization Address:
            <span>
              TURKEY - KILIS - OYLUM MAHALLESI GAZIANTEP YOLU (SÖĞÜTLÜDERE
              CIVARI) KÜME EVLERI HAYAT VILLARI NO: 5V
            </span>
          </h3>
          <h3>
            zip code:
            <span>79000</span>
          </h3>
          <h3>
            Swift code:
            <span>TCZBTR2AXXX</span>
          </h3>
          <div className="accountIban">
            <img src={eurIcon} alt="EUR" />
            <div>
              <h3>
                Account number: <span>77591825-5003</span>
              </h3>
              <h3>
                IBAN: <span>TR30 0001 0000 4377 5918 2550 03</span>
              </h3>
            </div>
          </div>
          <div className="accountIban">
            <img src={usdIcon} alt="USD" />
            <div>
              <h3>
                Account number: <span>77591825-5002</span>
              </h3>
              <h3>
                IBAN: <span>TR57 0001 0000 4377 5918 2550 02</span>
              </h3>
            </div>
          </div>
          <div className="accountIban">
            <img src={tlIcon} alt="TL" />
            <div>
              <h3>
                Account number: <span>77591825-5001</span>
              </h3>
              <h3>
                IBAN: <span>TR84 0001 0000 4377 5918 2550 01</span>
              </h3>
            </div>
          </div>
        </div>
      </DonateStyle>
    </>
  )
}

export default IndexPage

const DonateStyle = styled.section`
  margin-top: 30px;
  direction: ltr;
  .backgroundImage {
    background-color: rgba(71 108 134, 0.6);
    background-image: linear-gradient(rgba(0, 0, 2, 0.3), rgba(0, 0, 50, 0.5));
  }
  .text {
    padding: 20% 0;
    text-align: center;
    color: white;
  }
  h3 {
    margin-top: 10px;
    color: var(--blue);
    font-weight: bold;
    font-size: 2rem;
    span {
      color: black;
      margin-left: 10px;
      font-weight: normal;
    }
  }
  .accountIban {
    margin: 25px 0;
    display: flex;
    align-items: center;
    h3 {
      margin: 0;
    }
    img {
      width: 75px;
      margin-right: 15px;
    }
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 400px) {
    .accountIban {
      flex-direction: column;
    }
  }
  @media (max-width: 750px) {
    .container {
      max-width: 90%;
    }
  }
`
