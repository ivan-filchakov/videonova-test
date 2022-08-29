import React from "react"
import {
  configureStore,
  createListenerMiddleware,
  createSlice,
} from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import {
  allUsersReducers,
  modalReducers,
  recentVideosReducers,
  userReducers,
} from "./reducers"
import callAllUsers from "./actions/allUsers.actions"
import callRecentVideos from "./actions/recentVideos.actions"

const siteInfoSlice = createSlice({
  initialState: {
    test: "hello",
    headerInfo: {
      headerControls: {
        buttonLabel: "Sign Up",
      },
    },
    signFormInfo: {
      signInInfo: {
        heading: "Sign In",
        buttonLabel: "Sign In",
        switch: {
          text: "Dont have an account?",
          label: "Sign Up",
        },
        popUpLabel: "Forgot password?",
      },
      signUpInfo: {
        heading: "Sign Up",
        buttonLabel: "Sign Up",
        switch: {
          text: "Already have an account?",
          label: "Sign In",
        },
      },
      warningMessage: [
        "Unknown error",
        "Incorrect login - no 2 spaces in a row",
        "Incorrect symbols used in login",
        "No spaces in the password",
        "Incorrect symbols used in password",
        "Passwords doesn't match! Try again",
        "Enter your name",
        "Enter your password",
      ],
      inputLabels: {
        login: "Name",
        password: "Password",
        passwordRepeat: "Repeat password",
      },
    },
    homePageInfo: {
      heading: "Welcome to VideoNova",
      subheading:
        "Creative videos with a single click. Add subtitles, transcribe and more",
      buttonLabel: "Start Now",
    },
  },
  name: "siteInfo",
})

const modalSlice = createSlice({
  initialState: {
    isOpen: false,
    content: null,
  },
  name: "modal",
  reducers: modalReducers(),
})

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

async function mockApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve({ some: "info" })
      reject(new Error("some error from mock function"))
    }, 1000)
  })
}

const userAuth = createListenerMiddleware()
userAuth.startListening({
  actionCreator: userSlice.actions.authorize,
  effect: async (action, listenerApi) => {
    try {
      const result = await mockApiCall()
      listenerApi.dispatch(userSlice.actions.authSuccess(result))
    } catch (e) {
      listenerApi.dispatch(userSlice.actions.authError({ e }))
    }
  },
})

const allUsersSlice = createSlice({
  initialState: {
    requesting: false,
    requestError: null,
    info: null,
  },
  name: "allUsers",
  reducers: allUsersReducers(),
})

const listenAllUsers = createListenerMiddleware()
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

const recentVideosSlice = createSlice({
  initialState: {
    requesting: false,
    requestError: null,
    info: null,
  },
  name: "recentVideos",
  reducers: recentVideosReducers(),
})

const listenRecentVideos = createListenerMiddleware()
listenRecentVideos.startListening({
  actionCreator: recentVideosSlice.actions.request,
  effect: async (action, listenerApi) => {
    try {
      const result = await callRecentVideos()
      listenerApi.dispatch(recentVideosSlice.actions.requestSuccess(result))
    } catch (e) {
      listenerApi.dispatch(recentVideosSlice.actions.requestError({ e }))
    }
  },
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
    allUsers: allUsersSlice.reducer,
    recentVideos: recentVideosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      userAuth.middleware,
      listenAllUsers.middleware,
      listenRecentVideos.middleware,
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
