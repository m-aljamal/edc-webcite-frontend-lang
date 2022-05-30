import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../shared/Background"
import Slider from "react-slick"

const Story = ({ story, image, title, lang }) => {
  const { background } = useStaticQuery(graphql`
    {
      background: sanityBanners(title: { eq: "seccessBackground" }) {
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
  return (
    <div className="relative ">
      <Background image={background.image.asset.fluid}>
        <div className="container flex flex-col md:flex-row  items-center gap-2 ">
          <div
            className={`text-right   py-4  ${
              lang === "ar" ? "text-right" : "text-left"
            }`}
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          >
            <h3 className={`text-2xl text-mainblue font-bold  `}>{title}</h3>
            <p className="storyBody text-xl text-gray-800 leading-8 text-justify ">
              {story}
            </p>
          </div>
          <img src={image} alt="studentImage" className="" />
        </div>
      </Background>
    </div>
  )
}

const SuccessStory = ({ lang }) => {
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
    slidesToScroll: 1,
    rtl: false,
    arrows: false,
  }

  const stories = {
    ar: {
      busher: `
    بشر محمود إبراهيم طفل مبدع في الصّف الخامس من روّاد منتدى
    دابق الثقافي... نشأ في أسرة محبّة للعلم، وتربّى على
    الأخلاق الحسنة والمعاملة الجميلة من والديه. رغم ألمه
    الكبير بفقدان والده الذي نالته يد الأسر في سجون النظام
    لعدّة سنوات لم يستسلم بشر وكانت رغبته وطموحه أقوى من آلامه
    حيث تمّيز بين أقرانه في الخطابة وإلقاء الشعر وها هو يتحف
    المركز بأعذب الأصوات شعراً ونثراً. نأمل أن نراه في
    المستقبل شاعراً عظيماً وخطيباً فقيهاً، ويكون بذلك منارةً
    لجيله ونبراساً يرتقي وينهض بمن حوله بالعلم والأدب.
    `,
      muhammad: `
    محمد رجب البدوي هو طالب في الصف الخامس من مدينة الأتارب
    يمتلك حسًّا رفيعًا وشخصيّةً قويّةً وإحساسًا مرهفًا، استشهد
    والده في هذه الحرب الظالمة على يد آلة غدر النظام السوريّ
    وحلفائه، لكنّ ذلك لم يثنه عن مواصلة تعلّمه. قرّر محمّد أن
    يحقّق حلم والده في التفوّق والتميّز فأحبّ اللغة العربيّة
    بشغف وتذوّق جمالها، فأخلص لها وأتقن قراءة حروفها وكتابتها
    وتفوّق في كلّ فنونها؛ فكان خطيبًا بارعًا يشدّ الأنظار إليه
    بأسلوبه الشائق وذكائه الفطريّ، وخلقه الرفيع. يحلم محمّد أن
    يكون في المستقبل أديبًا ذا شأنٍ يسهم في تنمية العقول
    ويشارك في بناء سوريّة الجديدة التي تنتظر خبرات أبنائها
    وجهودهم المخلصة.
    `,
      haj: `
    الطالب قسورة حاج حسن من مواليد حلب عام 2008م. عاش في جو من
    الخوف واليأس بعد أن غيّب الموت أباه الذي كان مصدر الأمان
    والأمل له؛ بسبب الحرب الدائرة في سوريا والتي أتت على كلّ
    شيء، فترك المدرسة في وقتٍ مبكّرٍ والتحق بسوق العمل وهو طفل
    صغير ليعيل عائلته ويقدّم لهم ما يسدّ الرمق ويمسك الحياة،
    كان ينظر بحسرة إلى أقرانه الذين يرتادون المدارس ويحلمون
    بمستقبل زاهر، ثمّ شاءت الأقدار له أن يلتحق بمدارس هيئة
    تطوير التعليم لتعوضه وترسم له الأمل بحياة أفضل. قسورة
    اليوم من أفضل طلاب مدارس هيئة تطوير التعليم علمًا وخلقًا،
    يرسم طريقه للمستقبل بخطى واثقة يحدوها الهدف والطموح.
    `,
      title: "رواد التميز",
    },
    en: {
      busher: `
      Bishr Mahmoud Ibrahim, a creative child in grade 5, one of the pioneers of the Dabiq Cultural Forum. He grew up in a family that loved science, and was raised on good morals and the beautiful treatment of his parents. Despite his great pain for the loss of his father, who was captured in the prisons of the Syrian regime for several years, Bishr did not give up, and his desire and his ambition were stronger than his pain, as he distinguished himself among his peers in oratory and poetry recitation, and here he is mastering the center with the sweetest voices in poetry and prose. We hope to see him in the future as a great poet, an orator and a jurist, and thus be a beacon for his generation and a lantern that advances those around him with science and literature.
      `,
      muhammad: `
      Muhammad Rajab Al-Badawi is a grade 5 student from the city of Atarib, who possesses a fine sense, a strong personality and a delicate sense. His father was martyred in this unjust war at the hands of the treachery machine of the Syrian regime and its allies, but that did not discourage him from continuing his education. Muhammad decided to fulfill his father's dream of excellence and distinction. He passionately loved the Arabic language and tasted its beauty. He was devoted to it and mastered reading and writing its letters and excelled in all its arts. He was a brilliant orator who drew attention to him with his interesting style, innate intelligence, and high morals. Muhammad dreams of being an important writer in the future, contributing to the development of minds and participating in building the new Syria, which awaits the experiences and sincere efforts of its people.
      `,
      haj: `The student, Qaswra Hajj Hassan, was born in Aleppo in 2008. He lived in an atmosphere of fear and despair after his father, who used to be a source of safety and hope for him, had passed away because of the war in Syria, which had ruined everything. He left school at an early age and joined the labor market as a young child to support his family and provide them with what makes their living and preserves their life. He was looking sadly on his peers who attended school and dreamed of a bright future, then he was destined to join the schools of Education Development Commision to compensate him and give him hope for a better life. Today, Qaswra is one of the best students of Education Development Commission schools in knowledge and ethics, he charting his way to the future with confident steps, driven by purpose and ambition.`,
      title: "Excellence Pioneers",
    },
  }
  const { busher, muhammad, haj, title } = stories[lang]
  return (
    <section className="relative">
      <Slider {...settings}>
        <Story
          story={muhammad}
          image="https://res.cloudinary.com/dqoung1wz/image/upload/v1631099683/websiteImage/s1_spmn3i.png"
          title={title}
          lang={lang}
        />
        <Story
          story={busher}
          image="https://res.cloudinary.com/dqoung1wz/image/upload/v1631099992/websiteImage/ezgif_1_qxp7uv.png"
          title={title}
          lang={lang}
        />
        <Story
          story={haj}
          image="https://res.cloudinary.com/dqoung1wz/image/upload/v1631099683/websiteImage/s3_tzihw7.png"
          title={title}
          lang={lang}
        />
      </Slider>
    </section>
  )
}

export default SuccessStory
