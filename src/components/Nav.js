import React, { useState } from "react"
import { Link } from "gatsby"
import SlideOut from "@ijsto/react-slideout"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CloseIcon from "@material-ui/icons/Close"

import "../styles/global.css"
import "../styles/nav.css"

export default function Nav() {
  const [slideOutIsOpen, setSlideOutIsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width:768px)")

  const openSlideOut = () => {
    setSlideOutIsOpen(true)
  }

  const closeSlideOut = () => {
    setSlideOutIsOpen(false)
  }

  const mobileOrDesktopNav = () => {
    if (isDesktop === null) return null
    if (isDesktop) {
      return (
        <>
          <Link className="navItem" to="/gallery">
            Gallery
          </Link>
          <Link className="navItem" to="/visualization">
            Visualization
          </Link>
          <Link className="navItem" to="/about">
            About
          </Link>
          <Link className="navItem" to="/contact">
            Contact
          </Link>
        </>
      )
    } else {
      return (
        <>
          <svg
            onClick={openSlideOut}
            viewBox="0 0 100 50"
            width="40"
            height="40"
          >
            <rect width="80" height="8" rx="8"></rect>
            <rect y="25" width="80" height="8" rx="8"></rect>
            <rect y="50" width="80" height="8" rx="8"></rect>
          </svg>
          <SlideOut
            isOpen={slideOutIsOpen}
            onClose={closeSlideOut}
            closeComponent={
              <CloseIcon fontSize="large" className="closeIcon" />
            }
            offsetTop={0}
            slideFrom="right"
          >
            <div className="hamburgerBody">
              <div className="hamburgerItems">
                <div className="hamburgerItem">
                  <Link className="logoText" to="/">
                    Grounded
                  </Link>
                </div>
                <div className="hamburgerItem">
                  <Link to="/gallery">Gallery</Link>
                </div>
                <div className="hamburgerItem">
                  <Link to="/visualization">Visualization</Link>
                </div>
                <div className="hamburgerItem">
                  <Link to="/about">About</Link>
                </div>
                <div className="hamburgerItem">
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </SlideOut>
        </>
      )
    }
  }

  return (
    <nav style={{ position: "relative", zIndex: "11" }}>
      <Link className="logo navItem" to="/">
        Grounded
      </Link>
      <div className="subpages">{mobileOrDesktopNav()}</div>
    </nav>
  )
}
