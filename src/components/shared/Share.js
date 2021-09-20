import React from "react"
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share"
export default function Share({ info }) {
  return (
    <ul className="flex gap-1 justify-end    ">
      <li
        onClick={() => {
          navigator.clipboard.writeText(info)
        }}
        className="bg-gray-700 mb-1 cursor-pointer text-white w-7 h-7 rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </li>
      <li>
        <FacebookShareButton url={info}>
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </li>
      <li>
        <WhatsappShareButton
          url={info}
          // title={`مشروع عقل
          //         لمتابعة المزيد`}
        >
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
      </li>
      <li>
        <TwitterShareButton url={info}>
          <TwitterIcon size={30} round />
        </TwitterShareButton>
      </li>
      {/* <li>
        <TelegramShareButton url={info}>
          <TelegramIcon size={30} round />
        </TelegramShareButton>
      </li> */}
    </ul>
  )
}
