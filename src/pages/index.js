import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const weekNumber = "32";
const chosenRecipes = ["Pytt i panna", "Ärtsoppa", "Pannbiff", "Råbiff", "Majs", "Kronärtskockslasagne", "Purré"];
const weekDays = ["M", "T", "O", "T", "F", "L", "S"];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <h1>What's for dinner this week?</h1>
    <h2>Week {weekNumber}</h2>

    <ol>
      <li>Måndag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
      <li>Tisdag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
      <li>Onsdag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
      <li>Torsdag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
      <li>Fredag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
      <li>Lördag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
      <li>Söndag: {chosenRecipes[Math.floor(Math.random()*chosenRecipes.length)]}</li>
    </ol>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
