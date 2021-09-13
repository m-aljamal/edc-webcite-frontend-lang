import React from "react"
import styled from "styled-components"
import Title_no_back from "../shared/Title_no_back"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const WorkShops = () => {
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
  }
  const { title, body } = words["ar"]
  return (
    <Wraper>
      <Title_no_back title={title} width="320px" workShops />
      <div className="container">
        <p className="body">{body}</p>
        <div className="imagesContainer">
          {images.nodes.map((image, i) => (
            <Img fluid={image.image.asset.fluid} alt="img1" key={i} />
          ))}
        </div>
      </div>
    </Wraper>
  )
}

export default WorkShops

const Wraper = styled.section`
  padding: 30px 0 0 0;
  .body {
    padding-top: 20px;
    text-align: center;
    font-size: 2rem;
    color: var(--darkGray);
  }
  .imagesContainer {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
  @media (max-width: 800px) {
    .imagesContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 450px) {
    .imagesContainer {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 600px) {
    .body {
      font-size: 1.6rem;
    }
  }
`
