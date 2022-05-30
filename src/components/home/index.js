import React from "react"
import Hero from "./Hero"
import PartnersSection from "./PartnersSection"
import SuccessStory from "./SuccessStory"
import HomePageEvents from "./HomePageEvents"
import AboutSection from "./AboutSection"

const Index = ({ lang, location }) => {
  return (
    <div>
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
