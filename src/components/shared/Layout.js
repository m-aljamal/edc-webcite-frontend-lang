import React from "react"
import Header from "./navbar/header"
import Footer from "../shared/footer/Footer"
import AllRights from "../shared/footer/AllRights"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Layout = ({ children, location, lang }) => {
  return (
    <>
      <Header lang={lang} location={location} />
      <main
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        className="font-sans"
      >
        {children}
      </main>
      <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
        <Footer lang={lang} />
        <AllRights lang={lang} />
      </div>
    </>
  )
}

export default Layout
