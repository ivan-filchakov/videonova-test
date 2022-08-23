import React, { useState } from "react"
import PropTypes, {shape} from "prop-types"
import Icon from "../icon"
import InputHeading from "./inputHeading"
import "./style.css"

function InputText({ type, label, value, placeholder, onChange, popUp }) {

  const InputTag = type === "textarea" ? "textarea" : "input"
  const inputHeight = type === "textarea" ? "100%" : "auto"
  const inputProps = {
    id: [type, label.split(" ")].flat().join("-").toLowerCase(),
    placeholder: placeholder,
    maxLength: type === "textarea" ? 1000 : 64
  }

  const [inputState, setInputState] = useState({
    type: type,
    value: value,
  })

  function showPass() {
    if (inputState.type === "password") setInputState({
      ...inputState,
      type: "text",
    })
    if (inputState.type === "text") setInputState({
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

  const showPassIcon = inputState.type === "password" ? "CustomEyeClosed" : "CustomEye"

  return (
    <div className="inputText" style={{ height: inputHeight }}>
      <InputHeading id={inputProps.id} label={label} popUp={popUp}/>
      <div className="inputText__input">
        <InputTag
          type={inputState.type}
          value={inputState.value}
          onChange={handleInputChange}
          {...inputProps}
        />
        {type === "password" && (
          <div onClick={showPass} className="inputText__icon">
            <Icon name={showPassIcon} size="20px" color="#000"/>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputText
InputText.propTypes = {
  type: PropTypes.oneOf(["text", "password", "textarea"]).isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  popUp: shape({
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
