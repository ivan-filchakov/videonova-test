import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import Icon from "../icon";
import {AdaptiveLink} from "../index";

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        <div className="modal__close">
          <AdaptiveLink action={onClose} stretch />
          <Icon color="#000" size="16px" name="CustomCross" />
        </div>
      </div>
      <div className="modal__bg">
        <AdaptiveLink action={onClose} stretch />
      </div>
    </div>
  )
}

export default Modal
Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}
