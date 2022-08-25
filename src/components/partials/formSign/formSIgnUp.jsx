import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { InputText, Text } from "../../primitives"

function FormSignUp({
  warning,
  warningMessage,
  getFormState,
  loginValue,
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
  const getPasswordRepeat = (el) => {
    setFormState({
      ...formState,
      passwordRepeat: el.value,
    })
  }
  useEffect(() => {
    if (typeof getFormState === "function") getFormState(formState)
  }, [formState])

  return (
    <div className="formInputs">
      {warning && (
        <div className="formInputs__warning">
          <div className="formWarning">
            <Text color="#000000">{warningMessage[1]}</Text>
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
        />
      </div>
      <div className="formInputs__row">
        <InputText
          label={inputLabels.passwordRepeat}
          onChange={getPasswordRepeat}
          type="password"
        />
      </div>
    </div>
  )
}

export default FormSignUp
FormSignUp.propTypes = {
  warning: PropTypes.bool.isRequired,
  warningMessage: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFormState: PropTypes.func.isRequired,
  loginValue: PropTypes.string,
  inputLabels: PropTypes.shape({
    login: PropTypes.string,
    password: PropTypes.string,
    passwordRepeat: PropTypes.string,
  }).isRequired,
}
FormSignUp.defaultProps = {
  loginValue: undefined,
}
