import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

export default function DetailedArchiveInfo({ image, toggleInfo }) {
  const handleClick = () => {
    toggleInfo(-1)
  }

  return (
    <div className="archiveInfo" key={-1} onClick={handleClick}>
      <img className="imageThumbnail" src={image.src} alt="" />
      <div>
        <AudioPlayer
          src={image.audioSource}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          defaultCurrentTime=""
          defaultDuration=""
        ></AudioPlayer>
        <p>{image.transcript}</p>
      </div>
    </div>
  )
}
