import React from "react"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import userReducers from "./reducers/user.reducers" // !!--
import siteInfoSlice from "../modules/siteInfo"
import modalSlice from "../modules/modal"
import { userSlice2, userAuth2 } from "../modules/user"
import {
  allUsersSlice,
  listenAllUsers,
  getUsersVideos,
} from "../modules/allUsers"

const userSlice = createSlice({
  initialState: {
    requesting: false,
    authorized: false,
    authError: null,
    info: null,
  },
  name: "user",
  reducers: userReducers(),
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    user: userSlice.reducer,
    user2: userSlice2.reducer,
    modal: modalSlice.reducer,
    allUsers: allUsersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      userAuth2.middleware,
      listenAllUsers.middleware,
      getUsersVideos.middleware,
    ]),
})
export const { authorize } = userSlice.actions

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
