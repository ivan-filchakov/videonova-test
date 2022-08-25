/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Modal from "./index"
import FormSign from "../../partials/formSign";

export default {
  title: "primitives/Modal",
  component: Modal,
  argTypes: {},
}

function Template(args) {
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
export const ModalWithSignForm = Template.bind({})
ModalWithSignForm.args = {
  onClose: "http://google.com"
}
