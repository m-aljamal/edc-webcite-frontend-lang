import React from "react"
import Title from "../shared/Title"
import styled from "styled-components"
const Loaction = () => {
  return (
    <LocationStyle>
      <Title text="موقعنا:" />
      <div className="  container ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25592.705996655208!2d37.184088725646376!3d36.6964171961436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7cb17a445f9b56b!2sHayat%20Villalar%C4%B1!5e0!3m2!1sen!2str!4v1602675549895!5m2!1sen!2str"
          width="100%"
          title="EDC_location"
          height="350"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
        ></iframe>
      </div>
    </LocationStyle>
  )
}

export default Loaction

const LocationStyle = styled.section`
  .container {
    margin: 4rem auto;
  }
`
