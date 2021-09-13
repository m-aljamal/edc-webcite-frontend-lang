import React from "react"
import BasePortableText from "@sanity/block-content-to-react"

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    projectId={process.env.GATSBY_SANITY_PROJECT_ID}
    dataset={process.env.GATSBY_SANITY_DATASET}
  />
)

export default PortableText
