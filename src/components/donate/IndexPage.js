import React, { useState, useEffect } from "react"
import Title from "../shared/Title"
import eurIcon from "../../assist/icons/donate/eurIcon.svg"
import usdIcon from "../../assist/icons/donate/usdIcon.svg"
import tlIcon from "../../assist/icons/donate/tlIcon.svg"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../shared/Background"
import Share from "../shared/Share"
const IndexPage = ({ lang }) => {
  const { img } = useStaticQuery(graphql`
    {
      img: sanityOtherHeroImgs(title: { eq: "bankBackground" }) {
        title
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const text = {
    ar: {
      title: `كونوا معهم وساهموا في تعليمهم وبناء مستقبلهم`,
      header: "حساب البنك:",
    },
    en: {
      title: `
    Be with them and contribute to their education and building their future.
    `,

      header: "Bank accounts:",
    },
  }
  const banckInfo = [
    {
      title: "Bank Name:",
      info: "Ziraat Bank",
    },
    {
      title: "Bank Address:",
      info: "İslambey, Cumhuriyet Cd. No:170, 79001 Merkez/Kilis- Turkey",
    },
    { title: "Name of account:", info: "EĞİTİM GELİŞTİRME DERNEĞİ" },
    {
      title: "Organization Address:",
      info: `
      DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS
     
      `,
    },
    { title: "zip code:", info: `79000` },
    { title: "Swift code:", info: `TCZBTR2AXXX` },
  ]

  const numbers = [
    {
      number: "77591825-5001",
      iban: "TR84 0001 0000 4377 5918 2550 01",
      img: tlIcon,
    },
    {
      number: "77591825-5002",
      iban: "TR57 0001 0000 4377 5918 2550 02",
      img: usdIcon,
    },
    {
      number: "77591825-5003",
      iban: "TR30 0001 0000 4377 5918 2550 03",
      img: eurIcon,
    },
  ]

  const shareBanckInfo = `
Bank Name: Ziraat Bankası

 Bank Address:
İslambey, Cumhuriyet Cd. No:170, 79001 Merkez/Kilis- Turkey

Name of account:
EĞİTİM GELİŞTİRME DERNEĞİ

Organization Address:
TURKEY - KILIS - OYLUM MAHALLESI GAZIANTEP YOLU (SÖĞÜTLÜDERE CIVARI) KÜME EVLERI HAYAT VILLARI NO: 5V

zip code:
79000

Swift code:
TCZBTR2AXXX

Turkish lira currency:

Account number:77591825-5001
IBAN:TR84 0001 0000 4377 5918 2550 01

Dollar currency:

Account number:77591825-5002
IBAN:TR57 0001 0000 4377 5918 2550 02

Euro currency :

Account number:77591825-5003
IBAN:TR30 0001 0000 4377 5918 2550 03

 `
  const { title, header } = text[lang]
  return (
    <>
      <Title title={header} />
      <div className="mt-12 font-bold">
        <div className=" relative">
          <Background image={img.image.asset.fluid}>
            <div className=" bg-gray-500 opacity-40 absolute top-0 bottom-0 right-0 left-0"></div>
            <div className="flex items-center justify-center container">
              <h2 className="py-60 z-20 text-white text-3xl font-bold ">
                {title}
              </h2>
            </div>
          </Background>
        </div>

        <div className="container my-8" style={{ direction: "ltr" }}>
          <Share info={shareBanckInfo} />
          {banckInfo.map(b => (
            <Info title={b.title} pargraph={b.info} lang={lang} />
          ))}
          {numbers.map(n => (
            <BankInfo img={n.img} number={n.number} iban={n.iban} lang={lang} />
          ))}
        </div>
      </div>
    </>
  )
}

export default IndexPage

const Info = ({ title, pargraph, lang }) => {
  return (
    <div className="py-2 flex gap-6 items-center justify-between shadow-lg p-3 border-2 my-4 rounded-md">
      <div>
        <h2 className="text-mainblue  text-2xl">{title}</h2>
        <div className="flex gap-10 ">
          <p className="text-xl text-gray-800"> {pargraph}</p>
          {/* <CopyButton lang={lang} copyText={pargraph} /> */}
        </div>
      </div>
    </div>
  )
}
// const CopyButton = ({ copyText, lang }) => {
//   const text = {
//     ar: {
//       copy: "نسخ",
//       confirm: "تم النسخ",
//     },
//     en: {
//       copy: "copy",
//       confirm: "copied",
//     },
//   }
//   const { copy, confirm } = text[lang]
//   const [isCopy, setIsCopy] = useState(copy)
//   useEffect(() => {
//     const time = setTimeout(() => setIsCopy(copy), 1000)
//     return () => clearTimeout(time)
//   }, [isCopy, setIsCopy])
//   return (
//     <button
//       onClick={() => {
//         navigator.clipboard.writeText(copyText)
//         setIsCopy(confirm)
//       }}
//       className="focus:outline-none text-gray-500 text-base"
//     >
//       {isCopy}
//     </button>
//   )
// }
const BankInfo = ({ img, number, iban, lang }) => {
  return (
    <div className="flex gap-6 py-4 items-center justify-between shadow-lg  border my-4 p-3 rounded-md">
      <div className="md:flex gap-6 items-center mt-5">
        <img src={img} alt="currency" className="w-20 " />
        <div className="text-xl">
          <h3 className="text-mainblue  ">
            Account number:
            <span>
              <span className="text-gray-800 mr-10">{number}</span>
              {/* <CopyButton copyText={number} lang={lang} /> */}
            </span>
          </h3>
          <h3 className="text-mainblue mt-2">
            IBAN:
            <span>
              <span className="text-gray-800 mr-10">{iban}</span>
              {/* <CopyButton copyText={iban} lang={lang} /> */}
            </span>
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  )
}
