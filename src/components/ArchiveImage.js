import React, { useState, memo } from "react"
import Skeleton from "react-loading-skeleton"

import "../styles/global.css"
import "../styles/index.css"

const areEqual = (prevProps, nextProps) => {
  return prevProps.image === nextProps.image
}

// convert to Gatsby <Img/>
// https://engineering.belchior.me/creating-a-custom-photo-gallery-using-gatsbyjs-and-css-grid-ck8ghm0vn01vkz3s1ulux9v17

const ArchiveImage = memo(({ image, toggleInfo, arrayIndex }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return <div>{image}</div>
}, areEqual)

export default ArchiveImage
