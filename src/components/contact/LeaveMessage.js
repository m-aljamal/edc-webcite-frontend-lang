import React from "react"
import styled from "styled-components"
import Title from "../shared/Title"
import Form from "./Form"
const LeaveMessage = () => {
  const words = {
    ar: {
      sendButtonMess: "أرسل الرسالة",

      sendTextMess: "نص الرسالة",
    },
    en: {
      sendButtonMess: "Send message",

      sendTextMess: "Your message",
    },
    tr: {
      sendButtonMess: "mesaj gönder",

      sendTextMess: "Mesajın metni",
    },
  }
  const { sendButtonMess, sendTextMess } = words["ar"]
  return (
    <Wraper>
      <Title text="اترك لنا رسالة:" />
      <div className="forms container">
        <Form text={sendTextMess} buttonText={sendButtonMess} lang="ar" />
      </div>
    </Wraper>
  )
}

export default LeaveMessage

const Wraper = styled.section`
  .forms {
    padding: 20px 0 75px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
  }
  @media (max-width: 650px) {
    .forms {
      grid-template-columns: 1fr;
    }
    .complaint {
      display: none;
    }
  }
`
