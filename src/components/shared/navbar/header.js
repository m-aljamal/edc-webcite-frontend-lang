import React from "react"
import MainLinks from "./mainLinks"
import SocialLinks from "./socialLinks"
import { Link } from "gatsby"

const Header = ({ lang, location }) => {
  const [visible, setVisible] = React.useState(false)
  const showSidebar = () => {
    setVisible(!visible)
  }
  return (
    <nav
      className="flex container relative  justify-between items-center lg:items-start"
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-mainblue lg:hidden "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={showSidebar}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={`${!visible ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}`}
        />
      </svg>
      <div className="hidden lg:block">
        <SocialLinks />
      </div>
      <div
        className={` ${
          !visible && "hidden "
        } absolute lg:static top-32 z-30 mx-8  lg:mx-0 bg-white left-0 right-0 border lg:border-0  shadow-lg lg:shadow-none  lg:flex gap-6 rounded-md`}
      >
        <MainLinks
          lang={lang}
          location={location}
          visible={visible}
          showSidebar={showSidebar}
        />
      </div>
      {/* <div className=" lg:flex gap-6">
        <MainLinks
          lang={lang}
          location={location}
          visible={visible}
          showSidebar={showSidebar}
        />
      </div> */}

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
