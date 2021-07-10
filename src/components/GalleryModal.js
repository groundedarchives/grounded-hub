import React, { Component, useState, useEffect } from "react"
import { SlideDown } from "react-slidedown"
import "react-slidedown/lib/slidedown.css"
import Card from "react-bootstrap/Card"
import "../styles/gallery.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Collapsible extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      width: 0,
      height: 0,
      pictureWidth: this.props.width,
      pictureHeight: this.props.height,
      showAudioPlayer:true
    }
    this.togglePanel = this.togglePanel.bind(this)
    this.getAudioPlayerShow=this.getAudioPlayerShow.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    this.getAudioPlayerShow();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this))
  }

  getAudioPlayerShow() {
    if (this.props.audioSource=="") {
      this.setState({
        showAudioPlayer:false
      })
    }
  }
  updateWindowDimensions() {
    this.setState(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      () => {
        if (this.state.width < 500) {
          let tempWidth = this.state.pictureWidth / 3
          let tempHeight = this.state.pictureHeight / 3
          this.setState({
            pictureHeight: tempHeight,
            pictureWidth: tempWidth,
          })
        }
      }
    )
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open })
  }

  render() {
    const mystyle = {
      maxWidth: this.state.pictureWidth,
      maxHeight: this.state.pictureHeight,
    }
    return (
      <div>
        <div
          style={{ width: this.state.pictureWidth }}
          onClick={e => this.togglePanel(e)}
          className="header"
        >
          <img alt="image" src={this.props.src} style={mystyle}></img>
        </div>
        {this.state.open ? (
          <SlideDown className="content" style={{ width: this.state.pictureWidth }} className="row-center">
            <div style={{ width: this.state.pictureWidth}} >
                {this.state.showAudioPlayer ? (
                <AudioPlayer
                src={this.props.audioSource}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                defaultCurrentTime="" 
                defaultDuration=""
                style={{width:'300px'}}
                ></AudioPlayer>
                ):null}
              <div className="transcript" style={{ width: this.state.pictureWidth}} className="row-center">
                <p>{this.props.transcript}</p>
              </div>
            </div>
          </SlideDown>
        ) : null}
      </div>
    )
  }
}
export default Collapsible
