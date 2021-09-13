const path = require("path")

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
    actions.createPage({
      path: `projects/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
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
    actions.createPage({
      path: `events/${event.slug.current}`,
      component: eventTemplate,
      context: {
        slug: event.slug.current,
      },
    })
  })
}

exports.createPages = async params => {
  await projectsPages(params)
  await eventsPages(params)
}
