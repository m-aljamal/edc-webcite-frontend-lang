import React from "react"
const style =
  "border-2 rounded-md border-gray-300 focus:outline-none focus:ring w-full my-3 p-4"
const Form = ({ lang }) => {
  const words = {
    ar: {
      emailText: "الإيميل",
      name: "الاسم",
      phone: "الهاتف",
      buttonText: "أرسل",
      text: "نص الرسالة",
    },
    en: {
      emailText: "Email",
      name: "Name",
      phone: "Phone",
      buttonText: "Send",
      text: "Message",
    },
  }
  const { emailText, name, phone, text, buttonText } = words[lang]

  return (
    <form
      action="https://formspree.io/f/xleobegb"
      method="POST"
      className="container mt-8"
    >
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <Input type="email" name="email" placeholder={emailText} />
        </div>
        <div>
          <Input type="text" name="name" placeholder={name} />
        </div>
        <div>
          <Input type="text" name="phoneNumber" placeholder={phone} />
        </div>
      </div>
      <div>
        <textarea placeholder={text} name="messageBody" className={style} />
      </div>
      <div className="button">
        <button className="border bg-mainblue text-white px-4 py-2 rounded-md">
          {buttonText}
        </button>
      </div>
    </form>
  )
}

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
    />
  )
}
export default Form
