import React from "react"
const Hero = () => {
  return (
    <div className="mt-4">
      <video
        loop
        muted
        autoPlay
        className="object-contain md:object-fill w-full h-[600px]"
      >
        <source
          src="https://res.cloudinary.com/dqoung1wz/video/upload/v1629796350/Video/WhatsApp_Video_2021-08-15_at_11.38.32_AM_m8ufpz.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  )
}
export default Hero
