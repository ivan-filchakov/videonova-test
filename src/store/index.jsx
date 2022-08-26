import React from "react"
import {
  configureStore,
  createListenerMiddleware,
  createSlice,
} from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import modalReducers from "./reducers/modalReducers"
import userReducers from "./reducers/userReducers"

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
        swap: {
          text: "Dont have an account?",
          label: "Sign Up",
        },
        popUpLabel: "Forgot password?",
      },
      signUpInfo: {
        heading: "Sign Up",
        buttonLabel: "Sign Up",
        swap: {
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

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  actionCreator: userSlice.actions.authorize,
  effect: (action) => {
    console.log(action.type)
  },
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
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
