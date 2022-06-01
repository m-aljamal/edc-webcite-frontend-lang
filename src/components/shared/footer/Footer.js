import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../Background"
import Img from "gatsby-image"
import FooterSocialLinks from "./FooterSocialLinks"

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
عبر صفحاتنا على مواقع التواصل الاجتماعي
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
        <div
          className={`md:flex justify-between ${
            lang === "ar" ? "md:text-right" : "md:text-left"
          }  text-center`}
        >
          <div className="md:w-1/3">
            <h2 className="my-4 text-white font-bold">{address}</h2>
            <p style={{ direction: "ltr" }} className="text-gray-300">
              DOĞAN GÜREŞ PAŞA MAH. <br />
              MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="my-4 text-white font-bold">{callus}</h2>
            <div className="text-gray-300">
              <div>
                <p>{phone} </p>
                <p style={{ direction: "ltr" }}>+90 531 507 45 47</p>
                <p style={{ direction: "ltr" }}>+90 534 661 12 24</p>
              </div>
              <div className="mt-4">
                <p>{email}</p>
                <p>info@edcommission.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="my-4 text-white font-bold">{contact}</h2>
            <FooterSocialLinks />
          </div>
        </div>
      </div>
    </Background>
  )
}

export default Footer
