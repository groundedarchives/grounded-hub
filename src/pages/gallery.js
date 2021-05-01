import React, { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ArchiveInfo from "../components/ArchiveInfo"
import Form from "react-bootstrap/Form"

import "../styles/gallery.css"
import { photos } from "../components/Photos"

export default function Gallery(props) {
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [checkedItems, setCheckedItems] = useState(new Map())

  const toggleImageDetails = arrayIndex => {
    if (selectedSubmission !== null) {
      setSelectedSubmission(null)
      return
    } else {
      setSelectedSubmission(arrayIndex)
    }
  }

  return (
    <>
      <Nav />
      <section>
        <h1 className="title-L">The Archive</h1>
        <p className="pageSubtitle">
          The Archive includes all submissions in their original form. View the
          images, and listen to the audio recordings at random, or use the
          Sorting tool to discover the salient themes and patterns that emerged
          from these stories.
        </p>
        <div className="grid-container">
          <div className="filter-col">
            <p className="title-S">Filter Entries</p>
            <Form>
              <Form.Group id="filter-entries">
                <Form.Check
                  id="human_connections_select"
                  label="Human Connections"
                  name="Human Connections"
                  value="Human Connections"
                />
                <Form.Check
                  id="channeling_select"
                  label="Channeling Negativity"
                  name="Channeling Negativity"
                  value="Channeling Negativity"
                />
                <Form.Check
                  id="perseverance_select"
                  label="Perseverance"
                  name="Perseverance"
                  value="Perseverance"
                />
                <Form.Check
                  id="feeling_grounded_select"
                  label="Feeling Grounded"
                  name="Feeling Grounded"
                  value="Feeling Grounded"
                />
                <Form.Check
                  id="household_item_select"
                  label="Household Items"
                  name="Household Items"
                  value="Household Items"
                />
                <Form.Check
                  id="learning_select"
                  label="Learning New Things"
                  name="Learning New Things"
                  value="Learning New Things"
                />
                <Form.Check
                  id="calm_select"
                  label="Finding Calm"
                  name="Finding Calm"
                  value="Finding Calm"
                />
                <Form.Check
                  id="appreciation_select"
                  label="Appreciation"
                  name="Appreciation"
                  value="Appreciation"
                />
                <Form.Check
                  id="escape_select"
                  label="Having an Escape"
                  name="Having an Escape"
                  value="Having an Escape"
                />
                <Form.Check
                  id="hope_select"
                  label="Hope"
                  name="Hope"
                  value="Hope"
                />
              </Form.Group>
              <button className="button">Apply Changes</button>
            </Form>
          </div>
          <div className="grid">
            {photos.map((image, i) => (
              <ArchiveInfo
                key={i}
                image={image}
                arrayIndex={i}
                toggleInfo={toggleImageDetails}
                willShowInfo={i === selectedSubmission}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
