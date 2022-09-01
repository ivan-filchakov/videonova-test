import { createSlice } from "@reduxjs/toolkit"

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
      errorLabel: {
        undefined: "Validation error",
        twoSpaces: "Incorrect login - no 2 spaces in a row",
        loginSymbols: "Incorrect symbols used in login",
        passwordSpaces: "No spaces in the password",
        passwordSymbols: "Incorrect symbols used in password",
        noMatch: "Passwords doesn't match! Try again",
        noLogin: "Enter your name",
        noPassword: "Enter your password",
      },
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
    userPageInfo: {
      videosList: {
        heading: "'s videos",
        buttonLabel: "Add video",
        isEmpty: "hasn't uploaded any videos yet...",
      },
    },
  },
  name: "siteInfo",
})

export default siteInfoSlice
