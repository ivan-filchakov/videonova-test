import { createSlice } from "@reduxjs/toolkit"
import modalReducers from "./modal.reducers"

const modalSlice = createSlice({
  initialState: {
    isOpen: false,
    content: null,
  },
  name: "modal",
  reducers: modalReducers(),
})

export default modalSlice
