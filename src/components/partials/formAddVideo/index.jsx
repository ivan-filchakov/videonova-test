<<<<<<< HEAD
import React, { useEffect, useState } from "react"
=======
import React, { useState } from "react"
>>>>>>> main
import { useDispatch, useSelector } from "react-redux"
import { Button, Heading, InputText, Text } from "../../primitives"
import findErrors from "./findErrors"
import "./style.css"

function FormAddVideo() {
  const { heading, inputLabels, errorLabels, buttonLabels } = useSelector(
    ({ siteInfo }) => siteInfo.addVideoFormInfo
  )
<<<<<<< HEAD
  const { postError, requesting } = useSelector(({ video }) => video)
  const userInfo = useSelector((store) => store.user.info)
=======
>>>>>>> main

  const dispatch = useDispatch()
  const closeModal = () => dispatch({ type: "modal/close" })

  const [formState, setFormState] = useState({})
  const getLink = (el) => setFormState({ ...formState, link: el.value })
  const getName = (el) => setFormState({ ...formState, name: el.value })
  const getDescription = (el) => {
    setFormState({ ...formState, description: el.value })
  }
<<<<<<< HEAD
  const showError = (internal, external) =>
    setFormState({
      ...formState,
      error: true,
      errorMessage: errorLabels[internal] || external,
=======
  const showError = (val) =>
    setFormState({
      ...formState,
      error: val,
      errorMessage: errorLabels[val],
>>>>>>> main
    })
  const hideError = () =>
    setFormState({ ...formState, error: null, errorMessage: null })

<<<<<<< HEAD
  useEffect(() => {
    if (postError) showError(-1, postError.message)
  }, [postError])
  useEffect(() => {
    if (postError) setFormState({ ...formState, showError: false })
  }, [])

  function submitForm(form) {
    const invalid = findErrors(form)
    if (invalid) showError(invalid)
    if (!invalid && !postError) {
      console.log({ form })
      hideError()
      dispatch({
        type: "video/post",
        payload: {
          url: form.link,
          title: form.name,
          description: form.description,
          token: userInfo.authToken,
        },
      })
    }
=======
  function submitForm(form) {
    const err = findErrors(form)
    if (err) showError(err)
    if (!err) hideError()
    console.log({ err })
>>>>>>> main
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
<<<<<<< HEAD
            <Text color="#000000">{formState.errorMessage}</Text>
=======
            <Text color="#000000">{errorLabels[formState.error]}</Text>
>>>>>>> main
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
<<<<<<< HEAD
          loading={requesting}
=======
>>>>>>> main
        />
      </div>
    </div>
  )
}

export default FormAddVideo
