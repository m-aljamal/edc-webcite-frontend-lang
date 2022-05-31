import React from "react"
import phoneIcon from "../../assist/icons/contact/phone.svg"
import emailIcon from "../../assist/icons/contact/email.svg"
import sociallIcon from "../../assist/icons/contact/social.svg"
import Title from "../shared/Title"
import SocialLinks from "../shared/navbar/socialLinks"
import FooterSocialLinks from "../shared/footer/FooterSocialLinks"

const Link = ({ href, text }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      className="block text-lg hover:text-mainblue "
    >
      {text}
    </a>
  )
}

const CallUs = ({ lang }) => {
  return (
    <div className="py-12 container ">
      <Title title={` ${lang === "ar" ? "اتصل بنا:" : "Call Us:"} `} />
      <div className=" grid md:grid-cols-3  mt-8">
        <Card icon={emailIcon}>
          <Link
            href="mailto:info@edcommission.com"
            text=" info@edcommission.com"
          />
        </Card>

        <Card icon={phoneIcon}>
          <div style={{ direction: "ltr" }}>
            <Link href="tel:00905315074547" text="+90 531 507 45 47" />
            <Link href="tel:00905346611224" text="+90 534 661 12 24" />
          </div>
        </Card>

        <Card icon={sociallIcon}>
          <div>
            <FooterSocialLinks />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CallUs

const Card = ({ title, icon, children }) => {
  return (
    <div className=" text-center py-4 md:py-0">
      <img src={icon} alt={title} className="w-20 mx-auto" />
      {children}
    </div>
  )
}
