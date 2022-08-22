import React from "react"

export default function headingHighlight(text, accent) {
  function Highlight({ children }) {
  return (
    <span style={{color:"red"}}> {children} </span>
  )
}
  const words = text.split(" ")
  const accentIndex = (accent > words.length) ? words.length : accent
  const start = words.slice(0, accentIndex - 1).join(" ")
  const accentWord = <Highlight children={words[accentIndex - 1]} />
  const end = words.slice(accentIndex).join(" ")
  return [start, accentWord, end]
}
