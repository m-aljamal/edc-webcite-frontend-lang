import React from "react"
const Title_no_back = ({ title }) => {
  return (
    <div className="flex justify-center">
      <h3 className="text-3xl text-mainblue font-bold border-b w-[fit-content]  pb-2 border-mainblue">
        {title}
      </h3>
    </div>
  )
}

export default Title_no_back
