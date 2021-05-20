import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/contact.css"

export default function Contact() {
  return (
    <>
      <Nav />
      <section className="contactPage">
        <h1 className="title-L">Contact</h1>
      </section>
      <Footer />
    </>
  )
}
