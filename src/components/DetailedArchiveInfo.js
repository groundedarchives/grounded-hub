import React, { useEffect, useRef } from "react"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"
import CloseIcon from "@material-ui/icons/Close"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

export default function DetailedArchiveInfo({ imageData, toggleInfo }) {
  const imageInfo = useRef(null)

  const handleClose = () => {
    toggleInfo(-1)
  }

  useEffect(() => {
    setTimeout(() => {
      imageInfo.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 50)
  }, [])

  const displayImageContent = () => {
    if (imageData.textSubmission) {
      return (
        <>
          <h2 className="transcriptSubtitle">User text</h2>
          <p>{imageData.transcript}</p>{" "}
        </>
      )
    }

    if (imageData.audioSource === "") {
      return (
        <>
          <h2 className="transcriptSubtitle">
            User did not upload audio or text
          </h2>
        </>
      )
    }

    return (
      <>
        <AudioPlayer
          src={imageData.audioSource}
          preload="metadata"
          layout="horizontal-reverse"
          timeFormat="mm:ss"
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          defaultDuration={imageData.duration !== "0" ? imageData.duration : ""}
          customIcons={{
            play: <PlayArrowIcon fontSize="large" />,
            pause: <PauseIcon fontSize="large" />,
          }}
        />
        <h2 className="transcriptSubtitle">Audio Transcription</h2>
        <p style={{ maxHeight: 400, overflowY: "scroll" }}>
          {imageData.transcript}
        </p>
      </>
    )
  }

  return (
    <div className="archiveInfo" key={-1} ref={imageInfo}>
      <div className="header">
        <CloseIcon onClick={handleClose} fontSize="large" />
      </div>
      <div className="body">
        <div>
          <img className="imageThumbnail" src={imageData.src} alt="" />
        </div>
        <div className="imageInfo">{displayImageContent()}</div>
      </div>
    </div>
  )
}
