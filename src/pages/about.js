import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/about.css"

export default function About() {
  // put HTML within these brackets
  return (
    <>
      <Nav />
      <section>
        <div className="header-container">
          <h1 className="title-L">About Us</h1>
          <p>
            In the spring of 2020, our team of Washington University in St.
            Louis undergraduate and medical students created Grounded: The
            Pandemic Archive. This digital time capsule, which combines images
            and audio recordings, serves as a living archive of how people have
            experienced COVID-19. It captures the meanings that emerged from the
            spaces we inhabited and objects that surrounded us.
          </p>
        </div>
        <div className="body-container">
          <div className="body-header">
            <h1 className="subheader">Our Story</h1>
          </div>

          <div className="body-text-top">
            At the end of 2020, we received a grant from the Mellon Foundation
            to build this project out from 2021 through 2024. We are working to
            apply what we learned from the first iteration of Grounded to make
            this project more community-centered. Our goal is to explore how
            individuals—particularly those hardest hit by the pandemic—are using
            creative outlets to resist injustice, foster healing, challenge
            systemic discrimination, and cope with COVID-19. We are working to
            imagine a more just future through different storytelling tools and
            tactics. COVID-19 has called attention to the vast disparities in
            our society, specifically how minority populations have been
            disproportionately affected by this pandemic. The power of Black
            Lives Matter, the outrage over separation of immigrant and refugee
            families, and the harsh toll on racial and economic minorities,
            front-line workers, people with disabilities and LGBTQ+ and elderly
            communities all illustrate the importance of listening to the people
            whose lives have been most impacted; their creative practices
            illuminate new paths toward social justice.
          </div>
          <div className="body-text-bottom">
            <p>
              Without documentation, these crucial—but ephemeral—stories where
              art intersects with lived experiences of pandemic and political
              resistance will likely be lost. Black and Brown voices are often
              eliminated from dominant narratives due to exclusionary revisions
              of the past. We are working to construct an inclusive legacy and
              collective memory of these historic times and center communities'
              stories through our future work with Grounded: The Pandemic
              Archive. Recognizing and understanding experiences of the pandemic
              will remain vital for years to come as we slowly process and seek
              to remedy the structural inequalities underscored by COVID-19. If
              you are interested in participating or getting involved, please
              contact us.
              <br />
              <br />
              Thank you to Rachael Silberstein and Graham Taylor for helping
              create the illustrations and film, respectively, for our project.
              We are very grateful for your talents and contributions!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
