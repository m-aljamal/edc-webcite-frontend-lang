import React from "react"
import Img from "gatsby-image"
import CountUp from "react-countup"
const ProjectNumber = ({ data, lang }) => {
  return (
    <div className="items-center">
      <div className="w-1/6  mx-auto">
        <Img fluid={data.image.asset.fluid} />
      </div>
      <div
        className="text-center text-lg leading-10"
        style={{ direction: "ltr" }}
      >
        <CountUp
          separator=" "
          delay={2}
          duration={20}
          end={data.number}
          className="text-2xl text-gray-700 mt-2 justify-center "
        />

        <p className="text-gray-700 ">{data.name[lang]}</p>
      </div>
    </div>
  )
}

export default ProjectNumber
