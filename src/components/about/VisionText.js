import React from "react"
import TextHolder from "./TextHolder"

export default function VisionText({ lang }) {
  return (
    <TextHolder>
      {lang === "ar"
        ? ` تلتزم هيئة تطوير التعليم بتقديم تعليم شامل عالي الجودة للطلاب في أماكن
    الأزمات.`
        : ` Education Development Commission is committed to provide high-quality inclusive education to students in crisis places`}
    </TextHolder>
  )
}
