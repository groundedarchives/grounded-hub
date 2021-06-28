import React from "react"
import Nav from "../components/Nav"
import "../styles/global.css"
import "../styles/thank.css"

export default function Thank() {
  // put HTML within these brackets
  return (
    <>
      <Nav />
      <section>
        <div className="thank-wrapper">
          <h1 className="title-L">Thank You!</h1>
          <p>We'll get back to you as soon as possible</p>
        </div>
      </section>
    </>
  )
}
