/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Modal from "./index"
import FormSign from "../../partials/formSign";

export default {
  title: "primitives/Modal",
  component: Modal,
  argTypes: {},
}

export function Default(args) {
  return (
    <div
      style={{
        height: "100%",
        background: "url(https://picsum.photos/100/100/)",
        backgroundSize: "cover",
      }}>
      <Modal {...args}>
        <div>Modal children content here</div>
        <div>Modal children content here</div>
        <div>Modal children content here</div>
      </Modal>
    </div>
  )
}
Default.args = {
  onClose: ""
}

export function ModalWithSignForm(args) {
  return (
    <div
      style={{
        height: "100%",
        background: "url(https://picsum.photos/100/100/)",
        backgroundSize: "cover",
      }}>
      <Modal {...args}>
        <FormSign />
      </Modal>
    </div>
  )
}
ModalWithSignForm.args = {
  onClose: "http://google.com"
}
