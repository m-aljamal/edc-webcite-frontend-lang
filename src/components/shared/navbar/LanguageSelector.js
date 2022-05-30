import React from "react"
import { navigate } from "gatsby"
const LanguageSelector = ({ location, lang }) => {
  const setArabic = () => {
    navigate(location.pathname.replace("/" + lang + "/", "/"))
  }

  const setEnglish = () => {
    navigate(`/en${location.pathname}`)
  }

  const languges = [
    {
      name: "English",
      change: setEnglish,
      id: 1,
    },

    {
      name: "عربي",
      change: setArabic,
      id: 3,
    },
  ]
  return (
    <div className=" px-10 lg:px-0 py-2 lg:py-0   ">
      {lang === "ar" ? (
        <div
          onClick={languges[0].change}
          className=" cursor-pointer font-medium"
        >
          <span className=" text-lg text-gray-800 font-bold">{languges[0].name}</span>
        </div>
      ) : (
        <div
          onClick={languges[1].change}
          className=" cursor-pointer font-medium"
        >
          <span className=" text-lg text-gray-800 font-bold">{languges[1].name}</span>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
