import React from "react"
import PropTypes from "prop-types"
import useIconLibraries from "./iconLibraries"

function Icon({ name, size, color }) {
  const iconLibraries = useIconLibraries()
  /**
   * separates lib name prefix from props.name value
   * it is cutted by second uppercase letter from props.name string
   * @param str {string}
   * @return {string}
   */
  const libraryKey = (str) => {
    let key = str[0]
    for (let i = 1; i < str.length; i += 1) {
      if (str[i] === str[i].toUpperCase()) break
      key += str[i]
    }
    return key
  }
  /**
   * Renders icon from determined library (Custom or react-icons)
   * @param n {string} - icon name, starts from library prefix
   * @param s {string} - icon size
   * @param c {string} - icon color (only fill)
   * @return {JSX.Element}
   */
  function getIcon(n, s, c) {
    const iconLibrary = iconLibraries[libraryKey(n)]
    const NewIcon = iconLibrary[n]
    return <NewIcon size={s} width={s} height={s} fill={c} />
  }
  return getIcon(name, size, color)
}

export default Icon
Icon.propTypes = {
  /**
   * Icon name - key for icon render (works with react-icons keys aswell)
   */
  name: PropTypes.string.isRequired,
  /**
   * Icon fill color
   */
  color: PropTypes.string.isRequired,
  /**
   * Icon width and height
   */
  size: PropTypes.string.isRequired,
}
