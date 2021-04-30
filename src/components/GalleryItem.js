import React from "react"
import "../styles/global.css"
import "../styles/index.css"
import ReactAudioPlayer from 'react-audio-player';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class GalleryItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            transcription: props.transcription
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.name}></img>
                <audio className="audio-player"></audio>
                <Popup trigger={<button> See Full Transcription</button>} modal>
                    <div>{this.state.transcription}</div>
                </Popup>
            </div>
        )
    }
}
