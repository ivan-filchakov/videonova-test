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
    addVideoFormInfo: {
      heading: "Add New Video",
      inputLabels: {
        link: "YouTube link",
        videoName: "Name of the video",
        videoDescription: "Description",
      },
      errorLabels: {
        noLink: "Video link can't be empty",
        linkSpaces: "Dont use spaces in the link form",
        incorrectLink: "Enter correct link for YouTube video",
        noName: "Video name can't be empty",
        twoSpaces: "Dont use two spaces in a row",
        tooLongName: "Video name can't be longer than 40 characters",
        incorrectSymblos: "You can only use letters and numbers, no symbols",
        noDescription: "Description can't be empty",
        tooLongDescription: "Description can't be longer than 120 characters",
      },
      buttonLabels: {
        cancel: "Cancel",
        submit: "Submit",
      },
    },
    homePageInfo: {
      heading: "Welcome to VideoNova",
      subheading:
        "Creative videos with a single click. Add subtitles, transcribe and more",
      buttonLabel: "Start Now",
    },
    usersList: {
      heading: "Best creators",
      buttonLabel: "To profile",
      likesLabel: "likes",
      videosLabel: "videos",
    },
    userPageInfo: {
      videosList: {
        heading: "'s videos",
        buttonLabel: "Add video",
        isEmpty: "hasn't uploaded any videos yet...",
      },
    },
    footerInfo: {
      socials: [
        { iconName: "CustomTelegram", link: "http://telegram.org" },
        { iconName: "CustomDiscord", link: "http://discord.gg" },
        { iconName: "CustomTwitter", link: "http://twitter.com" },
      ],
      copyright: "All rights reserved",
    },
  },
  name: "siteInfo",
})

export default siteInfoSlice
