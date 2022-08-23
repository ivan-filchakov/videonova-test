/*  eslint-disable  jsx-a11y/label-has-associated-control */
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
  /**
   * id for input's label tag
   */
  id: PropTypes.string.isRequired,
  /**
   * Label text
   */
  label: PropTypes.string,
  /**
   * If passed - creates pop-up button
   */
  popUp: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),
}
InputHeading.defaultProps = {
  label: undefined,
  popUp: undefined,
}
