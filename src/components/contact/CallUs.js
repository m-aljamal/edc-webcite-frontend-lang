import React from "react"
import styled from "styled-components"
import phoneIcon from "../../assist/icons/contact/phone.svg"
import emailIcon from "../../assist/icons/contact/email.svg"
import sociallIcon from "../../assist/icons/contact/social.svg"
import Title_no_back from "../shared/Title_no_back"
import Title from "../shared/Title"
const CallUs = () => {
  return (
    <Wraper>
      <Title text="اتصل بنا:" />
      <div className="container">
        <Card
          icon={emailIcon}
          title="البريد الإلكتروني"
          content1="info@edcommission.com"
          content2="hr@edcommission.com"
          type="email"
        />

        <Card
          icon={phoneIcon}
          title="الهاتف"
          content1="+90 531 507 45 47"
          content2="+90 534 661 12 24"
          type="phone"
        />

        <div className="social">
          <Card
            icon={sociallIcon}
            title="السوشال ميديا"
            content1="facebook.com/edcmission"
            content2="twitter.com/edcmission"
            content3="instagram/educationdevelopmentcommission"
            content4="youtube.com"
            type="social"
          />
        </div>
      </div>
    </Wraper>
  )
}

export default CallUs

const Wraper = styled.section`
  @media (max-width: 750px) {
    font-size: 1.7rem;
  }
  padding: 4rem 0;
  .container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      .social {
        grid-column: 1 / 3;
      }
    }
    @media (max-width: 450px) {
      grid-template-columns: repeat(1, 1fr);
      .social {
        grid-column: 1;
      }
    }
  }
`

const Card = ({
  title,
  icon,
  content1,
  content2,
  content3,
  content4,
  type,
}) => {
  return (
    <CardStyle>
      <img src={icon} alt={title} className="icon" />

      {type === "phone" ? (
        <>
          <Title_no_back title={title} width="65px" />
          <a href="tel:00905315074547" rel="noreferrer">
            {content1}
          </a>
          <a href="tel:00905346611224" rel="noreferrer">
            {content2}
          </a>
        </>
      ) : type === "email" ? (
        <>
          <Title_no_back title={title} width="135px" />
          <a href="mailto:info@edcommission.com" rel="noreferrer">
            {content1}
          </a>
        </>
      ) : (
        <>
          <Title_no_back title={title} width="120px" />
          <a
            href="https://www.facebook.com/edcmission"
            target="_blank"
            rel="noreferrer"
          >
            {content1}
          </a>
          <a
            href="https://twitter.com/edcmission"
            target="_blank"
            rel="noreferrer"
          >
            {content2}
          </a>
          <a
            href="https://www.instagram.com/educationdevelopmentcommission"
            target="_blank"
            rel="noreferrer"
          >
            {content3}
          </a>
          <a
            href="https://www.youtube.com/channel/UC8wDR05WxNOVrC-mlo_GwQQ"
            target="_blank"
            rel="noreferrer"
          >
            {content4}
          </a>
        </>
      )}
    </CardStyle>
  )
}

const CardStyle = styled.section`
   
  text-align: center;
  .icon {
    width: 85px;
    margin: 0 auto;
  }
  a {
    display: block;
    color: var(--darkGray);
    direction: ltr;
  }
  h3 {
    font-size: 2rem;
    margin: 2rem 0;
  }
  @media (max-width: 600px) {
    .icon {
      width: 65px;
    }
    h3,
    a {
      font-size: 1.5rem;
    }
  }
`
