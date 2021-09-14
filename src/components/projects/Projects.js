import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Title from "../shared/Title"

const Projects = ({ lang }) => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allSanityProjects {
        totalCount
        nodes {
          slug {
            current
          }
          videoPoster
          id
          video
          projectName {
            ar
            en
          }
          shortDescription {
            ar
            en
          }
        }
      }
    }
  `)

  return (
    <div className="py-12 container ">
      <Title title="مشاريعنا" />
      <div className=" mt-8 ">
        {projects.nodes.map((pro, i) => (
          <div className="flex ">
            {i % 2 === 0 ? (
              <>
                <InformationContainer
                  lang={lang}
                  projectName={pro.projectName[lang]}
                  shortDescription={pro.shortDescription[lang]}
                  link={pro.slug.current}
                />
                <VideoContainer poster={pro.videoPoster} videoSrc={pro.video} />
              </>
            ) : (
              <>
                <VideoContainer poster={pro.videoPoster} videoSrc={pro.video} />
                <InformationContainer
                  lang={lang}
                  link={pro.slug.current}
                  projectName={pro.projectName[lang]}
                  shortDescription={pro.shortDescription[lang]}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

const VideoContainer = ({ poster, videoSrc }) => {
  return (
    <div className="w-1/2 ">
      <video controls poster={poster} className="rounded-md">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}

const InformationContainer = ({
  projectName,
  shortDescription,
  link,
  lang,
}) => {
  return (
    <div className="p-4 w-1/2   border-gray-500 border-4  rounded-md flex items-center justify-center">
      <div className="">
        <h3 className="text-mainblue font-bold text-2xl text-center">
          {projectName}
        </h3>
        <p className="mb-5 mt-5 text-xl ">{shortDescription}</p>
        <div className="text-center">
          <Link to={link}>
            <span className="border px-4 py-2 rounded-md bg-mainblue text-white">
              {lang === "ar" ? "متابعة المزيد" : "See more"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
