import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Heading, InputText, Text } from "../../primitives"
import findErrors from "./findErrors"
import "./style.css"

function FormAddVideo() {
  const { heading, inputLabels, errorLabels, buttonLabels } = useSelector(
    ({ siteInfo }) => siteInfo.addVideoFormInfo
  )

  const dispatch = useDispatch()
  const closeModal = () => dispatch({ type: "modal/close" })

  const [formState, setFormState] = useState({})
  const getLink = (el) => setFormState({ ...formState, link: el.value })
  const getName = (el) => setFormState({ ...formState, name: el.value })
  const getDescription = (el) => {
    setFormState({ ...formState, description: el.value })
  }
  const showError = (val) =>
    setFormState({
      ...formState,
      error: val,
      errorMessage: errorLabels[val],
    })
  const hideError = () =>
    setFormState({ ...formState, error: null, errorMessage: null })

  function submitForm(form) {
    const err = findErrors(form)
    if (err) showError(err)
    if (!err) hideError()
    console.log({ err })
  }

  return (
    <div className="formVideoUpload">
      <div className="formVideoUpload__heading">
        <Heading h={1} accent={2} accentColor="#FF6363">
          {heading}
        </Heading>
      </div>
      {formState.error && (
        <div className="formVideoUpload__warning">
          <div className="formWarning">
            <Text color="#000000">{errorLabels[formState.error]}</Text>
          </div>
        </div>
      )}
      <div className="formVideoUpload__form">
        <InputText label={inputLabels.link} onChange={getLink} type="text" />
        <InputText
          label={inputLabels.videoName}
          onChange={getName}
          type="text"
        />
        <InputText
          label="Description"
          onChange={getDescription}
          type="textarea"
        />
      </div>
      <div className="formVideoUpload__controls">
        <Button
          label={buttonLabels.cancel}
          variant="transparent"
          onClick={closeModal}
        />
        <Button
          label={buttonLabels.submit}
          variant="main"
          onClick={() => submitForm(formState)}
        />
      </div>
    </div>
  )
}

export default FormAddVideo
