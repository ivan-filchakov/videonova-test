import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdaptiveLink, Button, Icon, Image } from "../../primitives"
import { useUserSlice, useSiteInfo } from "../../../store/selectors"

function HeaderControls() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    navigate("/")
  }

  const { headerControls } = useSiteInfo().headerInfo
  const { authorized, info } = useUserSlice()

  return (
    <div className="headerControls">
      {!authorized && (
        <div className="headerControls__button">
          <Button
            variant="transparent"
            label={headerControls.buttonLabel}
            onClick={showModal}
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
