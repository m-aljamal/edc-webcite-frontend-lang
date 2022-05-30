import React from "react"
import ImageSlider from "../shared/ImageSlider"
import TextHolder from "./TextHolder"

export default function MessageText({ lang }) {
  const text = {
    ar: {
      one: `
      عقد مؤتمرات تعليميّة ووُرش عمل لنشر الوعي بأهميّة هذه المشاريع وتطويرها.

        `,
      two: `
        إنتاج أوراقِ عملٍ، والمساهمةُ في أبحاثٍ متعلّقة بتطوير التعليم في أماكن
        النزاعات والحروب.
        `,
      three: `
        تدريب وتطوير المدرّسين العاملين في أماكن النّزاع، ليتمكّنوا من تدريس
        المناهج الخاصّة بطرقٍ إبداعيّة.
        `,
      four: `
        وفي مسيرتنا نحو رؤيتنا الاستراتيجيّة ولتحقيق رسالتنا على المستويات
        كافّة، فإنّنا نحتكم إلى منظومة قيمنا المشتركة التي ستبقى دومًا مرجعيّتنا
        الأولى والأساسيّة.
        `,
      five: `
        كما تسعى هيئة تطوير التعليم إلى توفير مناخ تعليميّ متّزن من حيث الوسائل
        التعليميّة والأدوات اللازمة للطلاب؛ لتنمية مهارات الطلاب العلميّة
        والذهنيّة والاجتماعيّة والبدنيّة وعلى يد كفاءات بكافّة التخصّصات حسب
        المناهج السوريّة المعتمدة بالإضافة إلى المناهج الداعمة الأخرى، ويتمّ منح
        الطلاب شهادات معتمدة ومصدقة من وزارة التربية والتعليم.
        `,
      six: `
        وتهدف هيئة تطوير التعليم إلى بناء شخصيّة المتعلم المتوازنة بجوانبها
        الوجدانيّة والعلميّة والفكريّة والاجتماعيّة والنفسيّة والجسديّة عن طريق
        اكتساب المعارف والمهارات والاتّجاهات والقيم الخلقيّة التي تمكّنه من
        تطوير نفسه واستخدام التقنيات بشكل إيجابيّ وفق مستواه العمريّ وتوظيفها في
        المواقف الحياتية وتهيئته للمرحلة الدراسيّة التالية، ويتحقق ذلك من خلال
        تحقيق الأهداف العامّة.
        `,
      seven: `
        التعاون مع خبراء في مجال التّعليم وتطوير المناهج، داخلَ العالم العربيّ
        وخارجَه.
        `,
      eight: `
        التعاون مع المنظّمات المحليّة والدوليّة بالإضافة إلى الجمعيّات الخيريّة
        في العمل على مشاريع تعليميّة محدّدة.
        `,
    },
    en: {
      one: `
Holding educational conferences and workshops to spread awareness of the importance and development of these projects.
`,
      two: `
Compiling working papers and contributing to research related to the development of education in places of conflict and war.
`,
      three: `
Training and developing teachers working in conflict areas, to be able to teach the special curricula in creative ways.
`,
      four: `
In our march towards our strategic vision and to achieve our mission at all levels, we appeal to our common values system, which will always remain our first and primary reference.
`,
      five: `
Education Development Commission also seeks to provide a balanced educational climate in terms of educational aids and necessary tools for students to develop students’ scientific, mental, social, and physical skills, by competencies in all majors, according to the approved Syrian curricula in addition to other supporting curricula. Students are granted certificates approved and certified by the Ministry of Education.
`,
      six: `
Education Development Commission aims to build the learner’s balanced personality with its emotional, scientific, intellectual, social, psychological, and physical aspects by acquiring knowledge, skills, attitudes, and moral values that enable him to develop himself and use techniques positively according to his age level and employ them in life situations and prepare him for the next academic stage, and this is achieved by achieving the general goals.
`,
      seven: `
Cooperate with experts in the field of education and curriculum development, inside and outside the Arab world.
`,
      eight: `
Cooperate with local and international organizations as well as charitable societies in working on specific educational projects.
`,
    },
  }
  const { one, two, three, four, five, six, seven, eight } = text[lang]
  return (
    <ImageSlider width="100%" arrowWidth="20px" noArrow showDots>
      <TextHolder>{one}</TextHolder>

      <TextHolder>{two}</TextHolder>

      <TextHolder>{three}</TextHolder>

      <TextHolder>{four}</TextHolder>

      <TextHolder>{five}</TextHolder>
      <TextHolder>{six}</TextHolder>

      <TextHolder>{seven}</TextHolder>

      <TextHolder>{eight}</TextHolder>
    </ImageSlider>
  )
}
