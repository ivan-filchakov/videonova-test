import React, { useEffect, useState } from "react"
import { Button, Heading, Text } from "../../primitives"
import useSignFormInfo from "./useStore"
import FormSignIn from "./formSignIn"
import FormSignUp from "./formSIgnUp"
import validateForm from "./formValidation"
import "./style.css"

function FormSign() {
  const { signInInfo, signUpInfo, warningMessage, inputLabels } =
    useSignFormInfo()

  const [formState, setFormState] = useState({
    registered: false,
    warning: false,
  })
  const getFormState = (el) => {
    setFormState({
      ...formState,
      login: el.login,
      password: el.password,
      passwordRepeat: el.passwordRepeat,
    })
  }
  const getWarning = (id) => {
    setFormState({
      ...formState,
      warning: true,
      message: warningMessage[id],
    })
  }
  const removeWarning = () => {
    setFormState({
      ...formState,
      warning: false,
      message: undefined,
    })
  }
  useEffect(() => {
    setTimeout(removeWarning, 2000)
  }, [formState.warning])

  const formInfo = formState.registered ? signInInfo : signUpInfo
  const Form = formState.registered ? FormSignIn : FormSignUp

  const swapClick = () => {
    setFormState({
      ...formState,
      registered: !formState.registered,
    })
  }

  const findErrors = (form) => {
    const result = validateForm(form)
    if (typeof result === "string") getWarning(result)
    if (typeof result === "boolean" && result === true) alert("ok")
  }

  return (
    <div className="formSign">
      <div className="formSign__heading">
        <Heading h={1} accent={2} accentColor="#FF6363">
          {formInfo.heading}
        </Heading>
      </div>
      <div className="formSign__inputs">
        <Form
          popUpLabel={formInfo.popUpLabel}
          inputLabels={inputLabels}
          warning={formState.warning}
          warningMessage={formState.message}
          getFormState={getFormState}
          loginValue={formState.login}
        />
      </div>
      <div className="formSign__button">
        <Button
          label={formInfo.buttonLabel}
          onClick={() => findErrors(formState)}
          variant="main"
        />
      </div>
      <div className="formSign__footer">
        <Text>{formInfo.swap.text}</Text>
        <Button
          label={formInfo.swap.label}
          onClick={swapClick}
          variant="link"
        />
      </div>
    </div>
  )
}

export default FormSign
