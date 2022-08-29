import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import GridOfFour from "../gridOfFour"
import { Heading, Icon } from "../../primitives"
import UserCard from "../userCard"
import Loader from "../../primitives/loader"
import "./style.css"

function UsersList() {
  const users = useSelector(({ allUsers }) => allUsers)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "allUsers/request" })
  }, [])

  function renderUsersList() {
    return users.info.map((el) => (
      <UserCard
        image={el.userPic}
        buttonClick={`/user/${el.slug}`}
        buttonLabel="To profile"
        likesLabel="likes"
        name={el.userName}
        videosLabel="videos"
        likesCount={el.likes || 0}
        videosCount={el.videos || 0}
        key={el.id}
      />
    ))
  }

  const showLoader = users.requesting && !users.info

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
        <div className="usersList__content">
          <GridOfFour>{renderUsersList()}</GridOfFour>
        </div>
      )}
    </div>
  )
}

export default UsersList
