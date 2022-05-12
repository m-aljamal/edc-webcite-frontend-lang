import React from "react"
import Title from "../shared/Title"
const Loaction = () => {
  return (
    <div className='my-10'>
      <Title text="موقعنا:" />
      <div className="  container ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6396.871502089596!2d37.132061000000014!3d36.7120947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1652337861180!5m2!1sen!2str"
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


