import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit"
import videoReducers from "./video.reducers"
import callPostVideo from "../../api/postVideo"

export const videoSlice = createSlice({
  initialState: {
    requesting: false,
    request: null,
    postSuccess: null,
    postError: null,
    info: null,
  },
  name: "video",
  reducers: videoReducers(),
})

export const postVideo = createListenerMiddleware()
postVideo.startListening({
  actionCreator: videoSlice.actions.post,
  effect: async (action, listenerApi) => {
    try {
      const result = await callPostVideo(action.payload)
      listenerApi.dispatch(videoSlice.actions.postSuccess(result))
    } catch (e) {
      listenerApi.dispatch(videoSlice.actions.postError(e))
    }
  },
})
