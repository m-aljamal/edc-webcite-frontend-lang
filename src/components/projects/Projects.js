import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Title_no_back from "../shared/Title_no_back"

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allSanityProjects {
        totalCount
        nodes {
          slug {
            current
          }
          videoPoster
          id
          video
          projectName {
            ar
            en
          }
          shortDescription {
            ar
            en
          }
        }
      }
    }
  `)

  return (
    <ProjectsStyle>
      <Title_no_back title="مشاريعنا" width="110px" />
      <div className="container">
        {projects.nodes.map((pro, i) => (
          <Row index={i}>
            {i % 2 === 0 ? (
              <>
                <InformationContainer
                  projectName={pro.projectName.ar}
                  shortDescription={pro.shortDescription.ar}
                  link={pro.slug.current}
                />
                <VideoContainer poster={pro.videoPoster} videoSrc={pro.video} />
              </>
            ) : (
              <>
                <VideoContainer poster={pro.videoPoster} videoSrc={pro.video} />
                <InformationContainer
                  link={pro.slug.current}
                  projectName={pro.projectName.ar}
                  shortDescription={pro.shortDescription.ar}
                />
              </>
            )}
          </Row>
        ))}
      </div>
    </ProjectsStyle>
  )
}

export default Projects

const VideoContainer = ({ poster, videoSrc }) => {
  return (
    <div className="videoContainer">
      <video controls poster={poster} className="video">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}

const InformationContainer = ({ projectName, shortDescription, link }) => {
  return (
    <div className="info">
      <h3 className="title">{projectName}</h3>
      <p className="desc">{shortDescription}</p>
      <Link to={link}>
        <span className="readMore">متابعة المزيد</span>
      </Link>
    </div>
  )
}

const ProjectsStyle = styled.section`
  .container {
    max-width: 85%;
    margin: 40px auto;

    .info {
      padding: 0px 20px;
      width: 50%;
      border: 5px solid #a0a0a0;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      background: rgba(230, 228, 216, 0.4);
    }
    @media (max-width: 700px) {
      .videoContainer {
        width: 100% !important;
      }
      .info {
        width: 100%;
      }
    }
    .videoContainer {
      width: 50%;
      line-height: 0;
      display: table-cell;
      vertical-align: middle;
    }
    .video {
      width: 100%;
      object-fit: cover;
      outline: none;
    }
    .title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .desc {
      font-size: 1.7rem;
      text-align: start;
      margin-bottom: 20px;
    }
    .readMore {
      background-color: var(--blue);
      padding: 0 5px;
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
    }
  }
`

const Row = styled.div`
  display: table-row;
  margin-top: 50px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: ${props =>
      props.index === 1 || props.index === 3 ? "column-reverse" : "column"};
  }
`
