import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import AdaptiveLink from "../adaptiveLink"
import Icon from "../icon"
import InputHeading from "./inputHeading"
import "./style.css"

function InputText({ type, label, value, placeholder, onChange, popUp }) {
  const InputTag = type === "textarea" ? "textarea" : "input"
  const inputHeight = type === "textarea" ? "100%" : "auto"
  const inputProps = {
    id: [type, label.split(" ")].flat().join("-").toLowerCase(),
    placeholder,
    maxLength: type === "textarea" ? 1000 : 64,
  }

  const [inputState, setInputState] = useState({
    type,
    value,
  })

  const showPassIcon =
    inputState.type === "password" ? "CustomEyeClosed" : "CustomEye"

  function showPass() {
    setInputState({
      ...inputState,
      type: inputState.type === "password" ? "text" : "password",
    })
  }

  const handleInputChange = (el) => {
    setInputState({
      ...inputState,
      value: el.target.value,
    })
  }

  useEffect(() => {
    if (typeof onChange === "function") onChange(inputState)
  }, [inputState])

  return (
    <div className="inputText" style={{ height: inputHeight }}>
      <InputHeading id={inputProps.id} label={label} popUp={popUp} />
      <div className="inputText__input">
        <InputTag
          type={inputState.type}
          value={inputState.value}
          onChange={handleInputChange}
          id={inputProps.id}
          placeholder={inputProps.placeholder}
          maxLength={inputProps.maxLength}
        />
        {type === "password" && (
          <AdaptiveLink action={() => showPass()} className="inputText__icon">
            <Icon name={showPassIcon} size="20px" color="#000" />
          </AdaptiveLink>
        )}
      </div>
    </div>
  )
}

export default InputText
InputText.propTypes = {
  /**
   * Input type options
   */
  type: PropTypes.oneOf(["text", "password", "textarea"]).isRequired,
  /**
   * Input label
   */
  label: PropTypes.string.isRequired,
  /**
   * Sets predeterminated input value
   */
  value: PropTypes.string,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Handles function on input change with input content as argument
   */
  onChange: PropTypes.func.isRequired,
  /**
   * If passed - creates pop-up button
   */
  popUp: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),
}
InputText.defaultProps = {
  value: undefined,
  placeholder: undefined,
  popUp: undefined,
}
