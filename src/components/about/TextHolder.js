import React from "react"

export default function TextHolder({ children }) {
  return (
    <p className=" shadow-lg container bg-mainblue text-white flex items-center text-lg rounded-md h-32">
      {children}
    </p>
  )
}
