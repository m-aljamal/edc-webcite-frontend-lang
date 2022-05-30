const path = require("path")
const languages = ["ar", "en"]
async function projectsPages({ graphql, actions }) {
  const projectTemplate = path.resolve("./src/templates/Project.js")
  const { data } = await graphql(`
    query {
      projects: allSanityProjects {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)
  data.projects.nodes.forEach(project => {
    languages.forEach(lang => {
      actions.createPage({
        path: `${lang === "en" ? "/en" : ""}/projects/${project.slug.current}`,
        component: projectTemplate,
        context: {
          slug: project.slug.current,
          lang: `${lang === "en" ? "en" : "ar"}`,
        },
      })
    })
  })
}

async function eventsPages({ graphql, actions }) {
  const eventTemplate = path.resolve("./src/templates/Event.js")
  const { data } = await graphql(`
    query {
      events: allSanityEvent {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  data.events.nodes.forEach(event => {
    languages.forEach(lang => {
      actions.createPage({
        path: `${lang === "en" ? "/en" : ""}/events/${event.slug.current}`,
        component: eventTemplate,
        context: {
          slug: event.slug.current,
          lang: `${lang === "en" ? "en" : "ar"}`,
        },
      })
    })
  })
}

exports.createPages = async params => {
  await projectsPages(params)
  await eventsPages(params)
}
