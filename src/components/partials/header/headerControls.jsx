import React from "react"
import { useDispatch } from "react-redux"
import { AdaptiveLink, Button, Icon, Image } from "../../primitives"
import { useHeaderInfo, useUserInfo } from "./useStore"

function HeaderControls() {
  const dispatch = useDispatch()
  const showModal = () => {
    dispatch({
      type: "modal/placeContent",
      payload: "FormSign",
    })
  }
  const unauthorize = () => {
    dispatch({
      type: "user/unauthorize",
    })
    return "/"
  }

  const { headerControls } = useHeaderInfo()
  const { authorized, info } = useUserInfo()

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
            <AdaptiveLink action={`/user/${info.slug}`} stretch />
            <Image src={info.userPic} alt={info.userName} fit="cover" />
          </div>
          <div className="headerControls__profileLink">
            <Button
              variant="link"
              label={info.userName}
              linkColor="#000"
              onClick={`/user/${info.slug}`}
            />
          </div>
          <div className="headerControls__profileControl">
            <AdaptiveLink action={() => unauthorize()} stretch />
            <Icon name="MdOutlineExitToApp" color="#000" size="18px" />
          </div>
        </>
      )}
    </div>
  )
}

export default HeaderControls
