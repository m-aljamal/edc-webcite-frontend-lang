import React from "react"
import Title from "../shared/Title"
const Loaction = () => {
  return (
    <div className="my-10">
      <Title text="موقعنا:" />
      <div className="  container ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4229596280225!2d37.13010501510709!3d36.71240198033706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fd14b3888bf3b%3A0x3c4e81e098a827ed!2z2YfZitim2Kkg2KrYt9mI2YrYsSDYp9mE2KrYudmE2YrZhQ!5e0!3m2!1sen!2str!4v1654066532358!5m2!1sen!2str"
          width="100%"
          title="EDC_location"
          height="350"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  )
}

export default Loaction
