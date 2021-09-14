import React from "react"
import Title from "../shared/Title"
import Form from "./Form"
const LeaveMessage = ({ lang }) => {
  return (
    <div>
      <Title title={lang === "ar" ? "اترك لنا رسالة:" : "Leave a message:"} />
      <Form lang={lang} />
    </div>
  )
}

export default LeaveMessage
