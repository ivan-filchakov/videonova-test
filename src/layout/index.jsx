import React from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import Header from "../components/partials/header"
import Footer from "../components/partials/footer"
import FormSign from "../components/partials/formSign"
import FormVideoUpload from "../components/partials/formVideoUpload"
import Modal from "../components/partials/modal"
import "./style.css"

function Layout({ children }) {
  const modal = useSelector((store) => store.modal)
  const ModalContentLib = {
    FormSign: <FormSign />,
    FormVideoUpload: <FormVideoUpload />,
  }

  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch({
      type: "modal/toggle",
      payload: false,
    })
  }

  return (
    <div className="layout">
      <Modal isOpen={modal.isOpen} onClose={closeModal}>
        {ModalContentLib[modal.content]}
      </Modal>
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">{children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
Layout.propTypes = {
  /**
   *
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
