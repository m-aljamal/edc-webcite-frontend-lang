import React from "react"
import Title from "../shared/Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const WorkShops = ({ lang }) => {
  const { images } = useStaticQuery(graphql`
    {
      images: allSanityWorkShops {
        nodes {
          image {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  const words = {
    ar: {
      title: `
            المؤتمرات وورشات العمل:
            `,
      body: `
            تعمل هيئة تطوير التعليم على عقد مؤتمرات سنويّة، لمناقشة تداعيات العمليّة التعليميّة وبحث أفضل الطرق
لدفع تلك العمليّة إلى الأمام.  
            `,
    },
    en: {
      title: `Conferences and Workshops:`,
      body: `Education Development Commission holds annual conferences to discuss the implications of the educational process and the best ways to advance this process.`,
    },
  }
  const { title, body } = words[lang]
  return (
    <div className="container">
      <Title title={title} />
      <div className="mt-8">
        <p className="md:text-xl text-lg text-gray-800">{body}</p>
        <div className="grid md:grid-cols-4  gap-5 my-8">
          {images.nodes.map((image, i) => (
            <Img
              fluid={image.image.asset.fluid}
              alt="img1"
              key={i}
              className="rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkShops
