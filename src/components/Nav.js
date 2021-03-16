import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/nav.css"

export default function Nav() {
  return (
    <nav>
      <div>
        <Link>Gallery</Link>
        <Link>Visualization</Link>
        <Link>About</Link>
      </div>
    </nav>
  )
}
