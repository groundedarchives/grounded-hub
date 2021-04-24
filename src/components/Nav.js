import React, { useState } from "react"
import { Link } from "gatsby"
import SlideOut from "@ijsto/react-slideout"
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
          <Link to="/gallery">Gallery</Link>
          <Link to="/visualization">Visualization</Link>
          <Link to="/about">About</Link>
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
            offsetTop={0}
            slideFrom="right"
          >
            <h2>My Slide Out</h2>
          </SlideOut>
        </>
      )
    }
  }

  return (
    <nav>
      <Link to="/">Grounded</Link>
      <div className="subpages">{mobileOrDesktopNav()}</div>
    </nav>
  )
}
