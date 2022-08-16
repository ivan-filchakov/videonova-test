import { useEffect } from "react"

import "./assets/css/normalize.css"
import "./assets/css/index.css"

import FontFaceObserver from "fontfaceobserver"
import "./assets/fonts/chillax/css/font.css"
import "./assets/fonts/plus-jakarta-display/css/font.css"

function StyleLoader() {
  useEffect(() => {
    const Fonts = [
      // main fonts
      new FontFaceObserver("Plus-Jakarta-Display", {}).load(),
      new FontFaceObserver("Plus-Jakarta-Display", { weight: 500 }).load(),
      new FontFaceObserver("Plus-Jakarta-Display", { weight: 700 }).load(),

      // font for headings
      new FontFaceObserver("Chillax", { weight: 600 }).load(),
    ]

    // When Font is loaded, add a font-family using Open Sans to the body
    Promise.all(Fonts).then(() => {
      document.body.classList.add("fontLoaded")
    })
  }, [])
  return null
}

export default StyleLoader
