import React from "react"

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "../styles/global.css"
import "../styles/index.css"

import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"

export default class GalleryItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.image}
        <h2 className="gallery-image-title">{this.props.title}</h2>
        <AudioPlayer
          src={this.props.audio}
          layout="horizontal"
          preload="metadata"
          timeFormat="mm:ss"
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          defaultDuration={this.props.duration}
          customIcons={{
            play: <PlayArrowIcon fontSize="large" />,
            pause: <PauseIcon fontSize="large" />,
          }}
        />

        <Popup
          trigger={
            <button className="pageButton"> See Full Transcription</button>
          }
          modal
        >
          <div>{this.props.transcription}</div>
        </Popup>
      </div>
    )
  }
}
