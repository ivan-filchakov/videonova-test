import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit"
import userReducers from "./user.reducers"
import submitSignForm from "./user.actions"

export const userSlice2 = createSlice({
  initialState: {
    requesting: false,
    request: null,
    authorized: false,
    authError: null,
    info: null,
  },
  name: "user2",
  reducers: userReducers(),
})

export const userAuth2 = createListenerMiddleware()
userAuth2.startListening({
  actionCreator: userSlice2.actions.authorize,
  effect: async (action, listenerApi) => {
    try {
      const result = await submitSignForm(action.payload)
      listenerApi.dispatch(userSlice2.actions.authSuccess(result))
    } catch (e) {
      listenerApi.dispatch(userSlice2.actions.authError(e))
    }
  },
})
