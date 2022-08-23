import React from "react"
import PropTypes from "prop-types"
import Heading from "../heading"
import Button from "../button"

function InputHeading({ id, label, popUp }) {
  if (!label && !popUp) return <label htmlFor={id} hidden />

  return (
    <div className="inputText__heading">
      <Heading h={3}>
        <label htmlFor={id}>{label}</label>
      </Heading>
      {popUp && (
        <div className="inputText__popUp">
          <Button onClick={popUp.onClick} variant="link" label={popUp.label} />
        </div>
      )}
    </div>
  )
}

export default InputHeading
InputHeading.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}
InputHeading.defaultProps = {
  label: undefined,
}
