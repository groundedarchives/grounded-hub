import React, { memo } from "react"
import "./ArchiveImage"
import ArchiveImage from "./ArchiveImage"
import DetailedArchiveInfo from "./DetailedArchiveInfo"
import "../styles/global.css"
import "../styles/index.css"

const ArchiveInfo = memo(
  ({ image, imageData, toggleInfo, arrayIndex, willShowInfo }) => {
    if (willShowInfo) {
      return (
        <>
          <ArchiveImage image={image}></ArchiveImage>

          <DetailedArchiveInfo
            imageData={imageData}
            toggleInfo={toggleInfo}
          ></DetailedArchiveInfo>
        </>
      )
    }

    return <ArchiveImage image={image}></ArchiveImage>
  }
)

export default ArchiveInfo
