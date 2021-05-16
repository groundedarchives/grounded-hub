import React, { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ArchiveInfo from "../components/ArchiveInfo"
import Form from "react-bootstrap/Form"

import "../styles/gallery.css"
import { photos } from "../components/Photos"

const checkboxes = [
  {
    id: "human_connections_select",
    label: "Human Connections",
    name: "Human Connections",
    value: "Human Connections",
  },
  {
    id: "channeling_select",
    label: "Channeling Negativity",
    name: "Channeling Negativity",
    value: "Channeling Negativity",
  },
  {
    id: "perseverance_select",
    label: "Perseverance",
    name: "Perseverance",
    value: "Perseverance",
  },
  {
    id: "feeling_grounded_select",
    label: "Feeling Grounded",
    name: "Feeling Grounded",
    value: "Feeling Grounded",
  },
  {
    id: "household_item_select",
    label: "Household Items",
    name: "Household Items",
    value: "Household Items",
  },
  {
    id: "learning_select",
    label: "Learning New Things",
    name: "Learning New Things",
    value: "Learning New Things",
  },
  {
    id: "calm_select",
    label: "Finding Calm",
    name: "Finding Calm",
    value: "Finding Calm",
  },
  {
    id: "appreciation_select",
    label: "Appreciation",
    name: "Appreciation",
    value: "Appreciation",
  },
  {
    id: "escape_select",
    label: "Having an Escape",
    name: "Having an Escape",
    value: "Having an Escape",
  },
  {
    id: "hope_select",
    label: "Hope",
    name: "Hope",
    value: "Hope",
  },
]

export default function Gallery(props) {
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [checkedItems, setCheckedItems] = useState({})
  const [filteredItems, setFilteredItems] = useState(photos)

  const toggleImageDetails = arrayIndex => {
    if (selectedSubmission !== null) {
      setSelectedSubmission(null)
      return
    } else {
      setSelectedSubmission(arrayIndex)
    }
  }

  const handleChange = event => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
    // update the state by creating a new Map
  }

  const resetArchive = event => {
    event.preventDefault()
    setFilteredItems(photos)
  }
  const handleSubmit = event => {
    event.preventDefault()
    let filteredPhotos = []
    let filterItem = ""
    let filterTrue = false
    let keys = Object.keys(checkedItems)
    let values = Object.values(checkedItems)
    for (let i = 0; i < keys.length; ++i) {
      filterItem = keys[i]
      filterTrue = values[i]
      for (let j = 0; j < photos.length; ++j) {
        let themes = photos[j].themes
        if (themes.includes(filterItem) && filterTrue) {
          let newItem = photos[j]
          filteredPhotos = filteredPhotos.concat(newItem)
        }
      }
    }

    // console.log(filteredPhotos)
    setFilteredItems(filteredPhotos)
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
            <Form onSubmit={handleSubmit}>
              <Form.Group id="filter-entries">
                {checkboxes.map(item => (
                  <Form.Check
                    id={item.id}
                    key={item.id}
                    label={item.label}
                    value={item.value}
                    name={item.name}
                    checked={checkedItems[item.name]}
                    onChange={handleChange}
                  />
                ))}
              </Form.Group>
              <button type="submit" className="button">
                Apply Changes
              </button>
            </Form>
            <Form onSubmit={resetArchive}>
              <button type="submit" className="button">
                Reset Changes
              </button>
            </Form>
          </div>
          <div className="grid">
            {filteredItems.map((image, i) => (
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
