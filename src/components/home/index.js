import React from "react"
import Hero from "./Hero"
import PartnersSection from "./PartnersSection"
import SuccessStory from "./SuccessStory"
import HomePageEvents from "./HomePageEvents"
import AboutSection from "./AboutSection"

const Index = ({ lang, location }) => {
  return (
    <div>
      <div className=" container text-center text-2xl">
        <h2 className="font-bold text-gray-700">هيئة تطوير التعليم</h2>
        <h2 className="text-mainblue font-bold">
          Education Development Commission
        </h2>
      </div>
      <Hero lang={lang} />
      <AboutSection lang={lang} />
      <SuccessStory lang={lang} />
      <HomePageEvents lang={lang} />
      <PartnersSection
        partnerTitle={lang === "ar" ? "شركاؤنا:" : "Our Partners:"}
      />
    </div>
  )
}

export default Index
