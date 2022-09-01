import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { InputText, Text } from "../../primitives"

function FormSignIn({
  error,
  errorMessage,
  getFormState,
  loginValue,
  popUpLabel,
  inputLabels,
}) {
  const [formState, setFormState] = useState({ login: loginValue })
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
      {error && (
        <div className="formInputs__warning">
          <div className="formWarning">
            <Text color="#000000">{errorMessage}</Text>
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
  /**
   * Dynamic data determined by global state or parent component
   */
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
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
  errorMessage: undefined,
  loginValue: undefined,
}
