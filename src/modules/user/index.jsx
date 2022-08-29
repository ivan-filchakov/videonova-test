import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit"
import userReducers from "./user.reducers"

export const userSlice2 = createSlice({
  initialState: {
    requesting: false,
    authorized: false,
    authError: null,
    info: null,
  },
  name: "user2",
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

export const userAuth2 = createListenerMiddleware()
userAuth2.startListening({
  actionCreator: userSlice2.actions.authorize,
  effect: async (action, listenerApi) => {
    try {
      const result = await mockApiCall()
      listenerApi.dispatch(userSlice2.actions.authSuccess(result))
    } catch (e) {
      listenerApi.dispatch(userSlice2.actions.authError({ e }))
    }
  },
})
