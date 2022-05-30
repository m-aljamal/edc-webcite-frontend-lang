import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OurMessage = ({ lang }) => {
  const { slides } = useStaticQuery(graphql`
    {
      slides: sanityImagesSlide(title: { eq: "ourMessagePage" }) {
        aboutPageSlide {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  const data = [
    {
      text: {
        ar: `
        عقد مؤتمرات تعليميّة ووُرش عمل لنشر الوعي بأهميّة هذه المشاريع وتطويرها.
  
          `,
        en: `
        Holding educational conferences and workshops to spread awareness of the importance and development of these projects.
        `,
      },

      img: slides.aboutPageSlide[0].asset.fluid,
      id: 1,
    },
    {
      text: {
        ar: `
        إنتاج أوراقِ عملٍ، والمساهمةُ في أبحاثٍ متعلّقة بتطوير التعليم في أماكن
        النزاعات والحروب.
        `,
        en: `
        Compiling working papers and contributing to research related to the development of education in places of conflict and war.
        `,
      },

      img: slides.aboutPageSlide[1].asset.fluid,
      id: 2,
    },
    {
      text: {
        ar: `
        تدريب وتطوير المدرّسين العاملين في أماكن النّزاع، ليتمكّنوا من تدريس
        المناهج الخاصّة بطرقٍ إبداعيّة.
        `,
        en: `
        Training and developing teachers working in conflict areas, to be able to teach the special curricula in creative ways.
        `,
      },

      img: slides.aboutPageSlide[2].asset.fluid,
      id: 3,
    },
    {
      text: {
        ar: `
        وفي مسيرتنا نحو رؤيتنا الاستراتيجيّة ولتحقيق رسالتنا على المستويات
        كافّة، فإنّنا نحتكم إلى منظومة قيمنا المشتركة التي ستبقى دومًا مرجعيّتنا
        الأولى والأساسيّة.
        `,
        en: `
        In our march towards our strategic vision and to achieve our mission at all levels, we appeal to our common values system, which will always remain our first and primary reference.
        `,
      },

      img: slides.aboutPageSlide[3].asset.fluid,
      id: 4,
    },
    {
      text: {
        ar: `
        كما تسعى هيئة تطوير التعليم إلى توفير مناخ تعليميّ متّزن من حيث الوسائل
        التعليميّة والأدوات اللازمة للطلاب؛ لتنمية مهارات الطلاب العلميّة
        والذهنيّة والاجتماعيّة والبدنيّة وعلى يد كفاءات بكافّة التخصّصات حسب
        المناهج السوريّة المعتمدة بالإضافة إلى المناهج الداعمة الأخرى، ويتمّ منح
        الطلاب شهادات معتمدة ومصدقة من وزارة التربية والتعليم.
        `,
        en: `
        Education Development Commission also seeks to provide a balanced educational climate in terms of educational aids and necessary tools for students to develop students’ scientific, mental, social, and physical skills, by competencies in all majors, according to the approved Syrian curricula in addition to other supporting curricula. Students are granted certificates approved and certified by the Ministry of Education.
        `,
      },

      img: slides.aboutPageSlide[4].asset.fluid,
      id: 5,
    },
    {
      text: {
        ar: `
        وتهدف هيئة تطوير التعليم إلى بناء شخصيّة المتعلم المتوازنة بجوانبها
        الوجدانيّة والعلميّة والفكريّة والاجتماعيّة والنفسيّة والجسديّة عن طريق
        اكتساب المعارف والمهارات والاتّجاهات والقيم الخلقيّة التي تمكّنه من
        تطوير نفسه واستخدام التقنيات بشكل إيجابيّ وفق مستواه العمريّ وتوظيفها في
        المواقف الحياتية وتهيئته للمرحلة الدراسيّة التالية، ويتحقق ذلك من خلال
        تحقيق الأهداف العامّة.
        `,
        en: `
        Education Development Commission aims to build the learner’s balanced personality with its emotional, scientific, intellectual, social, psychological, and physical aspects by acquiring knowledge, skills, attitudes, and moral values that enable him to develop himself and use techniques positively according to his age level and employ them in life situations and prepare him for the next academic stage, and this is achieved by achieving the general goals.
        `,
      },

      img: slides.aboutPageSlide[5].asset.fluid,
      id: 6,
    },
    {
      text: {
        ar: `
        التعاون مع خبراء في مجال التّعليم وتطوير المناهج، داخلَ العالم العربيّ
        وخارجَه.
        `,
        en: `
        Cooperate with experts in the field of education and curriculum development, inside and outside the Arab world.
        `,
      },

      img: slides.aboutPageSlide[6].asset.fluid,
      id: 7,
    },
    {
      text: {
        ar: `
        التعاون مع المنظّمات المحليّة والدوليّة بالإضافة إلى الجمعيّات الخيريّة
        في العمل على مشاريع تعليميّة محدّدة.
        `,
        en: `
        Cooperate with local and international organizations as well as charitable societies in working on specific educational projects.
        `,
      },

      img: slides.aboutPageSlide[7].asset.fluid,
      id: 8,
    },
  ]
  return (
    <div className="container my-8">
      <div>
        <h2 className="text-mainblue text-2xl font-semibold text-center">
          {lang === "ar" ? "رسالتنا" : "Our Message"}
        </h2>
        <div>
          {data.map(item => (
            <div
              key={item.id}
              className={`md:flex gap-5 my-20  ${
                item.id % 2 === 0 ? "flex-row-reverse" : ""
              }  `}
            >
              <Img fluid={item.img} className=" md:w-1/2 rounded-md" />
              <p className=" md:w-2/3 text-xl text-gray-700 text-justify leading-10 ">
                {item.text[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMessage
