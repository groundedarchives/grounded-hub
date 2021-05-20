import React, { useState, memo } from "react"

import "../styles/global.css"
import "../styles/index.css"

const areEqual = (prevProps, nextProps) => {
  return prevProps.image === nextProps.image
}

// convert to Gatsby <Img/>
// https://engineering.belchior.me/creating-a-custom-photo-gallery-using-gatsbyjs-and-css-grid-ck8ghm0vn01vkz3s1ulux9v17

const ArchiveImage = memo(({ image }) => {
  console.log(image.props.alt)

  const makeBig = {
    Ballgame: 2,
    "Office Home": 2,
    Tractor: 3,
    "Pet rat": 3,
    Scrabble: 1,
    Screen: 3,
  }

  const colToStartAt = makeBig[image.props.alt]

  return <div>{image}</div>
}, areEqual)

export default ArchiveImage
