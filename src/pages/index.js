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

      <div className="container">
        
      </div>

      </section>
      <section className="explore">
        <h1 className="title-L">Explore</h1>
      </section>
      <Footer />
    </>
  )
}
