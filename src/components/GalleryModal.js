import React, { Component, useState , useEffect} from "react";
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import Card from "react-bootstrap/Card"
import "../styles/gallery.css"

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            width: 0,
            height:0

        }
        this.togglePanel = this.togglePanel.bind(this);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    } 
    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }


    render() {

        const mystyle = {
            maxWidth: this.props.width,
            maxHeight: this.props.height,

        };
        return (<div>
            <div style={{width: this.props.width}} onClick={(e) => this.togglePanel(e)} className='header'>
                <img alt="image" src={this.props.src} style={mystyle}></img>
                </div>
            {this.state.open ? (
                <SlideDown className='content'>
                        <div style={{width: this.props.width}}>
                        <div>
                            <h1>:)</h1>
                            <p> My content</p>
                        </div>
                    </div>
                </SlideDown>
            ) : null}
        </div>);
    }
}
export default Collapsible;