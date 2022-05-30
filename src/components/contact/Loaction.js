import React from "react"
import Title from "../shared/Title"
const Loaction = () => {
  return (
    <div className="my-10">
      <Title text="موقعنا:" />
      <div className="  container ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.2115689049206!2d37.131199358721915!3d36.712397700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fd1e4b45da09d%3A0x83ba18437effb9d9!2zRG_En2FuIEfDvHJlxZ8gUGHFn2EsIE11c3RhZmEgRXJlbiBDZCBObzo0LCA3OTAwMCBLaWxpcyBNZXJrZXovS2lsaXM!5e0!3m2!1sen!2str!4v1653895452107!5m2!1sen!2str"
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
