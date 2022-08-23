/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"
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

  function showPass() {
    if (inputState.type === "password")
      setInputState({
        ...inputState,
        type: "text",
      })
    if (inputState.type === "text")
      setInputState({
        ...inputState,
        type: "password",
      })
  }

  const handleInputChange = (el) => {
    setInputState({
      ...inputState,
      value: el.target.value,
    })
    if (typeof onChange === "function") onChange(inputState)
  }

  const showPassIcon =
    inputState.type === "password" ? "CustomEyeClosed" : "CustomEye"

  return (
    <div className="inputText" style={{ height: inputHeight }}>
      <InputHeading id={inputProps.id} label={label} popUp={popUp} />
      <div className="inputText__input">
        <InputTag
          type={inputState.type}
          value={inputState.value}
          onChange={handleInputChange}
          {...inputProps}
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
  label: PropTypes.string,
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
  label: undefined,
  value: undefined,
  placeholder: undefined,
  popUp: undefined,
}
