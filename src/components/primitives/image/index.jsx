import React from "react"
import PropTypes from "prop-types"
import "./style.css"

function Image({ src, fit, alt }) {
  const className = `image${fit ? ` image_${fit}` : ""}`
  return <img className={className} src={src} alt={alt} />
}

export default Image
Image.propTypes = {
  /**
   * path to image source file
   */
  src: PropTypes.string.isRequired,
  /**
   * image alt description
   */
  alt: PropTypes.string,
  /**
   * Адаптація розміру зображення відносно контейнера - Cover, Contain, Center. Якщо параметр fit не вказаний - рендериться inline-block.
   */
  fit: PropTypes.oneOf(["cover", "contain", "center"]).isRequired,
}

Image.defaultProps = {
  alt: "image",
}
