import React, { useState } from "react"
import Img from "gatsby-image"
import ImageSlider from "../shared/ImageSlider"
import AboutText from "./AboutText"
import VisionText from "./VisionText"
import MessageText from "./MessageText"

export default function AboutUsSlider({ slides, lang }) {
  const [buttonClick, setButtonClick] = useState({
    buttons: [
      { value: "aboutUs", ar: "من نحن", en: "About EDC" },
      { value: "ourVision", ar: "رؤيتنا", en: "Our vision" },
      { value: "ourMessage", ar: "رسالتنا", en: "Our Message" },
    ],
    activeIndex: 0,
  })

  return (
    <div className="mt-12">
      <div className="flex flex-col-reverse md:flex-row  items-center">
        <div className="md:w-1/4 w-full container  ">
          {buttonClick.buttons.map((b, i) => (
            <button
              className={`${
                i === buttonClick.activeIndex
                  ? "bg-gray-800 text-white"
                  : "bg-mainblue text-white"
              } block w-full my-4 py-2 rounded-md outline-none `}
              onClick={() => setButtonClick({ ...buttonClick, activeIndex: i })}
              key={b[lang]}
            >
              {b[lang]}
            </button>
          ))}
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
            {slides.nodes[0].aboutPageSlide.map(i => (
              <Img fluid={i.asset.fluid} />
            ))}
          </ImageSlider>
        </div>
      </div>
      <div className={` ${lang === "ar" ? "text-right" : "text-left"} container`}>
        {buttonClick.activeIndex === 0 ? (
          <AboutText lang={lang} />
        ) : buttonClick.activeIndex === 1 ? (
          <VisionText lang={lang} />
        ) : (
          <MessageText lang={lang} />
        )}
      </div>
    </div>
  )
}
