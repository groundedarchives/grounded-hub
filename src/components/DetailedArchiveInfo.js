import React, { useEffect, useRef } from "react"
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

  return (
    <div className="archiveInfo" key={-1} ref={imageInfo}>
      <div className="header">
        <button onClick={handleClose}>x</button>
      </div>
      <div className="body">
        <div>
          <img className="imageThumbnail" src={imageData.src} alt="" />
        </div>
        <div className="imageInfo">
          {imageData.audioSource !== "" ? (
            <>
              <AudioPlayer
                src={imageData.audioSource}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                defaultCurrentTime=""
                defaultDuration=""
              ></AudioPlayer>
              <h2 className="transcriptSubtitle">Audio Transcription</h2>
              <p style={{ maxHeight: 400, overflowY: "scroll" }}>
                {imageData.transcript}
              </p>
            </>
          ) : (
            <>
              <h2 className="transcriptSubtitle">Audio not found</h2>
              <p>{imageData.transcript}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
