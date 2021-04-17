import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import GalleryModal from "../components/GalleryModal"
import "../styles/global.css"
import { photos } from "../components/Photos";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

export default function Gallery() {
  // put HTML within these brackets
  return (
    <>
      <Nav />
      <section>
        <Container className="grid">

          <h1 className="title-L">Gallery</h1>
          <Grid container
            spacing={1} className="grid">

            {photos.map((image, i) => (
              <Grid item s className="small-margin">
                <GalleryModal key={i} src={image.src} width={image.thumbnailWidth} height={image.thumbnailHeight}></GalleryModal>
              </Grid>
            ))}
          </Grid>




        </Container>
      </section>


      <Footer />
    </>
  )
}
