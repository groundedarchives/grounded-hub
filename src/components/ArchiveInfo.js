import React, { memo } from "react"
import "./ArchiveImage"
import ArchiveImage from "./ArchiveImage"
import DetailedArchiveInfo from "./DetailedArchiveInfo"
import "../styles/global.css"
import "../styles/index.css"

const ArchiveInfo = memo(({ image, toggleInfo, arrayIndex, willShowInfo }) => {
  if (willShowInfo) {
    return (
      <>
        <ArchiveImage
          image={image}
          toggleInfo={toggleInfo}
          arrayIndex={arrayIndex}
        ></ArchiveImage>
        <DetailedArchiveInfo
          image={image}
          toggleInfo={toggleInfo}
        ></DetailedArchiveInfo>
      </>
    )
  }

  return (
    <ArchiveImage
      image={image}
      toggleInfo={toggleInfo}
      arrayIndex={arrayIndex}
    ></ArchiveImage>
  )
})

export default ArchiveInfo
