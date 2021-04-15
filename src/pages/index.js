import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/index.css"

export default function Home() {
  return (
    <>
      <Nav />
      <section className="landing">
        <h1 className="title-L">Home</h1>
      </section>
      <section className="about">
        <h1 className="title-L">About</h1>
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
