import React from "react"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"

const siteInfoSlice = createSlice({
  initialState: {
    test: "hello",
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

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
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
