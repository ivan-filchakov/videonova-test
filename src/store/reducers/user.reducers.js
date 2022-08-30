// /* eslint-disable no-param-reassign */
// export default function userReducers() {
//   return {
//     authorize(state) {
//       state.requesting = true
//     },
//     authSuccess(state, action) {
//       state.requesting = false
//       state.authorized = true
//       state.authError = null
//       state.info = action.payload
//     },
//     authError(state, action) {
//       state.requesting = false
//       state.authorized = false
//       state.authError = action.payload
//       state.info = null
//     },
//     unauthorize(state) {
//       state.requesting = false
//       state.authorized = false
//       state.authError = null
//     },
//   }
// }
