import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/index.css"
import WashUImage from "../../static/images/WashU.png"

export default function Home() {
  return (
    <>
      <Nav />
      <section className="landing">
        <h1 className="title-L">Home</h1>
      </section>
      <section className="about">
        <div className="about-container">
          <div className="about-left">
            <img src={WashUImage} width="400"></img>
          </div>
          <div className="about-right">
            <div className="about-header">
              <h1>Explaining Briefly What Stroies Are</h1>
            </div>
            <div className="about-paragraph">
              <p>
                “Grounded: The Pandemic Archive” is our effort to assemble a
                living archive of the objects that tell stories of home and
                hardship amid the ongoing battles for health, community, and
                justice. We invite you to explore the archive and discover how
                different objects hold a piece of their story and voice to
                history.
              </p>
            </div>
            <div className="about-button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">

        <div className="explore-header">
          <h1 className="title-L">Explore</h1>
          <button className="to_gallery">View Entire Gallery</button>
        </div>

        <div className="explore-body">
          <div className="pic_names">
            <p>Home office</p>
            <p>Scrabble Set</p>
            <p>Potted Plant</p>
            <p>Harry Potter 7</p>
            <p>Candle Set</p>
            <p>River Pebble</p>
            <p>Punching Bag</p>
            <p>Subway Pass</p>
            <p>Journal Collage</p>
          </div>

          <div id="images">
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}
