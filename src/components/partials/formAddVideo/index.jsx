import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Heading } from "../../primitives"
import VideoInputs from "./videoInputs"
import VideoLoader from "./videoLoader"
import findErrors from "./findErrors"
import "./style.css"

function FormAddVideo() {
  const {
    heading,
    inputLabels,
    errorLabels,
    buttonLabels,
    loadingLabel,
    successLabel,
  } = useSelector(({ siteInfo }) => siteInfo.addVideoFormInfo)
  const { requesting, postSuccess, postError } = useSelector(
    ({ video }) => video
  )
  const userInfo = useSelector((store) => store.user.info)

  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch({ type: "modal/close" })
    if (postSuccess) {
      dispatch({ type: "video/resetPostSuccess" })
      dispatch({ type: "allUsers/request" })
    }
  }

  const [formState, setFormState] = useState({
    showError: false,
  })
  const getFormState = (el) => {
    setFormState({
      ...formState,
      ...el,
    })
  }
  const showInternalError = (id) => {
    setFormState({
      ...formState,
      showError: true,
      errorMessage: errorLabels[id],
    })
  }

  useEffect(() => {
    if (postError) {
      setFormState({
        ...formState,
        showError: true,
        errorMessage: postError.message,
      })
    }
  }, [postError])

  function submitForm(form) {
    const err = findErrors(form)
    if (err) showInternalError(err)
    if (!err) {
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
  }

  const showInputs = !requesting && !postSuccess
  const showLoader = requesting || postSuccess

  return (
    <div className="formVideoUpload">
      <div className="formVideoUpload__heading">
        <Heading h={1} accent={2} accentColor="#FF6363">
          {heading}
        </Heading>
      </div>
      {showInputs && (
        <VideoInputs
          valueLink={formState.link}
          valueName={formState.name}
          valueDescription={formState.description}
          labelLink={inputLabels.link}
          labelName={inputLabels.videoName}
          labelDescription={inputLabels.videoDescription}
          getFormState={getFormState}
          showError={formState.showError}
          errorMessage={formState.errorMessage}
        />
      )}
      {showLoader && (
        <VideoLoader
          src={formState.link}
          loadingLabel={loadingLabel}
          successLabel={successLabel}
          success={postSuccess}
        />
      )}
      {showInputs && (
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
      )}
      {!showInputs && (
        <div className="formVideoUpload__controls">
          <Button
            label={buttonLabels.onSuccess}
            variant="main"
            disabled={!postSuccess}
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  )
}

export default FormAddVideo
