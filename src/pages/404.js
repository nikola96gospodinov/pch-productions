import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <div className="banner" style={{flexDirection: 'column'}}>
        <h1>404: Not found</h1>
        <h2>The page that you stumbled upon does not exist</h2>
        <Link to="/" className="button">Back to homepage</Link>
    </div>
  </Layout>
)

export default NotFoundPage
