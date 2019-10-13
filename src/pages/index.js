import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const weekNumber = "32";
const recipes = ["Sallad med nektariner och mögelost", "Linssallad med grapefrukt och bresaola", "Linssallad med avokado", "Bönsallad med fetaost och mango", "Pizza Bolognese", "Klassisk Lasagne", "Köttfärssås med smaksatt creme fraiche", "Köttfärsbiffar med bönor och blomkål", "Lammfärsbullar med linsröra", "Grönare köttfärssås med pasta", "Lasagne XL", "Kokosfisk med ris", "Fisk med mango", "Kokos- och saffransfisk", "Wraps med ägg och rökt lax", "Sesampanerad fisk med chiliyoghurt och ris", "Pasta med räksås", "Variant på mandelfisk", "Franskinspirerade fiskbiffar", "Kyckling med passionsfruktsås", "Haremsgryta", "Kyckling med apelsinsås och rostade rotfrukter", "Kyckling i ingefära och chili", "Klassisk helstekt helgkyckling med rostad potatis och gräddsås", "Kycklingtacopaj", "Franskinspirerad kyckling", "Kycklingbullar i jordnötssås", "Äggmuffins med kalkon", "Bulgur med frukt, nötter, ost och korv", "Makaronipudding", "Pestopasta med lufttorkad skinka", "Stroganoff med kryddkorv", "Fläskpannkaka och stekta äpplen", "Korv och currymos", "Korv stroganoff med basilika", "Havre- och dinkelpannkakor med bacon och äpple", "Äppelspäckad korv och potatisgratäng", "Falukorv med krossade rotfrukter", "Risplättar med korv", "Italienskinspirerad korvpanna", "Pasta med salsiccia", "Korvwok", "Korvgryta", "Grönsaksgratäng", "Ärtgryta med rödbetor", "Kantarellpaj", "Stroganoff med bönor", "Curry med sötpotatis och blomkål", "Kikärtsbiffar och lingryta", "Kikärtsskål", "Tomatbönor", "Bakade bönor med tomater och tryffelkeso", "Aubergine med linser, tomat och yoghurtsås", "Harissaris", "Pasta med grönkål", "Blandade bönor med smaksatt creme fraiche", "Currypannkakor med tomatsallad", "Chunky tomatsås med linser", "Sötpotatispaj", "Falafelwraps med myntasås", "BLT-macka", "Eggs Benedict", "Varm laxmacka", "Kikärtssoppa med smetana", "Kyklingsoppa med syrlig grädde", "Sötpotatissoppa", "Korvsoppa", "Edamamesoppa"];
const desserts = ["Spenatsmoothie", "Irish shake", "Myntashake", "Bananshake", "Apelsinsallad med Keso och kli", "Björnbärs- och bannayoghurt med topping", "Blodgrapeglass", "Marängsviss med apelsin", "Sockerkaka med varma bär och grädde", "Hasselnötsvåfflor med kolasås", "Citronplättar", "Våfflor med kardemummakräm", "Hallontårta", "Amerikanska pannkakor", "Amerikanska kokospannkakor", "Kanelpaj med vaniljglass", "Risgrynsgröt med apelsinströssel", "Apelsinsallad med yoghurtsås", "Kesovåfflor", "Plättbakelse", "Fryst vaniljtårta med bjärnbär", "Kolatryffelpaj", "Apelsinchokladbit", "Chokladbollar", "Apelsinkaka med chokladtryffel", "Rulltårta med apelsin och choklad", "Apelsinbrownies", "Kanelbullar extra", "Apelsintryffelbiskvier", "Chocolate chocolate chocolate chippies", "Scones", "Bovetebullar"];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>What's for dinner this week?</h1>
    <h2>Week {weekNumber}</h2>

    <ol>
      <li>Måndag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
      <li>Tisdag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
      <li>Onsdag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
      <li>Torsdag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
      <li>Fredag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
      <li>Lördag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
      <li>Söndag: {recipes[Math.floor(Math.random()*recipes.length)]}</li>
    </ol>

    <p>Veckans efterrätt: {desserts[Math.floor(Math.random()*desserts.length)]}</p>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
