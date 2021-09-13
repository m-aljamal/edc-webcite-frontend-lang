import React from "react"
import styled from "styled-components"
const Form = ({ text, buttonText, lang }) => {
  const words = {
    ar: {
      emailText: "الإيميل",
      name: "الاسم",
      phone: "الهاتف",
    },
    en: {
      emailText: "Email",
      name: "Name",
      phone: "Phone",
    },
    tr: {
      emailText: "email",
      name: "isim",
      phone: "Telefon",
    },
  }
  const { emailText, name, phone } = words[lang]
  return (
    <Wraper>
      <form
        action="https://formspree.io/f/xleobegb"
        method="POST"
        className={` ${lang !== "ar" && "langFormStyle"}  `}
      >
        <div className="inputsContainer">
          <div>
            <input type="email" name="email" placeholder={emailText} />
          </div>
          <div>
            <input type="text" neme="name" placeholder={name} />
          </div>
          <div>
            <input type="text" name="phoneNumber" placeholder={phone} />
          </div>
        </div>
        <div>
          <textarea placeholder={text} name="messageBody" />
        </div>
        <div className="button">
          <button>{buttonText}</button>
        </div>
      </form>
    </Wraper>
  )
}

export default Form
const Wraper = styled.section`
  text-align: center;
  input,
  textarea {
    border-radius: 10px;
    margin-top: 20px;
  }
  textarea {
    height: 160px;
  }
  input,
  textarea,
  button {
    width: 90%;
    background-color: #e9eeed;
    font-family: "Cairo", sans-serif;
    border: 0;
    font-size: 1.5rem;
    padding: 15px 30px;

    &:focus {
      outline: none !important;
      box-shadow: 0 0 10px var(--darkGray);
    }
  }
  button {
    color: white;
    background: var(--blue);
    padding: 10px 15px;
  }
`
