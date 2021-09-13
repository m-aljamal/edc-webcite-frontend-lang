import React from "react"
import { navigate } from "gatsby"
const LanguageSelector = ({ location, lang }) => {
  const setArabic = () => {
    navigate(location.pathname.replace("/" + lang + "/", "/"))
  }

  const setEnglish = () => {
    if (lang === "ar") {
      navigate(`/en${location.pathname}`)
    } else if (lang === "tr") {
      navigate(location.pathname.replace("/tr", `/en`))
    }
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
    <li className="   ">
      {lang === "ar" ? (
        <div
          onClick={languges[0].change}
          className=" cursor-pointer font-medium"
        >
          <span className=" text-lg">{languges[0].name}</span>
        </div>
      ) : (
        <div
          onClick={languges[1].change}
          className=" cursor-pointer font-medium"
        >
          <span className=" text-lg">
            <span className=" text-lg">{languges[1].name}</span>
          </span>
        </div>
      )}
    </li>
  )
}

export default LanguageSelector
