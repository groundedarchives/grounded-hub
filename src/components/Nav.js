import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/nav.css"

export default function Nav() {
  return (
    <nav>
      <Link to="/">Grounded</Link>
      <div className="subpages">
        <Link to="/gallery">Gallery</Link>
        <Link to="/visualization">Visualization</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
