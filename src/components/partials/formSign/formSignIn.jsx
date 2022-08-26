import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { InputText, Text } from "../../primitives"

function FormSignIn({
  warning,
  warningMessage,
  getFormState,
  loginValue,
  popUpLabel,
  inputLabels,
}) {
  const [formState, setFormState] = useState({
    login: loginValue,
  })
  const getLogin = (el) => {
    setFormState({
      ...formState,
      login: el.value,
    })
  }
  const getPassword = (el) => {
    setFormState({
      ...formState,
      password: el.value,
    })
  }
  useEffect(() => {
    if (typeof getFormState === "function") getFormState(formState)
  }, [formState])

  const popUp = {
    label: popUpLabel,
    onClick: "",
  }

  return (
    <div className="formInputs">
      {warning && (
        <div className="formInputs__warning">
          <div className="formWarning">
            <Text color="#000000">{warningMessage}</Text>
          </div>
        </div>
      )}
      <div className="formInputs__row">
        <InputText
          label={inputLabels.login}
          onChange={getLogin}
          type="text"
          value={loginValue}
        />
      </div>
      <div className="formInputs__row">
        <InputText
          label={inputLabels.password}
          onChange={getPassword}
          type="password"
          popUp={popUp}
        />
      </div>
    </div>
  )
}

export default FormSignIn
FormSignIn.propTypes = {
  warning: PropTypes.bool.isRequired,
  warningMessage: PropTypes.string,
  getFormState: PropTypes.func.isRequired,
  loginValue: PropTypes.string,
  popUpLabel: PropTypes.string.isRequired,
  inputLabels: PropTypes.shape({
    login: PropTypes.string,
    password: PropTypes.string,
    passwordRepeat: PropTypes.string,
  }).isRequired,
}
FormSignIn.defaultProps = {
  warningMessage: undefined,
  loginValue: undefined,
}
