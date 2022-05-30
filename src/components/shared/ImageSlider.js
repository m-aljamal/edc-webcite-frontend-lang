import React from "react"
import Slider from "react-slick"

export default function ImageSlider({ children, noArrow, showDots, options }) {
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: !noArrow && true,
    ...options,
  }
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
