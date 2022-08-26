import React from "react"
import { configureStore, createSlice } from "@reduxjs/toolkit"
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
        "Your Password is incorrect. Please, try again",
        "Passwords doesn't match! Try again",
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

const userInfoSlice = createSlice({
  initialState: {
    authorized: false,
    name: "Store Username",
  },
  name: "userInfo",
  reducers: userReducers(),
})

const modalSlice = createSlice({
  initialState: {
    isOpen: false,
    content: null,
  },
  name: "modal",
  reducers: modalReducers(),
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    userInfo: userInfoSlice.reducer,
    modal: modalSlice.reducer,
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
