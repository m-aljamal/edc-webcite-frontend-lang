import React from "react"
import Title from "../shared/Title"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import { FiDownload } from "react-icons/fi"
const Reports = ({ lang }) => {
  const { reports } = useStaticQuery(graphql`
    {
      reports: allSanityReports {
        nodes {
          id
          pdf_url
          cover {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container py-20">
      <Title title={lang === "ar" ? "التقارير" : "Reports"} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-12  ">
        {reports.nodes.map(({ cover, id, pdf_url }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={pdf_url}
            key={id}
            className="relative transition duration-150 ease-out hover:scale-110 lg:col-span-full  lg:w-1/3 lg:mx-auto "
          >
            <Img
              fluid={cover.asset.fluid}
              alt="التقرير"
              className="rounded-md shadow-2xl "
            />

            <div className=" absolute bg-gray-400 z-20 top-0 bottom-0 left-0 right-0 rounded-md opacity-0 hover:opacity-75 transition  ">
              <div className=" flex justify-center items-center h-full ">
                <div className=" bg-mainblue rounded-full w-28 h-28 flex justify-center items-center ">
                  <FiDownload className="text-white  text-6xl " />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Reports
