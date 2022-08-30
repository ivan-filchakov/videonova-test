import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, Heading, Text } from "../../primitives"
import { useSiteInfo, useUserInfo } from "./useStore"
import FormSignIn from "./formSignIn"
import FormSignUp from "./formSIgnUp"
import validateForm from "./formValidation"
import "./style.css"

function FormSign() {
  const { signInInfo, signUpInfo, errorLabel, inputLabels } = useSiteInfo()
  const { requesting, authorized, authError, info } = useUserInfo()

  const [formState, setFormState] = useState({
    registered: false,
    error: false,
  })
  const getFormState = (el) => {
    setFormState({
      ...formState,
      ...el,
    })
  }

  const showError = (id, message) => {
    setFormState({
      ...formState,
      error: true,
      errorMessage: errorLabel[id] || message,
    })
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (authorized) {
      dispatch({ type: "modal/close" })
      navigate(`/user/${info.slug}`)
    }
  }, [authorized])

  useEffect(() => {
    if (authError) showError(-1, authError.message)
  }, [authError])

  const doShit = (form) => {
    const err = validateForm(form)
    if (errorLabel[err]) showError(err)
    dispatch({
      type: "user/authorize",
      payload: {
        registered: form.registered,
        username: form.login,
        password: form.password,
      },
    })
  }

  const formInfo = formState.registered ? signInInfo : signUpInfo
  const Form = formState.registered ? FormSignIn : FormSignUp
  const switchForms = () => {
    setFormState({
      ...formState,
      registered: !formState.registered,
      error: false,
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
          error={formState.error}
          errorMessage={formState.errorMessage}
          getFormState={getFormState}
          loginValue={formState.login}
        />
      </div>
      <div className="formSign__button">
        <Button
          label={formInfo.buttonLabel}
          onClick={() => doShit(formState)}
          variant="main"
          loading={requesting}
        />
      </div>
      <div className="formSign__footer">
        <Text>{formInfo.switch.text}</Text>
        <Button
          label={formInfo.switch.label}
          onClick={switchForms}
          variant="link"
        />
      </div>
    </div>
  )
}

export default FormSign
