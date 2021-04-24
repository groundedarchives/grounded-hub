import React from "react"
import "../styles/global.css"
import "../styles/index.css"

export default function GalleryItem(props) {
    return (
        <div>
            <img src={props.name} height="300"></img>
            <audio className="audio-player"></audio>
            <button className="pop-up-button">See Full Transcription</button>
        </div>
    )
}