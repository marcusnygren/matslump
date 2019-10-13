import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from Linnea and Marcus</h1>
    <p>This our site which you can use for finding food recipes for the week.</p>
    <p>Thank you <a href="https://www.familjeliv.se/forum/thread/77381544-100-matratter-och-efteratter-och-lite-annat-for-under-30-kr-per-portion">@Aniiee</a> for the list of current recipes.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
