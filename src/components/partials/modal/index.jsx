import React from "react"
import PropTypes from "prop-types"
import { AdaptiveLink, Icon } from "../../primitives"
import "./style.css"
import "./style.media.css"

function Modal({ children, isOpen, onClose }) {
  if (isOpen)
    return (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__close">
            <AdaptiveLink action={onClose} stretch />
            <Icon color="#000" size="16px" name="CustomCross" />
          </div>
          {children}
        </div>
        <div className="modal__bg">
          <AdaptiveLink action={onClose} stretch />
        </div>
      </div>
    )
}

export default Modal
Modal.propTypes = {
  /**
   * Dynamic data determined by global state or parent component
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Global state, changes through dispatch in ./src/layout component
   */
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}
Modal.defaultProps = {
  children: undefined,
  isOpen: false,
  onClose: undefined,
}
