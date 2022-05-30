require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    orgTitle: {
      ar: "هيئة تطوير التعليم",
      en: `Education Development Commission`,
    },
    description: {
      ar: `هيئة تطوير التعليم هي منظّمة غير حكوميّة وغير ربحيّة، تعمل على تطوير
      مناهج دراسيّة خاصّة للطلاب في مناطق الحروب والنزاعات، لتساعدهم على إدراك
      ما فاتهم من سنوات دراسيّة بسب الحروب. وجاءت فكرة تأسيس الهيئة من إيمان
      القائمين عليها بوجوب توفّر فرص التعليم النوعيّ لكافّةِ الأطفال الذين
      يقطنون في أماكن النزاعات، بغضّ النظر عن وضعهم الاجتماعيّ، وطبيعة النزاع
      السائد في مناطقهم.`,
      en: `Education Development Commission is a non-governmental, non-profit organization that works to develop special curricula for students in war and conflict areas, to help them catch-up the years of school that they have missed due to wars. The idea of establishing the commission came from the belief of those in charge of it that quality education opportunities should be available to all children who live in conflict areas, regardless of their social status and the nature of the conflict prevailing in their areas.`,
    },
    author: `mohammadjamol@gmail.com`,
    twitterUserName: `@edcmission`,
    siteUrl: `https://edcommission.com/`,
    image: `https://res.cloudinary.com/dqoung1wz/image/upload/v1613318354/websiteImage/edcLogo_vupus2.png`,
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "projects",
        imagePath: "projectImg",
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assist/images`,
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Education Development Commission`,
        short_name: `EDC`,
        start_url: `/`,
        background_color: `#D7D7D7`,
        theme_color: `#476C86`,
        display: `minimal-ui`,
        icon: `src/assist/images/edcLogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/index.ar/*`],
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "ar",
        langKeyForNull: "ar",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#cd6f47`,
        // Disable the loading spinner.
        showSpinner: false,
        trickle: false,
        minimum: 0.4,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-HFBY59X83L"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-twitter`,
  ],
}
