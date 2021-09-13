import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"

import HeroBackground from "../shared/HeroBackground"
import Background from "../shared/Background"
import ImageSlider from "../shared/ImageSlider"
import BackgroundImage from "gatsby-background-image"
import PortableText from "../shared/PortableText"
const Index = ({ data }) => {
  return (
    <Wrapper>
      <HeroBackground image={data.image[0].asset.fluid} className="background">
        <div className="heroText">
          <h2>{data.projectName}</h2>
        </div>
      </HeroBackground>
      <div className="projectContent container">
        {data._rawProjectIntro && (
          <PortableText blocks={data._rawProjectIntro} />
        )}
        <div className="projectGoal">
          <div className="goaltitle">
            {data._rawMaingoal && <PortableText blocks={data._rawMaingoal} />}
          </div>
          <Img fluid={data.image[1].asset.fluid} className="image" />
        </div>
      </div>

      <div className="videoContainer">
        <video controls poster={data.videoPoster} className="video">
          <source src={data.video} type="video/mp4" />
        </video>
      </div>

      <div className="backgroundImage">
        {data.projectGoals.length > 0 && (
          <Background image={data.image[2].asset.fluid}>
            <div className="goalsContainer container">
              <ul>
                <li>{data.projectGoals[0].title}</li>
                <li>{data.projectGoals[1].title}</li>
              </ul>
              <ul className="last">
                <li>{data.projectGoals[2].title}</li>
                {data.projectGoals[3] && <li>{data.projectGoals[3].title}</li>}
              </ul>
            </div>
          </Background>
        )}
      </div>
      <div className="container">
        {data._rawProjectDescription1 && (
          <PortableText blocks={data._rawProjectDescription1} />
        )}
        {data.slug.current === "aqil" && <AqilProjectData />}
        <br />
        <div className="imagesSlider">
          <ImageSlider>
            {data.image.map(
              (img, i) =>
                i >= 2 && (
                  <Img fluid={img.asset.fluid} className="image sImage" />
                )
            )}
          </ImageSlider>
        </div>
        {data._rawProjectDescription2 && (
          <PortableText blocks={data._rawProjectDescription2} />
        )}
      </div>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.section`
  .container {
    max-width: 90%;
  }
  ul {
    list-style: disc;
  }
  margin-bottom: 30px;
  .background,
  .backgroundImage {
    background-color: rgba(71 108 134, 0.6);
    background-image: linear-gradient(rgba(0, 0, 2, 0.3), rgba(0, 0, 50, 0.5));
  }
  .heroText {
    width: 80vw;
    text-align: center;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 2.8rem;
  }
  .projectContent {
    margin-top: 35px;
  }
  .projectGoal {
    display: flex;
    gap: 10px;
    align-items: center;
    .image {
      width: 35%;
    }
    .goaltitle {
      width: 65%;
      h3 {
        color: var(--blue);
        font-weight: bold;
      }
    }
  }
  .videoContainer {
    margin: 65px auto;
    width: 65%;

    line-height: 0;
  }
  .video {
    width: 100%;
    object-fit: cover;
    outline: none;
  }
  .goalsContainer {
    padding: 20px 0px;

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      background-color: rgb(255 255 255 / 70%);
      list-style-type: disclosure-closed;
    }
  }
  .last {
    padding-top: 30px;
  }
  h3 {
    color: var(--blue);
    font-weight: bold;
  }
  li,
  p {
    text-align: justify;
  }
  .images,
  .imageModel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .imagesSlider {
    margin-top: 30px;
  }

  @media (max-width: 750px) {
    .projectGoal {
      flex-direction: column-reverse;
    }
    .image {
      margin-top: 30px;
      width: 65% !important;
    }
    .sImage {
      width: 100% !important;
    }
    .heroText {
      font-size: 2rem;
    }
    .projectContent {
      font-size: 1.7rem;
    }
    .container {
      font-size: 1.7rem;
    }
    .goalsContainer {
      ul {
        padding: 10px;
        grid-template-columns: 1fr;
      }
    }
  }
`

const AqilProjectData = () => {
  return (
    <AqilStyle>
      <div className="title">
        <h4>الصنف الأوّل:</h4>
        <p>هو الطالب الذي يمكن له متابعة تعلّمه في مدرسةٍ نظاميّةٍ.</p>
      </div>
      <div className="title">
        <h4>الصنف الثاني:</h4>
        <p>هو الطالب الذي يمكن إلحاقه في مشروع عقل في المستوى التالي.</p>
      </div>
      <p className="p">
        الطالب المنقطع عن الدارسة والذي تجاوز عمره 13 عامًا ولم يتجاوز 20 عامًا
        يدرس في مراكز هيئة تطوير التعليم (مشروع عقل) وفق المناهج الدراسيّة
        المقسّمة إلى مستويات حسب الجدول الآتي:
      </p>
      <table>
        <tr>
          <th>التحصيل التعليميّ</th>
          <th>المستوى الدراسيّ</th>
        </tr>
        <tr>
          <td>المستوى التحضيري الأعمار ما بين 8 - 13 عامًا.</td>
          <td>ما يوازي للصفّ الثالث من المرحلة الابتدائيّة.</td>
        </tr>
        <tr>
          <td>المستوى الأوّل الأعمار ما بين 13 -15 عامًا.</td>
          <td>ما يوازي للصف السادس المرحلة الابتدائيّة.</td>
        </tr>
        <tr>
          <td>المستوى الثاني الأعمار ما بين 15 -16 عامًا.</td>
          <td>ما يوازي للصّفّ التّاسع من المرحلة الإعدادّية.</td>
        </tr>
        <tr>
          <td>المستوى الثالث الأعمار ما بين 16 -17 عامًا.</td>
          <td>ما يوازي للصف الحادي عشر من المرحلة الثانويّة.</td>
        </tr>
        <tr>
          <td>المستوى الرابع الأعمار ما بين 17 -20 عامًا.</td>
          <td>ما يوازي للصف الثالث الثانوي (البكالوريا).</td>
        </tr>
      </table>
      <p className="p">
        مع الإشارة إلى أنّ هذه الأعمار في المستويات أعلاه ليست حصريّةً؛ حيث يمكن
        مواجهة حالاتٍ خاصّةٍ تتمّ معالجتها من قبل لجنة التسجيل والقبول بعد أخذ
        موافقة مدير المشروع.
      </p>
      <p>
        وكل مستوى دراسيّ يتكوّن من ثلاثة فصولٍ دراسيّة اثنين منها في الشتاء
        وثالثٍ صيفيّ، بحيث تتمّ عمليّة ضغطٍ للمناهج وإنجاز ثلاث سنوات أو أقلّ في
        سنة واحدة وفق وثائق تنظيميّة للمناهج قام بإعدادها خبراء تربويّون
        متخصّصون، وبالتالي يتطلّب ذلك زيادة عدد الساعات الدراسيّة اليوميّة
        والأسبوعيّة؛ 6 أيام أسبوعيًّا و6 حصص يوميًّا.
      </p>
    </AqilStyle>
  )
}

const AqilStyle = styled.div`
  margin-top: 20px;
  .title {
    display: flex;
    h4 {
      margin-left: 20px;
      font-weight: bold;
    }
  }
  .p {
    margin: 20px 0;
  }
  table {
    margin: auto;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: right;
    padding: 8px;
  }
  th {
    text-align: center;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`

const DapiqSchoolStyle = styled.div`
  ul {
    list-style: disc;
  }
  .circle {
    list-style: circle;
  }
  .h3 {
    margin-top: 20px;
  }
`
