import React from "react"
const Hero = ({ lang }) => {
  const arabicUrl =
    "https://res.cloudinary.com/dqoung1wz/video/upload/v1634197023/Video/homeVideo-arabic_rf3087.mp4"
  const englishUrl =
    "https://res.cloudinary.com/dqoung1wz/video/upload/v1634197021/Video/homeVideo-english_n3c4vd.mp4"
  return (
    <div className="mt-4 container">
      <video
        loop
        muted
        autoPlay
        className="object-contain md:object-fill w-full lg:h-[600px]"
      >
        <source
          src={lang === "ar" ? arabicUrl : englishUrl}
          type="video/mp4"
        ></source>
      </video>
    </div>
  )
}
export default Hero
