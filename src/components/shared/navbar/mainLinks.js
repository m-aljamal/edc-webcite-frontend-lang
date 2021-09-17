import React from "react"
import { Link } from "gatsby"
import LanguageSelector from "./LanguageSelector"
export default ({ lang, location, size, visible, showSidebar }) => {
  const mainLinks = [
    {
      id: 1,
      arabicText: "الرئيسية",
      englishText: "Home",
      turkText: "tukish",
      url: "/",
    },
    {
      id: 2,
      arabicText: "من نحن",
      englishText: "About us",
      turkText: "tukish",
      url: "/about",
    },
    {
      id: 3,
      arabicText: "المشاريع",
      englishText: "Projects",
      turkText: "tukish",
      url: "/projects",
    },
    {
      id: 4,
      arabicText: "الفعاليات",
      englishText: "events",
      turkText: "tukish",
      url: "/events",
    },
    {
      id: 5,
      arabicText: "تواصل معنا",
      englishText: "Contact us",
      turkText: "tukish",
      url: "/contact",
    },
  ]
  return (
    <nav>
      <ul className="  lg:flex gap-8 pt-8  ">
        {mainLinks.map(link => (
          <li
            className="text-lg font-medium text-gray-800 hover:bg-gray-200 lg:hover:bg-transparent  px-10 lg:px-0 py-2 lg:py-0"
            key={link.id}
          >
            <Link
              activeClassName="text-mainblue"
              to={lang === "ar" ? link.url : "/" + lang + link.url}
            >
              {lang === "ar" ? link.arabicText : link.englishText}
            </Link>
          </li>
        ))}
        <LanguageSelector lang={lang} location={location} />
      </ul>
    </nav>
  )
}
