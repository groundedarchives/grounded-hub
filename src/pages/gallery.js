import React, { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import GalleryImage from "../components/GalleryImage"
import "../styles/global.css"
import { photos } from "../components/Photos"
import Form from "react-bootstrap/Form"

export default function Gallery(props) {
  const [checkedItems, setCheckedItems] = useState(new Map())

  return (
    <>
      <Nav />
      <section>
        <p className="title-L">Gallery</p>
        <div className="row">
          <div className="grid-container">
            <div className="filter-col three-margin">
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
                <GalleryImage
                  key={image.src}
                  imgSrc={image.src}
                  transcript={image.transcript}
                  themes={image.themes}
                  audioSrc={image.audioSource}
                ></GalleryImage>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
