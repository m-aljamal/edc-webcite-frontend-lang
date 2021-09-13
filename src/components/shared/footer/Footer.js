import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../Background"
import SocialLinks from "../navbar/socialLinks"
import Img from "gatsby-image"

const getImage = graphql`
  {
    footerBackground: file(name: { eq: "footer_background" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    edcImg: file(name: { eq: "footerLogo" }) {
      childImageSharp {
        fixed(width: 175) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
const Footer = ({ lang }) => {
  const img = useStaticQuery(getImage)

  const text = {
    ar: {
      welcome: "تفضل بزيارتنا: ",
      callus: "اتصل بنا:",
      contact: "التواصل الاجتماعي: ",
      address: "العنوان:",
      phone: "الهاتف: ",
      email: "الإيميل: ",
      socialtext: `
      يسرنا تواصلكم والإجابة على استفساراتكم
عبر صفحاتنا على مواقع التواصل الإجتماعي
      `,
    },

    en: {
      welcome: "Visit Us: ",
      callus: "Call Us: ",
      contact: "Social media:",
      address: "Address: ",
      phone: "Phone: ",
      email: "Email: ",
      socialtext: `
      We are pleased to contact you and answer your questions
Via our social media pages
      `,
    },
  }
  const { welcome, callus, contact, address, phone, email, socialtext } = text[
    lang
  ]
  return (
    <Background image={img.footerBackground.childImageSharp.fluid}>
      <div className="container py-4 ">
        <div className="text-center">
          <Img fixed={img.edcImg.childImageSharp.fixed} />
        </div>
        <div className="flex justify-between mt-4">
          {/* start location */}
          <Content title={welcome}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.761680764482!2d37.17757552470896!3d36.70426434511298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fd17d4cd6f7b9%3A0x122a856f51adc165!2s79000%20Be%C5%9Fikkaya%2FKilis%20Merkez%2FKilis!5e0!3m2!1sen!2str!4v1598435154903!5m2!1sen!2str"
              width="200"
              height="100"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Content>
          <Content title={callus}>
            {/* start address */}
            <div>
              <p className="">
                <span>{address}</span>
                Oylum Mah. Gaziantep yolu <br />
                Kümeevleri Hayat Vilları NO: 5V
              </p>
              <p className="my-4">
                <span>{phone} </span>
                <span>47 45 507 531 90+</span>
              </p>
              <p>
                <span>{email}</span>
                info@edcommission.com
              </p>
            </div>
          </Content>
          {/* start social */}
          <Content title={contact}>
            <div>
              <p className=" w-72">{socialtext}</p>
              <div className="mt-2">
                <SocialLinks />
              </div>
            </div>
          </Content>
        </div>
      </div>
    </Background>
  )
}

export default Footer

const Content = ({ title, children }) => {
  return (
    <div>
      <h4 className="text-white text-lg ">{title}</h4>
      <div className="text-gray-300 mt-4 leading-8">{children}</div>
    </div>
  )
}
