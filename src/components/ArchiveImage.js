import React, { useState, memo } from "react"
import "../styles/global.css"
import "../styles/index.css"

const areEqual = (prevProps, nextProps) => {
  return prevProps.image === nextProps.image
}

// convert to Gatsby <Img/>
// https://engineering.belchior.me/creating-a-custom-photo-gallery-using-gatsbyjs-and-css-grid-ck8ghm0vn01vkz3s1ulux9v17

const ArchiveImage = memo(({ image, toggleInfo, arrayIndex }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <img
      className="gridImage"
      style={isLoaded ? {} : { display: "none" }}
      src={image.src}
      onClick={() => toggleInfo(arrayIndex)}
      onLoad={() => setIsLoaded(true)}
    ></img>
  )
}, areEqual)

export default ArchiveImage
