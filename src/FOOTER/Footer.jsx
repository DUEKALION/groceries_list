import React from 'react'
import "./footer.css"

export default function Footer({ length }) {


  return (
    <footer>

        <p>
            {length} List  of {length === 1 ? "item" : "items"}
        </p>
    </footer>
  )
}
