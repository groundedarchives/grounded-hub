import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

export default function DetailedArchiveInfo({ image, toggleInfo }) {
  const handleClick = () => {
    toggleInfo(-1)
  }

  return (
    <div className="archiveInfo" key={-1}>
      <div className="header">
        <button onClick={handleClick}>x</button>
      </div>
      <div className="body">
        <div>
          <img className="imageThumbnail" src={image.src} alt="" />
        </div>
        <div className="imageInfo">
          <AudioPlayer
            src={image.audioSource}
            customAdditionalControls={[]}
            customVolumeControls={[]}
            defaultCurrentTime=""
            defaultDuration=""
          ></AudioPlayer>
          <h2 className="transcriptSubtitle">Audio Transcription</h2>
          <p>{image.transcript}</p>
        </div>
      </div>
    </div>
  )
}
