import React from "react"
const AllRights = ({ lang }) => {
  const word = {
    ar: {
      text: " ﺟﻤﻴﻊ اﻟﺤﻘﻮق ﻣﺤﻔﻮﻇﺔ",
      name: " هيئة تطوير التعليم ",
    },
    en: {
      text: "All right reserved",
      name: "Education Development Commission",
    },
  }
  const { text, name } = word[lang]
  return (
    <h4 className="bg-mainblue text-white text-lg text-center py-4">
      {text}
      {` ${new Date().getFullYear()}`} &copy;
      {name}
    </h4>
  )
}

export default AllRights
