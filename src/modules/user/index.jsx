import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit"
import userReducers from "./user.reducers"
import submitSignForm from "./user.actions"

export const userSlice = createSlice({
  initialState: {
    requesting: false,
    request: null,
    authorized: false,
    authError: null,
    info: null,
  },
  name: "user",
  reducers: userReducers(),
})

export const userAuth = createListenerMiddleware()
userAuth.startListening({
  actionCreator: userSlice.actions.authorize,
  effect: async (action, listenerApi) => {
    try {
      const result = await submitSignForm(action.payload)
      listenerApi.dispatch(userSlice.actions.authSuccess(result))
    } catch (e) {
      listenerApi.dispatch(userSlice.actions.authError(e))
    }
  },
})
