import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Heading, Icon, Loader } from "../../primitives"
import GridOfFour from "../gridOfFour"
import UserCard from "../userCard"
import "./style.css"
import "./style.media.css"

function UsersList() {
  const users = useSelector(({ allUsers }) => allUsers)
  const dispatch = useDispatch()
  /**
   * Request for users list from api if allUsers.info not found in store
   */
  useEffect(() => {
    if (!users.info) dispatch({ type: "allUsers/request" })
  }, [])

  const showLoader = users.requesting && !users.info
  /**
   * Creates list of UserCard elements
   * @return {JSX.Element}
   */
  function renderUsersList() {
    const UserCards = users.info.map((el) => {
      const count = (obj) => (obj ? obj.length : 0)
      return (
          <UserCard
            image={el.userPic}
            name={el.userName}
            buttonClick={`/user/${el.slug}`}
            buttonLabel="To profile"
            likesCount={count(el.likes)}
            likesLabel="likes"
            videosCount={count(el.video)}
            videosLabel="videos"
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
          Best creators&nbsp;
          <Icon color="#FFA959" size="30px" name="CustomRating" />
        </Heading>
      </div>
      {showLoader && (
        <div className="userList__loader">
          <Loader />
        </div>
      )}
      {users.info && (
        <div className="usersList__content">{renderUsersList()}</div>
      )}
    </div>
  )
}

export default UsersList
