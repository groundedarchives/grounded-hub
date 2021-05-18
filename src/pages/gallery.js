import React, { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ArchiveInfo from "../components/ArchiveInfo"
import Chip from "@material-ui/core/Chip"

import "../styles/gallery.css"
import { photos } from "../components/Photos"

const filterParameters = [
  {
    id: "Appreciation",
    label: "Appreciation",
    name: "Appreciation",
    value: "Appreciation",
  },
  {
    id: "FeelingGrounded",
    label: "Feeling Grounded",
    name: "FeelingGrounded",
    value: "FeelingGrounded",
  },
  {
    id: "Perseverance",
    label: "Perseverance",
    name: "Perseverance",
    value: "Perseverance",
  },

  {
    id: "HumanConnection",
    label: "Human Connection",
    name: "HumanConnection",
    value: "HumanConnection",
  },
  {
    id: "HouseholdItems",
    label: "Household Items",
    name: "HouseholdItems",
    value: "HouseholdItems",
  },
]

export default function Gallery(props) {
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [filters, setFilters] = useState({})
  const [displayedPhotos, setDisplayedPhotos] = useState(photos)
  const [allPhotos, setAllPhotos] = useState(photos)

  const toggleImageDetails = arrayIndex => {
    if (selectedSubmission !== null) {
      setSelectedSubmission(null)
      return
    } else {
      setSelectedSubmission(arrayIndex)
    }
  }

  const handleClick = item => {
    const newChosenFilters = filters

    if (!newChosenFilters[item.id]) newChosenFilters[item.id] = true
    else newChosenFilters[item.id] = false

    setFilters(newChosenFilters)

    const noFilters =
      Object.keys(newChosenFilters).length === 0 ||
      Object.values(newChosenFilters).every(value => value === false)

    if (noFilters) {
      setDisplayedPhotos(allPhotos)
      return
    }

    let newDisplayedPhotos = []

    for (const photo of allPhotos) {
      for (const filter in filters) {
        const isToggled = filters[filter]
        const photoHasFilterProperty = photo.themes[filter]

        if (isToggled && photoHasFilterProperty) {
          newDisplayedPhotos.push(photo)
          break
        }
      }
    }

    setDisplayedPhotos(newDisplayedPhotos)
  }

  // const handleChange = event => {
  //   // updating an object instead of a Map
  //   setchosenFilters({
  //     ...chosenFilters,
  //     [event.target.name]: event.target.checked,
  //   })
  //   // update the state by creating a new Map
  // }

  // const resetArchive = event => {
  //   event.preventDefault()
  //   setdisplayedPhotos(photos)
  // }

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   let filteredPhotos = []
  //   let filterItem = ""
  //   let filterTrue = false
  //   let keys = Object.keys(chosenFilters)
  //   let values = Object.values(chosenFilters)
  //   for (let i = 0; i < keys.length; ++i) {
  //     filterItem = keys[i]
  //     filterTrue = values[i]
  //     for (let j = 0; j < photos.length; ++j) {
  //       let themes = photos[j].themes
  //       if (themes.includes(filterItem) && filterTrue) {
  //         let newItem = photos[j]
  //         filteredPhotos = filteredPhotos.concat(newItem)
  //       }
  //     }
  //   }

  //   // console.log(filteredPhotos)
  //   setdisplayedPhotos(filteredPhotos)
  // }

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
            <div className="filters">
              {filterParameters.map((item, i) => (
                <Chip
                  key={i}
                  onClick={() => handleClick(item)}
                  label={item.label}
                ></Chip>
              ))}
            </div>
          </div>
          <div className="grid">
            {displayedPhotos.map((image, i) => (
              <ArchiveInfo
                key={i}
                image={image}
                arrayIndex={i}
                toggleInfo={toggleImageDetails}
                willShowInfo={i === selectedSubmission}
              />
              // for each filter in filter list
              // if filter is in image themes list, render it
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
