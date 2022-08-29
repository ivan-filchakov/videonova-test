import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit"
import allUsersReducers from "./allUsers.reducers"
import callAllUsers from "./allUsers.action"
import callRecentVideos from "./recentVideos.action"

export const allUsersSlice = createSlice({
  initialState: {
    requesting: false,
    requestError: null,
    info: null,
    videosError: null,
  },
  name: "allUsers",
  reducers: allUsersReducers(),
})

export const listenAllUsers = createListenerMiddleware()
listenAllUsers.startListening({
  actionCreator: allUsersSlice.actions.request,
  effect: async (action, listenerApi) => {
    try {
      const result = await callAllUsers()
      listenerApi.dispatch(allUsersSlice.actions.requestSuccess(result))
    } catch (e) {
      listenerApi.dispatch(allUsersSlice.actions.requestError({ e }))
    }
  },
})

export const getUsersVideos = createListenerMiddleware()
getUsersVideos.startListening({
  actionCreator: allUsersSlice.actions.requestSuccess,
  effect: async (action, listenerApi) => {
    try {
      const result = await callRecentVideos()
      listenerApi.dispatch(allUsersSlice.actions.getUsersVideos(result))
    } catch (e) {
      listenerApi.dispatch(allUsersSlice.actions.getUsersVideosError({ e }))
    }
  },
})
