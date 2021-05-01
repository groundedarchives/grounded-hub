import React, { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import DetailedSubmissionItem from "../components/DetailedSubmissionItem"
import Form from "react-bootstrap/Form"
import isEqual from "lodash/isEqual"

import "../styles/gallery.css"
import { photos } from "../components/Photos"

export default function Gallery(props) {
  const [displayedSubmissions, setDisplayedSubmissions] = useState(
    photos.map((image, i) => (
      <img
        key={i}
        className="gridImage"
        src={image.src}
        onClick={() => toggleImageDetails(image, i)}
      ></img>
    ))
  )
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [checkedItems, setCheckedItems] = useState(new Map())

  const addToArray = (original, indexToAddAt, itemToAdd) => [
    ...original.slice(0, indexToAddAt),
    itemToAdd,
    ...original.slice(indexToAddAt),
  ]

  const toggleImageDetails = (image, arrayIndex) => {
    if (selectedSubmission != null && image.src === selectedSubmission.src) {
      setDisplayedSubmissions(displayedSubmissions)
      setSelectedSubmission(null)
      return
    }

    const submissionsWithDetailView = addToArray(
      displayedSubmissions,
      arrayIndex + 1,
      <DetailedSubmissionItem
        key="detailed"
        image={image}
        hideImage={toggleImageDetails}
      />
    )

    setDisplayedSubmissions(submissionsWithDetailView)
    setSelectedSubmission(image)
  }

  return (
    <>
      <Nav />
      <section>
        <p className="title-L">Gallery</p>
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
          <div className="grid">{displayedSubmissions}</div>
        </div>
      </section>
      <Footer />
    </>
  )
}
