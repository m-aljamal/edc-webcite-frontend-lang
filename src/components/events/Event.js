import React from "react"
import calenderIcon from "../../assist/icons/events/calendar.svg"
import projectIcon from "../../assist/icons/events/project.svg"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Event = ({ data, homePage, lang }) => {
  const { mainImage, title, location, shortDescription, date } = data.node

  const url = homePage
    ? `events/${data.node.slug.current}`
    : data.node.slug.current
  return (
    <div className="">
      <Link to={url}>
        <div className="">
          <Img
            fluid={mainImage.asset.fluid}
            className="rounded-md"
            alt={title[lang]}
          />
        </div>
      </Link>
      <div className="flex justify-between items-center mt-3 border-b pb-3 ">
        <div className="flex items-center gap-2">
          <img src={projectIcon} className=" w-5" alt={title[lang]} />
          <p>{location[lang]}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={calenderIcon} className="w-5" alt={title[lang]} />
          <p>{date}</p>
        </div>
      </div>
      <Link to={url}>
        <h3 className="mt-2 text-mainblue font-bold text-lg hover:underline cursor-pointer">
          {title[lang]}:
        </h3>
      </Link>
      <p className="mt-2 leading-6 text-lg ">{shortDescription[lang]}</p>
    </div>
  )
}

export default Event
