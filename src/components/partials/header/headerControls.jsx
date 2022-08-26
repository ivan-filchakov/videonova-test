import React from "react"
import { useDispatch } from "react-redux"
import { Button, Icon, Image } from "../../primitives"
import { useHeaderInfo, useUserInfo } from "./useStore"

function HeaderControls() {
  const dispatch = useDispatch()
  const showModal = () => {
    dispatch({
      type: "modal/toggle",
      payload: true,
    })
    dispatch({
      type: "modal/placeContent",
      payload: "FormSign",
    })
  }

  const { headerControls } = useHeaderInfo()
  const { authorized } = useUserInfo()

  return (
    <div className="headerControls">
      {!authorized && (
        <div className="headerControls__button">
          <Button
            variant="transparent"
            label={headerControls.buttonLabel}
            onClick={() => showModal()}
          />
        </div>
      )}
      {authorized && (
        <>
          <div className="headerControls__pic">
            <Image src="https://picsum.photos/100/100/" alt="alt" fit="cover" />
          </div>
          <div className="headerControls__profileLink">
            <Button
              variant="link"
              label="Anna May"
              linkColor="#000"
              onClick=""
            />
          </div>
          <div className="headerControls__profileControl">
            <Icon name="MdOutlineExitToApp" color="#000" size="24px" />
          </div>
        </>
      )}
    </div>
  )
}

export default HeaderControls
