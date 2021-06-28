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
        <div className="body">
          <h1 className="title-L">Contact</h1>
          <h2>Connect with Grounded</h2>
          <p>Email us at groundedarchives@gmail.com</p>
          <form
            action="/thank"
            className="formWrapper"
            method="POST"
            data-netlify="true"
            name="contact"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="firstSection">
              <div className="topInputs">
                <TextInput title="Full Name" name="name" />
                <TextInput
                  isPhone={true}
                  title="Phone Number"
                  name="phone-number"
                />
              </div>
              <TextInput title="Email" name="email" />
              <TextInput
                title="Organization (if applicable)"
                name="organization"
              />
            </div>
            <CheckboxInputs
              title="How can we help you?"
              name="question-category"
              inputNames={[
                "General Inquiry",
                "Collaboration Interest",
                "Media Request",
                "Story submission Interest",
                "Museum or Exhibit Interest",
              ]}
            />
            <TextArea title="Message" name="message" />
            <button className="submitButton pageButton" type="submit">
              Submit Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
