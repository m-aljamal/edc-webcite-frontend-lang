import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            arDescription
            enDescription
            trDescription
            siteUrl
            title
            arabicTitle
            image
            twitterUserName
          }
        }
      }
    `
  )

  const metaDescription =
    lang === "ar"
      ? site.siteMetadata.arDescription
      : lang === "en"
      ? site.siteMetadata.enDescription
      : site.siteMetadata.trDescription
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUserName,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `image`,
          content: site.siteMetadata.image,
        },
        {
          name: `keywords`,
          content: `EDC organization, EDC, education development commission, Kilis, Aytam atarib, ,مؤسسة هيئة تطوير التعليم, منظمة هيئة تطوير التعليم, هيئة تطوير التعليم,عقل, تعليم,منظمة,جمعية,شافعي, ايتام الاتارب, مدرسة ايتام الاتارب, مدرسة واجدو الطريق, واجدو الطريق,مركز دابق,حاضنة الثقافية,كفالة يتيم تعليمية ,منتدى دابق الثقافي , كلس , منظمات  `,
        },
        {
          name: `robots`,
          content: `index,follow`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ar`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
