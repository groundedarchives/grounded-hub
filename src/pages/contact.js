import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { TextInput, CheckboxInputs, TextArea } from "../components/ContactInput"
import "../styles/global.css"
import "../styles/contact.css"

export default function Contact() {
  return (
    <>
      <Nav />
      <section className="contactPage">
        <h1 className="title-L">Contact</h1>
        <div className="body">
          <h2>Connect with Grounded</h2>
          <p>Email us at groundedarchives@gmail.com</p>
          <form className="formWrapper" action="">
            <div className="firstSection">
              <div className="topInputs">
                <TextInput name="Full Name" />
                <TextInput isPhone={true} name="Phone Number" />
              </div>
              <TextInput name="Email" />
              <TextInput name="Organization (if applicable)" />
            </div>
            <CheckboxInputs
              question="How can we help you?"
              inputNames={[
                "General Inquiry",
                "Collaboration Interest",
                "Media Request",
                "Story submission Interest",
                "Museum or Exhibit Interest",
              ]}
            />
            <TextArea name="Message" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
