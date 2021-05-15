import React from "react"
import "../styles/global.css"
import "../styles/index.css"
import AudioPlayer from 'react-h5-audio-player';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class GalleryItem extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.name}></img>
                <AudioPlayer
                className="audio-player"
                src={this.props.audio}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                defaultCurrentTime="" 
                defaultDuration=""
                ></AudioPlayer>
                <Popup trigger={<button> See Full Transcription</button>} modal>
                    <div>{this.props.transcription}</div>
                </Popup>
            </div>
        )
    }
}
