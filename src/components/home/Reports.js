import React from "react"
import Title from "../shared/Title"
import edc2021 from "../../assist/images/edc2021.jpg"
const Reports = ({ lang }) => {
  return (
    <div className="container py-20">
      <Title title={lang === "ar" ? "التقارير" : "Reports"} />
      <div className="grid grid-cols-3 gap-8 mt-8">
        <a
          className=" shadow-md rounded-md"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1YTSB1qJha0FDiP1dmqta-gcuM60y_Le9/view?usp=sharing"
        >
          <img src={edc2021} className="w-full shadow-md rounded-md " />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1YTSB1qJha0FDiP1dmqta-gcuM60y_Le9/view?usp=sharing"
        >
          <img src={edc2021} className="w-full shadow-md rounded-md" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1YTSB1qJha0FDiP1dmqta-gcuM60y_Le9/view?usp=sharing"
        >
          <img src={edc2021} className="w-full shadow-md rounded-md" />
        </a>
      </div>
    </div>
  )
}

export default Reports
