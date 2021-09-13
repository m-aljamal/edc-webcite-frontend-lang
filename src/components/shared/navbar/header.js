import React from "react"
import MainLinks from "./mainLinks"
import SocialLinks from "./socialLinks"
import { Link } from "gatsby"

const Header = ({ lang, location }) => {
  const [visible, setVisible] = React.useState(false)
  const showSidebar = () => setVisible(!visible)
  return (
    <nav
      className="flex container  justify-between  "
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <SocialLinks />
      <div className="flex gap-6">
        <MainLinks
          lang={lang}
          location={location}
          visible={visible}
          showSidebar={showSidebar}
        />
      </div>
      <div className=" w-44 pt-2">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqoung1wz/image/upload/v1613318354/websiteImage/edcLogo_vupus2.png"
            alt="هيئة تطوير التعليم"
            className="w-full"
          />
        </Link>
      </div>
    </nav>
  )
}
export default Header
