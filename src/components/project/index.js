import React from "react"
import Img from "gatsby-image"
import ImageSlider from "../shared/ImageSlider"
import BackgroundImage from "gatsby-background-image"
import PortableText from "../shared/PortableText"
import VideoContainer from "../shared/VideoContainer"
import Share from "../shared/Share"
import { Helmet } from "react-helmet"
const Index = ({ data, lang }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
      >
        <title>{data?.projectName[lang]}</title>
        <meta name="description" content={data.shortDescription[lang]} />
        <meta name="image" content={data?.image[0].asset.fluid.src} />
        <meta name="keywords" content={`دعم التعليم`} />
        <meta name="robots" content="index,follow" />

        <meta
          property="og:url"
          content={`https://edcommission.com/projects/${data.slug.current}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data?.projectName[lang]} />
        <meta property="og:description" content={data.shortDescription[lang]} />
        <meta property="og:image" content={data?.image[0].asset.fluid.src} />
        <meta property="fb:app_id" content="123456" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@edcmission" />
        <meta name="twitter:title" content={data?.projectName[lang]} />
        <meta
          name="twitter:description"
          content={data.shortDescription[lang]}
        />
        <meta name="twitter:image" content={data?.image[0].asset.fluid.src} />
      </Helmet>
      <div className="container my-10">
        <Img
          fluid={data?.image[0].asset.fluid}
          className="rounded-md"
          alt="proImage"
          objectFit="cover"
        />
        <div className="flex flex-col md:flex-row items-center  my-8 ">
          <Share
            info={`https://edcommission.com/projects/${data.slug.current}`}
          />
          <h2 className=" flex-grow text-center font-semibold text-3xl text-mainblue">
            {data?.projectName[lang]}
          </h2>
        </div>

        <div>
          {data._rawProjectIntro && (
            <PortableText blocks={data._rawProjectIntro[lang]} />
          )}
          <div className="flex flex-col-reverse md:flex-row items-center gap-5 mt-8 justify-between  rounded-md">
            <div className="md:w-1/2   p-3">
              {data._rawMaingoal && (
                <PortableText blocks={data._rawMaingoal[lang]} />
              )}
            </div>
            <div className="md:w-1/2 ">
              {data.video && (
                <VideoContainer
                  src={data?.video}
                  videoPoster={data?.videoPoster}
                />
              )}
            </div>
          </div>
        </div>

        <div className="my-10">
          {data.projectGoals?.length > 0 && (
            <BackgroundImage
              Tag="div"
              fluid={data?.image[1].asset.fluid}
              preserveStackingContext={true}
            >
              <ul className="py-12 grid   md:grid-cols-2 grid-cols-1 gap-10 px-4  ">
                {data.projectGoals.map(p => (
                  <li className="text-xl text-mainblue font-semibold bg-gray-200 bg-opacity-75 rounded-md p-2 ">
                    {p[lang]}
                  </li>
                ))}
              </ul>
            </BackgroundImage>
          )}
        </div>
        <div className="container">
          {data._rawProjectDescription1 && (
            <PortableText blocks={data._rawProjectDescription1[lang]} />
          )}
          {data.slug.current === "مشروع-عقل" && <AqilProjectData lang={lang} />}
          <br />
          <div className="md:w-3/4 w-full mx-auto ">
            <ImageSlider
              options={{
                autoplay: true,
                autoplaySpeed: 5000,
                cssEase: "linear",
              }}
            >
              {data.image.map(
                (img, i) =>
                  i >= 2 && (
                    <Img
                      fluid={img.asset.fluid}
                      className="w-full h-96 rounded-md"
                    />
                  )
              )}
            </ImageSlider>
          </div>
          {data._rawProjectDescription2 && (
            <PortableText blocks={data._rawProjectDescription2[lang]} />
          )}
        </div>
      </div>
    </>
  )
}

export default Index

const AqilProjectData = ({ lang }) => {
  const data = {
    ar: {
      t1: "الصنف الأوّل:",
      t1b: `
      هو الطالب الذي يمكن له متابعة تعلّمه في مدرسةٍ نظاميّةٍ.
      `,
      t2: "الصنف الثاني:",
      t2b: `هو الطالب الذي يمكن إلحاقه في مشروع عقل في المستوى التالي.`,
      text1: `
      الطالب المنقطع عن الدارسة والذي تجاوز عمره 13 عامًا ولم يتجاوز 20 عامًا
      يدرس في مراكز هيئة تطوير التعليم (مشروع عقل) وفق المناهج الدراسيّة
      المقسّمة إلى مستويات حسب الجدول الآتي:
      `,

      table: {
        row1: {
          th: "التحصيل التعليميّ",
          td1: [
            "ما يوازي للصفّ الثالث من المرحلة الابتدائيّة.",
            "ما يوازي للصف السادس المرحلة الابتدائيّة.",
            "ما يوازي للصّفّ التّاسع من المرحلة الإعدادّية.",
            "ما يوازي للصف الحادي عشر من المرحلة الثانويّة.",
            "ما يوازي للصف الثالث الثانوي (البكالوريا).",
          ],
        },
        row2: {
          th: "المستوى الدراسيّ",
          td1: [
            "المستوى التحضيري الأعمار ما بين 8 - 13 عامًا.",
            "المستوى الأوّل الأعمار ما بين 13 -15 عامًا.",
            "المستوى الثاني الأعمار ما بين 15 -16 عامًا.",
            "المستوى الثالث الأعمار ما بين 16 -17 عامًا.",
            "المستوى الرابع الأعمار ما بين 17 -20 عامًا.",
          ],
        },
      },
      text2: `
      مع الإشارة إلى أنّ هذه الأعمار في المستويات أعلاه ليست حصريّةً؛ حيث يمكن
      مواجهة حالاتٍ خاصّةٍ تتمّ معالجتها من قبل لجنة التسجيل والقبول بعد أخذ
      موافقة مدير المشروع.
      `,
      text3: `
      وكل مستوى دراسيّ يتكوّن من ثلاثة فصولٍ دراسيّة اثنين منها في الشتاء
          وثالثٍ صيفيّ، بحيث تتمّ عمليّة ضغطٍ للمناهج وإنجاز ثلاث سنوات أو أقلّ في
          سنة واحدة وفق وثائق تنظيميّة للمناهج قام بإعدادها خبراء تربويّون
          متخصّصون، وبالتالي يتطلّب ذلك زيادة عدد الساعات الدراسيّة اليوميّة
          والأسبوعيّة؛ 6 أيام أسبوعيًّا و6 حصص يوميًّا.
      `,
    },
    en: {
      t1: "First category:",
      t1b: `
      A student who can continue his education in a regular school.
      `,
      t2: "Second category:",
      t2b: `A student who can be joined in the next level of Akl project.`,
      text1: `
      The student who dropped out of school, who is over 13 years old and not more than 20 years old, studies in Education Development Commission centers (Akl project) according to the curricula divided into levels according to the following table:
      `,

      table: {
        row1: {
          th: "Academic level",
          td1: [
            "Equivalent of grade 3 of primary school.",
            "Equivalent of grade 6 of primary school.",
            "Equivalent of grade 9 of preparatory school.",
            "Equivalent of grade 11 of secondary school.",
            "Equivalent of third secondary grade (baccalaureate).",
          ],
        },
        row2: {
          th: "Educational attainment",
          td1: [
            "Preparation level of ages 8 – 13 years old.",
            "Level 1: ages 13-15 years old.",
            "Level 2: ages 15-16 years old.",
            "Level 3: ages 16-17 years old.",
            "Level 4: ages 17-20 years old.",
          ],
        },
      },
      text2: `
      Noting that these ages at the above levels are not exclusive; Where it is possible to encounter special cases, they are dealt with by the registration and admission committee after obtaining the approval of the project manager.
      `,
      text3: `
      Each academic level consists of three semesters, two of them in winter and the third in summer, so that the process of compressing the curricula and completing three years or less in one year according to organizational documents of the curriculum prepared by specialized education experts, and therefore this requires an increase in the number of daily and weekly academic hours: 6 days a week, 6 classes a day.
      `,
    },
  }
  const { t1, t1b, t2, t2b, text1, table, text2, text3 } = data[lang]
  const tdStyle = "p-5 border"

  return (
    <div className="my-10 text-xl">
      <div className="my-4">
        <h4 className="text-mainblue  font-semibold">{t1}</h4>
        <p>{t1b}</p>
      </div>
      <div className="my-4">
        <h4 className="text-mainblue font-semibold">{t2}</h4>
        <p>{t2b}</p>
      </div>
      <p className="mb-8">{text1}</p>
      <div className="flex justify-center ">
        <table className="border ">
          <tr className="bg-gray-400">
            <th className="p-2">{table.row1.th}</th>
            <th>{table.row2.th}</th>
          </tr>
          {[...Array(table.row1.td1.length)].map((_, i) => (
            <tr key={i}>
              <td className={tdStyle}>{table.row1.td1[i]}</td>
              <td className={tdStyle}>{table.row2.td1[i]}</td>
            </tr>
          ))}
        </table>
      </div>
      <p className="my-8">{text2}</p>
      <p>{text3}</p>
    </div>
  )
}
