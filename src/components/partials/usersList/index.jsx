import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Heading, Icon, Loader } from "../../primitives"
import GridOfFour from "../gridOfFour"
import UserCard from "../userCard"
import { useSiteInfo, useAllUsers } from "../../../store/selectors"
import "./style.css"
import "./style.media.css"

function UsersList() {
  const { usersList } = useSiteInfo()
  const allUsers = useAllUsers()
  const dispatch = useDispatch()
  /**
   * Request for users list from api if allUsers.info not found in store
   */
  useEffect(() => {
    if (!allUsers.info) dispatch({ type: "allUsers/request" })
  }, [])

  const showLoader = allUsers.requesting && !allUsers.info
  /**
   * Creates list of UserCard elements
   * @return {JSX.Element}
   */
  function renderUsersList() {
    const UserCards = allUsers.info.map((el) => {
      const count = (obj) => (obj ? obj.length : 0)
      return (
        <UserCard
          image={el.userPic}
          name={el.userName}
          buttonClick={`/user/${el.slug}`}
          buttonLabel={usersList.buttonLabel}
          likesCount={count(el.likes)}
          likesLabel={usersList.likesLabel}
          videosCount={count(el.video)}
          videosLabel={usersList.videosLabel}
          key={el.id}
        />
      )
    })
    return <GridOfFour>{UserCards}</GridOfFour>
  }

  return (
    <div className="usersList">
      <div className="usersList__heading">
        <Heading h={2}>
          {usersList.heading}&nbsp;
          <Icon color="#FFA959" size="30px" name="CustomRating" />
        </Heading>
      </div>
      {showLoader && (
        <div className="userList__loader">
          <Loader />
        </div>
      )}
      {allUsers.info && (
        <div className="usersList__content">{renderUsersList()}</div>
      )}
    </div>
  )
}

export default UsersList
