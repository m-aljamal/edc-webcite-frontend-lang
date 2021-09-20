import React from "react"
import calenderIcon from "../../assist/icons/events/calendar.svg"
import projectIcon from "../../assist/icons/events/project.svg"
import PortableText from "../shared/PortableText"
import Img from "gatsby-image"
import VideoContainer from "../shared/VideoContainer"
import Share from "../shared/Share"
const SingleEvent = ({ data, lang }) => {
  return (
    <div className="my-10 container">
      <Img
        fluid={data.panner.asset.fluid}
        className=" rounded-md h-96 md:h-full"
        alt={data.title}
        objectFit="cover"
      />

      <div className="">
        <div className="flex flex-col md:flex-row  justify-between border-b items-center">
          <Place url={projectIcon} text={data.location[lang]} />
          <Share info="https://edcommission.com/events/%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%B5%D9%8A%D9%81%D9%8A-%D9%84%D9%84%D8%B9%D8%A7%D9%85-2021" />
          <Place url={calenderIcon} text={data.date} />
        </div>

        <h2 className="text-3xl text-center my-8 text-mainblue font-semibold">
          {data.title[lang]}
        </h2>

        {data._rawParagraph1 && (
          <PortableText blocks={data._rawParagraph1[lang]} />
        )}

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-8">
          {data.imageOfText?.map(img => (
            <Img
              fluid={img.asset.fluid}
              className=" rounded-md"
              alt={data.title}
            />
          ))}
        </div>
        <div className="md:w-1/2 mx-auto">
          {data.video && (
            <VideoContainer
              src={data.video}
              videoPoster={data?.videoPoster?.asset?.url}
            />
          )}
        </div>

        {data._rawParagraph2 && (
          <PortableText blocks={data._rawParagraph2[lang]} />
        )}
      </div>
    </div>
  )
}

export default SingleEvent

const Place = ({ url, text }) => {
  return (
    <div className="flex items-center my-4 gap-5 ">
      <img src={url} className="w-8" alt={text} />
      <p>{text}</p>
    </div>
  )
}
