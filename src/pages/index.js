import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Week from "../components/week"

const weekNumber = "32";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>What's for dinner this week?</h1>
    <h2>Week {weekNumber}</h2>

    <Week />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
