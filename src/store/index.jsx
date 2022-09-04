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
import { videoSlice, postVideo } from "../modules/video"

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    modal: modalSlice.reducer,
    allUsers: allUsersSlice.reducer,
    user: userSlice.reducer,
    video: videoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      listenAllUsers.middleware,
      getUsersVideos.middleware,
      userAuth.middleware,
      postVideo.middleware,
    ]),
  preloadedState: {
    user: localStorage.getItem("userLocal")
      ? JSON.parse(localStorage.getItem("userLocal"))
      : {},
  },
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
