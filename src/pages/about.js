import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/global.css"

export default function About() {
  // put HTML within these brackets
  return (
    <>
      <Nav />
      <section>
        <h1 className="title-L">About</h1>
      </section>
      <Footer />
    </>
  )
}
