import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Heading, Text } from "../../primitives"
import { useSignFormInfo } from "./useStore"
import FormSignIn from "./formSignIn"
import FormSignUp from "./formSIgnUp"
import validateForm from "./formValidation"
// import { submitSignUp, submitSignIn } from "./apiCalls"
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
  const showWarning = (id, message) => {
    setFormState({
      ...formState,
      warning: true,
      message: warningMessage[id] || message,
    })
  }
  const findErrors = (form) => {
    const result = validateForm(form)
    if (typeof result === "string") {
      showWarning(result)
      return true
    }
    return false
  }

  const [response, setResponse] = useState()
  const dispatch = useDispatch()
  const saveResponse = (el) => {
    console.log(el)
    if (el.type === "notfound" || "exists") {
      showWarning(-1, el.message)
      dispatch({
        type: "user/authError",
        payload: el.message,
      })
    }
    if (el.authToken) {
      dispatch({
        type: "user/authSuccess",
        payload: el,
      })
      dispatch({
        type: "modal/toggle",
        payload: false,
      })
    }
  }

  useEffect(() => {
    if (response) saveResponse(response)
  }, [response])

  function submitSignUp() {
    fetch("https://wonderful-app-lmk4d.cloud.serverless.com/register", {
      method: "POST",
      body: JSON.stringify({
        username: formState.login,
        password: formState.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setResponse(res))
    return null
  }

  function submitSignIn() {
    fetch("https://wonderful-app-lmk4d.cloud.serverless.com/auth", {
      method: "POST",
      body: JSON.stringify({
        username: formState.login,
        password: formState.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setResponse(res))
    return null
  }

  async function submitForm() {
    const error = await findErrors(formState)
    if (!error && !formState.registered) submitSignUp()
    if (!error && formState.registered) submitSignIn()
  }

  const formInfo = formState.registered ? signInInfo : signUpInfo
  const Form = formState.registered ? FormSignIn : FormSignUp
  const swapForms = () => {
    setFormState({
      ...formState,
      registered: !formState.registered,
      warning: false,
    })
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
          onClick={() => submitForm()}
          variant="main"
        />
      </div>
      <div className="formSign__footer">
        <Text>{formInfo.swap.text}</Text>
        <Button
          label={formInfo.swap.label}
          onClick={swapForms}
          variant="link"
        />
      </div>
    </div>
  )
}

export default FormSign
