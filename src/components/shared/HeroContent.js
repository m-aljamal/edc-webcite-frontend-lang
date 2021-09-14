import React from "react"
import HeroBackground from "../shared/HeroBackground"
export default function HeroContent({ fluid, heroTitle, heroBody, lang }) {
  return (
    <div>
      <HeroBackground image={fluid}>
        <div className=" bg-mainblue opacity-40 absolute top-0 bottom-0 right-0 left-0 "></div>
        <div
          className={`flex absolute ${
            lang === "ar" ? "right-24" : "left-24"
          }   top-0 bottom-0 items-center`}
        >
          <div className="py-4 text-white font-bold ">
            <h3 className="text-gray-700 text-3xl w-2/5 ">{heroTitle}</h3>
            <p className="w-2/5 mt-5 text-2xl">{heroBody}</p>
          </div>
        </div>
      </HeroBackground>
    </div>
  )
}
