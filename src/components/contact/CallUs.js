import React from "react"
import phoneIcon from "../../assist/icons/contact/phone.svg"
import emailIcon from "../../assist/icons/contact/email.svg"
import sociallIcon from "../../assist/icons/contact/social.svg"
import Title from "../shared/Title"

const socialLinks = [
  "https://www.facebook.com/edcmission",
  "https://twitter.com/edcmission",
  "https://www.instagram.com/educationdevelopmentcommission",
  "https://www.youtube.com/channel/UC8wDR05WxNOVrC-mlo_GwQQ",
]

const Link = ({ href, text }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      className="block text-lg hover:text-mainblue"
    >
      {text}
    </a>
  )
}

const CallUs = ({ lang }) => {
  return (
    <div className="py-12 ">
      <Title title={` ${lang === "ar" ? "اتصل بنا:" : "Call Us:"} `} />
      <div className="container grid grid-cols-3 mt-8">
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
          {socialLinks.map(s => (
            <Link key={s} href={s} text={s} />
          ))}
        </Card>
      </div>
    </div>
  )
}

export default CallUs

const Card = ({ title, icon, children }) => {
  return (
    <div className=" text-center">
      <img src={icon} alt={title} className="w-20 mx-auto" />
      {children}
    </div>
  )
}
