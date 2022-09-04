import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Heading, Icon, Loader } from "../../primitives"
import GridOfFour from "../gridOfFour"
import UserCard from "../userCard"
import { useSiteInfo, useAllUsers } from "../../../store/selectors"
import { sortByName, sortByVideos } from "./sort"
import "./style.css"
import "./style.media.css"

function UsersList() {
  const { usersList } = useSiteInfo()
  const allUsers = useAllUsers()

  const [allUsersInfo, setAllUsersInfo] = useState(null)
  useEffect(() => setAllUsersInfo(allUsers.info), [allUsers.info])

  const [sortState, setSortState] = useState("")

  const dispatch = useDispatch()
  /**
   * Request for users list from api if allUsers.info not found in store
   */
  useEffect(() => {
    if (!allUsers.info) dispatch({ type: "allUsers/request" })
  }, [])

  /**
   * Creates list of UserCard elements
   * @return {JSX.Element}
   */
  function renderUsersList(arr) {
    const UserCards = arr.map((el) => {
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

  const showLoader = allUsers.requesting || !allUsersInfo
  const sortNameIcon =
    sortState === "nameAZ" ? "BsSortAlphaDownAlt" : "BsSortAlphaDown"
  const sortVidsIcon = sortState === "vidMax" ? "BsSortDownAlt" : "BsSortDown"

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
      {allUsersInfo && (
        <div className="usersList__controls">
          <span className="sortControl">
            <div
              className="sortControl__button"
              onClick={() =>
                sortByVideos(
                  allUsers.info,
                  sortState,
                  setSortState,
                  setAllUsersInfo
                )
              }
              onKeyPress={() => sortByName(allUsers.info)}
              role="button"
              tabIndex="0"
            >
              <Icon color="#000" size="24px" name={sortVidsIcon} />
            </div>
            <div
              className="sortControl__button"
              onClick={() =>
                sortByName(
                  allUsers.info,
                  sortState,
                  setSortState,
                  setAllUsersInfo
                )
              }
              onKeyPress={() => sortByName(allUsers.info)}
              role="button"
              tabIndex="0"
            >
              <Icon color="#000" size="24px" name={sortNameIcon} />
            </div>
          </span>
        </div>
      )}
      {allUsersInfo && (
        <div className="usersList__content">
          {renderUsersList(allUsersInfo)}
        </div>
      )}
    </div>
  )
}

export default UsersList
