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

export default siteInfoSlice
