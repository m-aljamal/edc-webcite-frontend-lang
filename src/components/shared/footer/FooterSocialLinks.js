import React from "react"
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa"
import { socialLinksUrl } from "../../../constant/socialLink"
const FooterSocialLinks = () => {
  return (
    <div className="flex gap-5 justify-center">
      <a href={socialLinksUrl.facebook} target="_blank" rel="noreferrer">
        <FaFacebookF className="text-2xl hover:text-blue-600 text-blue-500 " />
      </a>
      <a target="_blank" rel="noreferrer" href={socialLinksUrl.twitter}>
        <FaTwitter className="text-2xl hover:text-blue-600 text-blue-500 " />
      </a>
      <a href={socialLinksUrl.youtube} target="_blank" rel="noreferrer">
        <FaYoutube className="text-2xl hover:text-red-600 text-red-500 " />
      </a>
      <a target="_blank" rel="noreferrer" href={socialLinksUrl.instagram}>
        <FaInstagram className="text-2xl hover:text-pink-600 text-pink-500 " />
      </a>
    </div>
  )
}

export default FooterSocialLinks
