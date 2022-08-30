import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import siteInfoSlice from "../modules/siteInfo"
import modalSlice from "../modules/modal"
import { userSlice, userAuth } from "../modules/user"
import {
  allUsersSlice,
  listenAllUsers,
  getUsersVideos,
} from "../modules/allUsers"

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    modal: modalSlice.reducer,
    allUsers: allUsersSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      listenAllUsers.middleware,
      getUsersVideos.middleware,
      userAuth.middleware,
    ]),
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  /**
   * Content inside block could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
