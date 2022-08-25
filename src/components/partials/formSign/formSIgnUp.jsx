import React, {useEffect, useState} from "react"
import { InputText, Text } from "../../primitives"

function FormSignUp({ warning, warningMessage, getFormState, loginValue }) {

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
    if (typeof getFormState === "function" ) getFormState(formState)
  }, [formState])

  return (
    <div className="formInputs">
      {warning && (
        <div className="formInputs__warning">
          <div className="formWarning">
            <Text color="#000000">
              {warningMessage.noMatch}
            </Text>
          </div>
        </div>
      )}
      <div className="formInputs__row">
        <InputText label="Name" onChange={getLogin} type="text" value={loginValue}/>
      </div>
      <div className="formInputs__row">
        <InputText label="Password" onChange={getPassword} type="password"/>
      </div>
      <div className="formInputs__row">
        <InputText label="Repeat password" onChange={getPasswordRepeat} type="password"/>
      </div>
    </div>
  )
}

export default FormSignUp
