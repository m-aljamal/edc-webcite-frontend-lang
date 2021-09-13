import React from "react"

export default function TextHolder({ children }) {
  return (
    <p  className=" shadow-lg container bg-mainblue text-white p-4 text-lg  rounded-md h-32">
      {children}
    </p>
  )
}
