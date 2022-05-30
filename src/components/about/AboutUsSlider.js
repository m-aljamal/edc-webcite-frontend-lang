import React from "react"
import Img from "gatsby-image"
import ImageSlider from "../shared/ImageSlider"
import { Link } from "gatsby"

export default function AboutUsSlider({ slides, lang }) {
  const buttons = {
    ar: {
      1: "من نحن",
      2: "رؤيتنا",
      3: "رسالتنا",
    },
    en: {
      1: "About Us",
      2: "Our Vision",
      3: "Our Message",
    },
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col-reverse md:flex-row  items-center">
        <div className="md:w-1/4 w-full container  ">
          <Link
            to={lang === "ar" ? "/who_we_are" : "/" + lang + "/who_we_are"}
            className="w-full my-4 py-2 rounded-md outline-none bg-mainblue text-white flex justify-center"
          >
            {buttons[lang][1]}
          </Link>
          <Link
            to={lang === "ar" ? "/our_vision" : "/" + lang + "/our_vision"}
            className="w-full my-4 py-2 rounded-md outline-none bg-mainblue text-white flex justify-center"
          >
            {buttons[lang][2]}
          </Link>
          <Link
            to={lang === "ar" ? "/our_message" : "/" + lang + "/our_message"}
            className="w-full my-4 py-2 rounded-md outline-none bg-mainblue text-white flex justify-center"
          >
            {buttons[lang][3]}
          </Link>
        </div>
        <div className="md:w-3/4  w-full ">
          <ImageSlider
            width="100%"
            noArrow
            options={{
              autoplay: true,
              autoplaySpeed: 5000,
              cssEase: "linear",
            }}
          >
            {slides.aboutPageSlide.map(i => (
              <Img fluid={i.asset.fluid} className="rounded-lg" />
            ))}
          </ImageSlider>
        </div>
      </div>
    </div>
  )
}
