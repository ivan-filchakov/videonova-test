import React, { useState } from "react"
import { Button, Heading, Text } from "../../primitives"
import { useSignFormInfo } from "./useSiteInfo"
import FormSignIn from "./formSignIn"
import FormSignUp from "./formSIgnUp"
import "./style.css"

function FormSign() {

  const { signInInfo, signUpInfo, warningMessage, inputLabels } = useSignFormInfo()

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

  const formInfo = formState.registered ? signInInfo : signUpInfo
  const Form = formState.registered ? FormSignIn : FormSignUp

  const swapClick = () => setFormState({
    ...formState,
    registered: !formState.registered
  })

  return (
    <div className="formSign">
      <div className="formSign__heading">
        <Heading h={1} accent={2} accentColor="#FF6363">
          {formInfo.heading}
        </Heading>
      </div>
      <div className="formSign__inputs">
        <Form
          info={formInfo}
          inputLabels={inputLabels}
          warning={formState.warning}
          warningMessage={warningMessage}
          getFormState={getFormState}
          loginValue={formState.login}
        />
      </div>
      <div className="formSign__button">
        <Button label={formInfo.buttonLabel} onClick="" variant="main" />
      </div>
      <div className="formSign__footer">
        <Text>{formInfo.swap.text}</Text>
        <Button label={formInfo.swap.label} onClick={swapClick} variant="link" />
      </div>
    </div>
  )
}

export default FormSign
