import React from "react"
import BasePortableText from "@sanity/block-content-to-react"

const PortableText = ({ blocks }) => (
  <div className="mt-8 text-xl leading-8 text-justify">
    <BasePortableText
      blocks={blocks}
      projectId={process.env.GATSBY_SANITY_PROJECT_ID}
      dataset={process.env.GATSBY_SANITY_DATASET}
      className="text-gray-800"
    />
  </div>
)

export default PortableText
