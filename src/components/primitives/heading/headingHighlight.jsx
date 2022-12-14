import React from "react"
import PropTypes from "prop-types"

function headingHighlight(text, accent, color) {
  const words = text.split(" ")
  function calcIndex(i) {
    if (i < 0) return 1
    return words.length < i ? words.length : Math.floor(i)
  }
  const accentIndex = calcIndex(accent)

  const start = words.slice(0, accentIndex - 1).join(" ")
  const accentWord = (
    <span key={text} style={{ color }}>
      {words[accentIndex - 1]}
    </span>
  )
  const end = words.slice(accentIndex).join(" ")

  return [start, " ", accentWord, " ", end]
}

export default headingHighlight
headingHighlight.propTypes = {
  /**
   * Heading text string
   */
  text: PropTypes.string.isRequired,
  /**
   * Index of the word to be highlighted (starts from the 1)
   */
  accent: PropTypes.number.isRequired,
}
