/* eslint-disable no-param-reassign */
export default function modalReducers() {
  return {
    toggle(state, action) {
      state.isOpen = action.payload
      if (!state.isOpen) state.content = null
    },
    placeContent(state, action) {
      state.content = action.payload
    },
  }
}
