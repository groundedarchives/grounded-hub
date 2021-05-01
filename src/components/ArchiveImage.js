import React, { memo } from "react"
import "../styles/global.css"
import "../styles/index.css"

const areEqual = (prevProps, nextProps) => {
  return prevProps.image === nextProps.image
}

const ArchiveImage = memo(({ image, toggleInfo, arrayIndex }) => {
  return (
    <img
      className="gridImage"
      src={image.src}
      onClick={() => toggleInfo(arrayIndex)}
    ></img>
  )
}, areEqual)

export default ArchiveImage
