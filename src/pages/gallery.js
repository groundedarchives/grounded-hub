import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import GalleryModal from "../components/GalleryModal"
import "../styles/global.css"
import { photos } from "../components/Photos";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import Drawer from 'rc-drawer';
import ReactDom from 'react-dom';
import { Row } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function Gallery() {
  // put HTML within these brackets
  return (
    <>
      <Nav />
      <section>
      <p className="title-L">Gallery</p>
      <div className="row">
        <div className="grid-container">
            <div className="filter-col three-margin">
              <p className="title-S">Filter Entries</p>
              <Form>
                <Form.Group id="filter-entries">
                </Form.Group>
              </Form>
            </div>
            <div className="grid-content">
              <Grid container
                spacing={1} >
                {photos.map((image, i) => (
                  <Grid item s className="small-margin" key={image.src}>
                    <GalleryModal key={image.src} src={image.src} width={image.thumbnailWidth} transcript={image.transcript} themes={image.themes} audioSource={image.audioSource} height={image.thumbnailHeight}></GalleryModal>
                  </Grid>
                ))}
              </Grid>
            </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
