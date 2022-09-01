/* eslint-disable no-param-reassign */
export default function allUsersReducers() {
  return {
    request(state) {
      state.requesting = true
    },
    requestSuccess(state, action) {
      state.requesting = false
      state.requestError = null
      state.info = action.payload
    },
    requestError(state, action) {
      state.requesting = false
      state.requestError = action.payload
      state.info = null
    },
    getUsersVideos(state, action) {
      const allVideos = action.payload
      const filterById = (id) => allVideos.filter((el) => el.userId === id)
      state.info.map((user) => {
        user.video = filterById(user.id)
        return null
      })
    },
    getUsersVideosError(state, action) {
      state.videosError = action.payload
    },
  }
}
