// import React, { useEffect, useState } from "react"
import React from "react"
import PropTypes from "prop-types"
import { InputText, Text } from "../../primitives"

function VideoInputs({
  valueLink,
  valueName,
  valueDescription,
  labelLink,
  labelName,
  labelDescription,
  getFormState,
  showError,
  errorMessage,
}) {
  // const [formState, setFormState] = useState({})
  const getLink = (el) => {
    getFormState({
      description: valueDescription,
      name: valueName,
      link: el.value,
    })
  }
  const getName = (el) => {
    getFormState({
      description: valueDescription,
      name: el.value,
      link: valueLink,
    })
  }
  const getDescription = (el) => {
    getFormState({ description: el.value, name: valueName, link: valueLink })
  }
  // useEffect(() => {
  //   if (typeof getFormState === "function") getFormState(formState)
  // }, [formState])
  return (
    <>
      {showError && (
        <div className="formVideoUpload__warning">
          <div className="formWarning">
            <Text color="#000000">{errorMessage}</Text>
          </div>
        </div>
      )}
      <div className="formVideoUpload__form">
        <InputText
          value={valueLink}
          label={labelLink}
          onChange={getLink}
          type="text"
        />
        <InputText
          value={valueName}
          label={labelName}
          onChange={getName}
          type="text"
        />
        <InputText
          value={valueDescription}
          label={labelDescription}
          onChange={getDescription}
          type="textarea"
        />
      </div>
    </>
  )
}

export default VideoInputs
VideoInputs.propTypes = {
  valueLink: PropTypes.string,
  valueName: PropTypes.string,
  valueDescription: PropTypes.string,
  labelLink: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  labelDescription: PropTypes.string.isRequired,
  getFormState: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
}
VideoInputs.defaultProps = {
  valueLink: undefined,
  valueName: undefined,
  valueDescription: undefined,
  showError: false,
  errorMessage: undefined,
}
