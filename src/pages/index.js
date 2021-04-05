import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Important Details</h1>
    <p>
      Our wedding is on <strong>22<sup>nd</sup> October 2022</strong>. The
      main service will be held at <strong>2pm</strong> in <strong>St.
      Giles' Parish Church</strong> in Wrexham. Celebrations will continue
      from <strong>6pm</strong> at the <strong>Ramada Plaza</strong> hotel,
      also in Wrexham.
    </p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
