import React from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import Header from "../components/partials/header"
import Footer from "../components/partials/footer"
import FormSign from "../components/partials/formSign"
import FormAddVideo from "../components/partials/formAddVideo"
import Modal from "../components/partials/modal"
import "./style.css"
import "./style.media.css"

function Layout({ children }) {
  const modal = useSelector((store) => store.modal)
  const ModalContentLib = {
    FormSign: <FormSign />,
    FormAddVideo: <FormAddVideo />,
  }

  const dispatch = useDispatch()
  const closeModal = () => dispatch({ type: "modal/close" })

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
